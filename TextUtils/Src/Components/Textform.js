import React, {useState} from 'react';


const Textform = (Props) => {
    const[text, setText] = useState('');
    const upperClick = () => {
       let newText = text.toUpperCase();
       setText(newText);
       Props.showAlert("Text UpperCase", 'Success');
    }
    const clearText = () => {
        setText(" ");
        Props.showAlert("Clear Text", 'Success');
    }

    const upperonChange = (event) => {
        
        setText(event.target.value);
    }
    return (<>
        <div className="container">
        <h1 style={{color:Props.mode==='dark' ? 'white' : 'black'}}>{Props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor:Props.mode==='light' ? 'gainsboro' : 'white',color:Props.mode==='dark' ? 'black' : 'black'}} value={text} onChange={upperonChange}  id="exampleFormControlTextarea1" rows="8" placeholder='Enter text Here'></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={upperClick}>Convert To UpperCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
</div>
<div className='container'>
<h3 style={{color:Props.mode==='dark' ? 'white' : 'black'}}>Your text summary</h3><br/>
<p style={{color:Props.mode==='dark' ? 'white' : 'black'}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Character</p>
<p style={{color:Props.mode==='dark' ? 'white' : 'black'}}>{0.008 * text.split(" ").length} Minutes Read</p>
<h3 style={{color:Props.mode==='dark' ? 'white' : 'black'}}>Preview</h3>
<p style={{color:Props.mode==='dark' ? 'white' : 'black'}}>{text}</p>
</div>

    </>);
};

export default Textform;