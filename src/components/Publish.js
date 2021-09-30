import '../styles/Publish.scss';
import { useState } from 'react';
import dbPush from '../dbPush';


const Publish = ({visible}) => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  // pushDB({title: 'it worked'})
  
  
  
  const handleSubmit = function(event) {
    event.preventDefault();
    
    const post = {
      title: title,
      body: body
    }
    
    
    dbPush(post)
  }  

  // const handleTitleChange = function () {
  //   setTitle(this.value)
  //   console.log(title)
  // }

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