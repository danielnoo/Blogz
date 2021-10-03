import {useState} from 'react';

const InputChooser = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [plusClicked, setPlusClicked] = useState(true);
  
  
  const showElements = () => {
    setMenuVisibility(!menuVisibility);
    setPlusClicked(!plusClicked);
  }

  return(
  
    <div className="addElementContainer">
      { plusClicked ? 
        <button onClick={showElements}>+</button>
        : <button onClick={showElements}>-</button>
      }
    
      { menuVisibility ?
      <nav>
        <button>Add subtitle</button>
        <button>Add image by URL</button>
        <button>Add body text</button>
      </nav>
        : null
      }
    
    </div>
  
  )
}

export default InputChooser;