import {useState} from 'react';
import { useEffect } from 'react/cjs/react.development';
import TimeToRead from './TimeToRead'


const PostCard = ({post, setArticleData, showFull}) => {
   const [flattenedPost, setFlattenedPost] = useState([])
   const [title, setTitle] = useState("")
   const [body, setBody] = useState("")




   const handleClick = () => {
    
    setArticleData(flattenedPost)
    showFull();

   }
  
  // flatten out the object inside of post into an array
  // its current form is {id: id, post: {index0: {inputType: "X"}, {inputValue: "X"}}}
  // convert to [["type", "value"], {id: id}] // the "index0" is implied by its position in
  // the array and will be easier to access -- id will always be at [array.length -1]
  // I wish that this could be more clean but the dynamic nature of the data and the possibility of duplication of keys
  // means I have to take this roundabout measure to make sure things are kept the way the user entered them.


  // call once
  useEffect(() => {
    const preparePost = () => {
    
      const updatedPost = []

      // move the pieces of post data to the array
      for(let key in post.post) {
        updatedPost.push(post.post[key])
      }

      // change the objects to arrays
      const values = updatedPost.map(post => {
        return Object.values(post)
      })
      
      // add the id
      values.push(post.id)

      // commit to state
      setFlattenedPost([...values])
    }
    
    preparePost();

  },[post]);
    
  
  
  // FullArticleView.js will dissect the post further before rendering, the 
  // purpose of this component is mainly to display a teaser card with some of the 
  // info. The following function will parse the flattened data and find the first occurrence of 
  // a title and save it to state to be printed. The second piece will be the first occurence of a body text
   
  
  // call after flattenedPost update
  useEffect(() => {
    
    let title;
    let body;

    const post = flattenedPost;

    post.forEach(textPiece => {
      if(textPiece[0] === 'title'){
        title = textPiece[1];
      } else if(textPiece[0] === 'body'){
        body = textPiece[1];
      }
    })

    setTitle(title);
    setBody(body);


  },[flattenedPost])


    
  
  return(
      <>
        <h3>{title}</h3>
        <p>{body}</p>
        <div className="fade"></div>
        <button onClick={handleClick}>Read more --- <TimeToRead post={flattenedPost} /></button>
      </>
  )
  
};
  
export default PostCard;
    
  
   
   
 

  

