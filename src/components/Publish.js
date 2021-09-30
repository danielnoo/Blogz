import '../styles/Publish.scss';
import { useState } from 'react';
import dbPush from '../dbPush';


const Publish = ({visible, showRecent}) => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  
  
  
  // a function that pushes data from state to firebase using the 
  // imported dbpush() function
  const handleSubmit = async function(event) {
    event.preventDefault();
    
    const post = {
                  title: title,
                  body: body
                 };
    
    
    dbPush(post);
    showRecent();
  }  

  

  return(
    <>
      {
        visible ?
          <section>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Enter a title</label>
              <input value={title} id="title" name="title" type="text" onInput={(e) => setTitle(e.target.value)} />
              <label htmlFor="body">Start Bloggin'</label>
              <textarea value={body} name="body" id="body" onInput={(e) => setBody(e.target.value)} />
              <button>Publish</button>
            </form>
          </section> : null
      }
    </>
  )
}

export default Publish