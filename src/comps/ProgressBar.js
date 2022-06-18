import React from 'react'
import { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

export default function ProgressBar({ file, setFile }) {

    const {url, progress} = useStorage(file)
    
    useEffect(() => {
        if(url) {             //when we get the url, means when the file gets fully uploaded
            setFile(null)     //file is set to null, so that the progress bar disappears
        }
    }, [url, setFile])


  return (
    <div className='progress-bar' style={{width: progress + '%'}}>progerss</div>
  )
}
