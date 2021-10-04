
import { useState } from 'react';
import {db} from '../dbFunctions';
import InputChooser from './InputChooser';
import DynamicInput from './DynamicInput';


const Publish = ({visible, showRecent}) => {
  const [inputArray, setInputArray] = useState([]); // each entry is a type of input
  const [input0, setInput0] = useState("");
  const [input1, setInputOne] = useState("");
  const [input2, setInputTwo] = useState("");
  const [input3, setInputThree] = useState("");
  const [input4, setInputFour] = useState("");
  const [input5, setInputFive] = useState("");
  const [input6, setInputSix] = useState("");
  const [input7, setInputSeven] = useState("");
  const [input8, setInputEight] = useState("");
  const [input9, setInputNine] = useState("");
  const [input10, setInputTen] = useState("");

  

  /// a function that is sent to InputChooser that allows user to
  // add inputs to their form as they write
  
  
  const addInputType = (inputType) => {
    if(inputArray.length < 10) {
      setInputArray(...inputArray, inputType);
      console.log(`added ${inputType} to array`)
    }
  }


  
  

  
  
  // a function that pushes data from state to firebase using the 
  // imported dbpush() function
  const handleSubmit = function(event) {
    event.preventDefault();
    console.log(`submitted ${event.target.value}`);


    // on submit go into every input and get their states?
  //   const post = {
  //                 title: title,
  //                 body: body
  //                };
    
    
  //   db.pushArticle(post);
  //   showRecent();
  //   setTitle("");
  //   setBody("");
  // }  

  }

  

  return(
    <>
      
      {
        
        visible ?
          <section>
            
            <form onSubmit={handleSubmit}>
              {/* <label className="sr-only" htmlFor="title">Enter a title</label>
              <input placeholder="Enter a title" value={title} id="title" name="title" type="text" onChange={(e) => setTitle(e.target.value)} /> */}
              <InputChooser addInputType={addInputType}/>
              {/* <label className="sr-only" htmlFor="body">Start Bloggin'</label>
              <textarea placeholder="Start writing" value={body} name="body" id="body" onChange={(e) => setBody(e.target.value)} /> */}
              {
                inputArray.map((input, index) => {
                  
                  return(
                    <DynamicInput inputOrder={'input' + index} inputType={input} />
                  )    
                  
                })
              }
              
              <button>Publish move this to useEffect and render if form length is long enough</button> 
            </form>
          </section> : null
      }
    </>
  )
}

export default Publish