import React from 'react'
import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config' //using storage sdk to upload file 

export default function useStorage(file) {

    const [progress, setProgress] = useState(0)    //progress of how much has been uploaded
    const [error, setError] = useState(null)  //any error while uploading 
    const [url, setUrl] = useState(null)    //image url we get back from the storage after it
    // been fully uploaded

    useEffect(() => {
        //creating a reference of the file inside the default firebase storage bucket by
        //file name. the file uploaded should have this file.name in the default bucket
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images');
        //fetch images from images collection

        //upload the file from the reference storageRef
        storageRef.put(file).on('state_changed', (snap) => {
            const percentage = (snap.bytesTransferred/ snap.totalBytes) * 100;
            setProgress(percentage) //how much the image has been uploaded
        }, (err) => {  //when an error occurs
            setError(err)
        }, async () => { //when the upload is fully complete
            const url = await storageRef.getDownloadURL();
            //storing the image url from the reference through which the file has been
            //uploaded 
            const createdAt =  timeStamp();
            collectionRef.add({ url , createdAt });
            setUrl(url)
        })
    }, [file])
    

  return (
    {progress, url, error}
  )
}
