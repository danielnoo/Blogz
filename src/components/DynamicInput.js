

import {useState} from 'react'

const DynamicInput = ({inputOrder, inputType, sendState}) => {
  // state
const [inputValue, setInputValue] = useState("")



              
console.log('inside the dynamic input ')
// switch statement to create the element by type
let inputJsx;
switch(inputType) {
  case 'title':
    inputJsx = <> 
                  <label className="sr-only" htmlFor="title">Enter a title</label>
                  <input placeholder="Enter a title" value={inputValue} 
                        id="title" name="title" type="text" 
                        onChange={(e) => setInputValue(e.target.value)} />
              </>
              console.log(inputJsx)
    break;
  case 'subTitle':
    inputJsx = <>
                  <label className="sr-only" htmlFor="subtitle">Enter a subtitle</label>
                  <input placeholder="Enter a subtitle" value={inputValue} 
                        id="subtitle" name="subtitle" type="text"
                        onChange={(e) => setInputValue(e.target.value)} />
              </>
    break;
  case 'image':
    inputJsx = <>
                  <label className="sr-only" htmlFor="subtitle">Enter a subtitle</label>
                  <input placeholder="Enter an image path" value={inputValue} 
                        id="image" name="image" type="text"
                        onChange={(e) => setInputValue(e.target.value)} />
              </>
    break; 
  case 'body':
    inputJsx = <>
                  <label className="sr-only" htmlFor="body">Start writing</label>
                  <textarea placeholder="Start writing" value={inputValue} name="body" 
                            id="body" onChange={(e) => setInputValue(e.target.value)} />
              </>
    break;
  default:
    console.log('error in DynamicInput')
}

return(
  {inputJsx}
)


}



export default DynamicInput;