import '../styles/Publish.scss';
import { useState } from 'react';


const Publish = ({visible}) => {

  
  
  return(
    <>
      {
        visible ?
          <section>
            <form action="">
              <label htmlFor="title">Enter a title</label>
              <input id="title" name="title" type="text" required/>
              <label htmlFor="body">Start Bloggin'</label>
              <textarea name="body" id="body"></textarea>
              <button>Publish</button>
            </form>
          </section> : null
      }
    </>
  )
}

export default Publish