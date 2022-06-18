import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

import React from 'react'

export default function useFirestore(collection) {

    const [docs, setDocs] = useState([])

    useEffect(() => {
        //reach into the documents and listen for collections inside the document
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {  //fires everytime a change occurs inside the collection
            let documents = []
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents)
        })

        return () => unsub();


    }, [collection])

    return {docs}

}
