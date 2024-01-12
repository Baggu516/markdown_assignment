import React,{useEffect, useState} from 'react'
import Markdown from 'react-markdown'
const MarkDownComponent = () => {
    const [text,setText]=useState("# Hello world !")
    const [marktext,setMarkText]=useState("# Hello world !")
    useEffect(()=>{
         setMarkText(text)
    },[text])
  return (
    <div className='mark-container'>
        <div className='container1'>
            <input type="text"  value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className='container2'>
            <Markdown>{marktext}</Markdown>
        </div>
    </div>
  )
}

export default MarkDownComponent