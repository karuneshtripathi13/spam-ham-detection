import React from 'react'
import {useState} from "react";

const Home = () => {
    const [message,setMessage] = useState("")
    const [result, setResult] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data={message:message}
        console.log(data)
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch('/getpred', requestOptions)
        .then(response => response.json())
        .then(data => setResult(data.result));
    }
    return (
        <div>
            <div id="title">SPAM HAM PREDICTOR</div>
            <div id="txt">Enter Message</div>
            <textarea id="message" text-warp onChange={(e)=>{setMessage(e.target.value)}}></textarea><br/>
            <button id="check" onClick={handleSubmit}>Check</button>
            <div className={(result==='')?"hidden":"show"}>{result}</div>
            <div id="footer">All rights reserved Copyright&copy;KT</div>
        </div>
    )
}

export default Home
