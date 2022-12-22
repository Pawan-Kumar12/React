import React from 'react';
import { useState } from 'react';

export default function Form(){
    
    const [textChange, setText] = useState('Hi Please Write Here.');
    const character = textChange.length;
    const charWithoutSpace = textChange.split(' ').join('');

    if(textChange && textChange !== ' '){
     var words = textChange.match(/\b[-?(\w+)?]+\b/gi);
    }
    else{
        words = textChange;
    }
    

    const hookHandler = (event)=>{
        setText(event.target.value);
    };

    const uppercaseConverter = ()=>{
        setText(textChange.toUpperCase())
    }
    const lowercaseConverter = ()=>{
        setText(textChange.toLowerCase())
    }
    const getReverse = ()=>{
       let newText = textChange.split('').reverse().join('')
        setText(newText)
    }
    const textToSpeechfn = ()=>{
                let textSpeechCon = new SpeechSynthesisUtterance();  //Api object in which lang,vol etc propertirs are defined
                textSpeechCon.lang = 'en-US';
                textSpeechCon.text = textChange;
                textSpeechCon.volume = 0.5;   

                window.speechSynthesis.speak(textSpeechCon);   // speak

                textSpeechCon.onend = function() {
                    window.speechSynthesis.cancel()    // empty queue
                }   
    }
    const clear = ()=>{
        setText('')
    }


    return(
        <>
        <div className="container">
            {/* <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Type Anything to convert</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                </div> */}
            <div className="mb-3 my-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" ><b>Input textarea</b></label>
                <textarea className="form-control my-3" id="exampleFormControlTextarea1" style={{height: "30vh"}} rows="3" value={textChange} onChange={hookHandler}></textarea>
            </div>
            <div className="container my-2">           
                <button className='btn btn-primary mx-1' onClick={uppercaseConverter}> UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={lowercaseConverter}> LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={getReverse}> Reverse</button>
                <button className='btn btn-primary mx-1' onClick={textToSpeechfn}> Text To Speech</button>
                <button className='btn btn-primary mx-1' onClick={clear}> Clear</button>
                <p className='my-3'>No of Words {words.length} & No of Character with space {character} & without space {charWithoutSpace.length}</p>
                <p>Approximate Time required to read text: {words.length*0.008}</p>
                <h3 className='my-3'> Preview Text </h3>
                <p >{textChange}</p>
            </div>
        </div>      
        </>      
    )
}