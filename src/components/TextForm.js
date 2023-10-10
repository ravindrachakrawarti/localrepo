import React, {useState} from 'react'

export default function TextForm(props) {

const handleUpChange = ()=>{

  console.log("uppercase "+text);
 let newText=text.toUpperCase();
  setText(newText);
}
const handleUpChange1 = ()=>{

  console.log("uppercase "+text);
 let newText='';
  setText(newText);
}
const handleUpChange2 = ()=>{
var text=document.getElementById("mybox");
text.select();
navigator.clipboard.writeText(text.value);
  //navigator.clipboard.readText(text.value)
}
const handleUpChange3 = ()=>{

  console.log("uppercase "+text);
 let newText=text.toLowerCase();
  setText(newText);
}
const handleUpChange4 = ()=>{
let newText=text.split(/[ ]+/)
setText(newText.join(" "))
}

const handleOnChange=(event)=>{

  console.log(" on change");
  setText(event.target.value);
  
}



  //const [text, setText]=userState('Enter text here');
  const [text, setText] = useState('');

  return (
<>

<div className='container'>
    <h1>{props.heading}</h1>
<div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.text==='light'?'gray':'light'}}id="mybox" rows="8"></textarea>
   <button className='btn btn-primary mt-4 mx-3' onClick={handleUpChange}>Upper case</button>
   <button className='btn btn-primary mt-4 mx-3' onClick={handleUpChange1}>clear text</button>
   <button className='btn btn-primary mt-4 mx-3' onClick={handleUpChange2} >Copy All</button>
   <button className='btn btn-primary mt-4 mx-3' onClick={handleUpChange3}>lowercase</button>
   <button className='btn btn-primary mt-4 mx-3' onClick={handleUpChange4}>Remove extra space</button>
   </div>

   <div className='container'>
     <h1>your text summary</h1>
 <p>{text.split(" ").length} words and {text.length} characters</p>
<p>{.008* text.split("").length} total time to read</p>
<h3>{text}</h3>
   </div>
</div>

</>
  )
}
