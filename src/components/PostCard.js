import {db} from '../dbFunctions';






const PostCard = ({dbTag, title, body}) => {

  const handleClick = () => {

  }

  
  const time = Math.round(body.length / 220);
  

  return(
    <>
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="fade"></div>
      <button>Read more --- {time} min. read</button>
    </>
  )

};

export default PostCard;

