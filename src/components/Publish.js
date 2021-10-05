
import { useState } from 'react';
// import {db} from '../dbFunctions';
import InputChooser from './InputChooser';
import TitleInput from './TitleInput';
import SubTitleInput from './SubTitleInput';
import BodyInput from './BodyInput';
import ImageInput from './ImageInput';


const Publish = ({visible, showRecent}) => {
  // this state array is used to generate the inputs dynamically
  const [inputArray, setInputArray] = useState([]); // each entry is a type of input
  // this state is used to store input data from child inputs in order in order
  const [articleBuild, setArticleBuild] = useState([{inputType: '', inputValue: ''},{inputType: '', inputValue: ''},{inputType: '', inputValue: ''},{inputType: '', inputValue: ''},{inputType: '', inputValue: ''}, {inputType: '', inputValue: ''},{inputType: '', inputValue: ''},{inputType: '', inputValue: ''},{inputType: '', inputValue: ''},{inputType: '', inputValue: ''}])

  
  /// a function that is sent to InputChooser that allows user to
  // add inputs to their form as they write
  
  const addInputType = (inputType) => {
    if(inputArray.length < 10) {
      const placeHoldArray = inputArray;
      placeHoldArray.push(inputType)
      setInputArray([...placeHoldArray]);
      console.log(`added ${inputType} to array`)
    }
  }
  


  // a function that creates an array with state taken from DynamicInput.js
  // - it gets the data from inputs that were created dynamically

  const sendStateToParent = (inputOrder, inputType, inputValue) => {
    const placeHoldArray = articleBuild;
    placeHoldArray[inputOrder] = {inputType, inputValue};
    setArticleBuild([...placeHoldArray]);
    console.log(articleBuild)
  }


  //a function that gathers input data
  // then pushes data from state to firebase using the 
  // imported dbpush() function
  const handleSubmit = function(event) {
    
    event.preventDefault();
    
    console.log(event)

  }

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

  

  

  return(
    <>
      
      {
        
        visible ?
          <section>
            
            <form onSubmit={handleSubmit}>
             
              <InputChooser addInputType={addInputType}/>
              
               
                
              <ul>  
              {
                
                inputArray.map((input, index) => {
                  
                  if(input === 'title') {
                    return (<li key={index}>
                    <TitleInput inputOrder={index} 
                    inputType={'title'} handleInput={sendStateToParent} parentState={articleBuild} /></li>
                    )
                  } else if(input === 'subTitle') {
                    return (<li key={index}>
                    <SubTitleInput inputOrder={index} 
                    inputType={'subTitle'} handleInput={sendStateToParent} /></li>
                    )
                  } else if(input === 'image') {
                    return (<li key={index}>
                    <ImageInput inputOrder={index} 
                    inputType={'image'} handleInput={sendStateToParent} /></li>
                    )
                  } else {
                    return(<li key={index}>
                    <BodyInput inputOrder={index} 
                    inputType={'body'} handleInput={sendStateToParent} /></li>
                    )
                  }
                  
                })
              }
              </ul>  
              
              
              <button>Publish move this to useEffect and render if form length is long enough</button> 
            </form>
          </section> : null
      }
    </>
  )
}

export default Publish