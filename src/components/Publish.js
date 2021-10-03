
import { useState } from 'react';
import {db} from '../dbFunctions';
import InputChooser from './InputChooser';


const Publish = ({visible, showRecent}) => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  
  
  
  // a function that pushes data from state to firebase using the 
  // imported dbpush() function
  const handleSubmit = function(event) {
    event.preventDefault();
    
    const post = {
                  title: title,
                  body: body
                 };
    
    
    db.pushArticle(post);
    showRecent();
    setTitle("");
    setBody("");
  }  

  

  return(
    <>
      
      {
        
        visible ?
          <section>
            <InputChooser />
            <form onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="title">Enter a title</label>
              <input placeholder="Enter a title" value={title} id="title" name="title" type="text" onChange={(e) => setTitle(e.target.value)} />
              
              <label className="sr-only" htmlFor="body">Start Bloggin'</label>
              <textarea placeholder="Start writing" value={body} name="body" id="body" onChange={(e) => setBody(e.target.value)} />
              <button>Publish</button>
            </form>
          </section> : null
      }
    </>
  )
}

export default Publish