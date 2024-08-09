import React , {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("UpperCase was Clicked" +text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase!", "success")
  }
  const handleLoClick = () =>{
    // console.log("UpperCase was Clicked" +text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase!", "success")
  }
  const handleClClick = () =>{
    // console.log("UpperCase was Clicked" +text);
    let newtext = ("");
    setText(newtext);
    props.showAlert("Text Cleard!", "success")
  }
  const hangleOnChange = (event) =>{
    // console.log("On Change");
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#03346E'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"value={text} style={{backgroundColor: props.mode==='dark'?'#03346E':'white' , color: props.mode==='dark'?'white':'#03346E'}} onChange={hangleOnChange} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleClClick}>Clear text</button>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'#03346E'}}>
        <h1>Your text summary</h1>
        <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters </p>
        <p>An average reader can read it in {0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)} second</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox to preview"}</p>
      </div>
            
    </div>
    
    </>
  )
}
