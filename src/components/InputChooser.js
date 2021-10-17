
import {useState} from 'react';

const InputChooser = ({addInputType}) => {
  
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [plusClicked, setPlusClicked] = useState(true);
  
  // a button within the form that allows the user to choose between
  // different types of inputs to add to their form
  const showElements = (e) => {
    e.preventDefault();
    setMenuVisibility(!menuVisibility);
    setPlusClicked(!plusClicked);
  }



  return(
  
    <div className="addElementContainer">
      { plusClicked ? 
        <button type="button" onClick={showElements}>+</button>
        : <button type="button" onClick={showElements}>-</button>
      }
    
      { menuVisibility ?
      <ul>
        <li><button type="button" onClick={() => addInputType('title')}>Add Title</button></li>
        <li><button type="button" onClick={() => addInputType('subTitle')}>Add subtitle</button></li>
        <li><button type="button" onClick={() => addInputType('image')}>Add image URL</button></li>
        <li><button type="button" onClick={() => addInputType('body')}>Add body text</button></li>
      </ul>
        : null
      }
    
    </div>
  
  )
}

export default InputChooser;

