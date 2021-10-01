import {db} from '../dbFunctions';






const PostCard = ({dbTag, title, body}) => {

  const handleClick = () => {
    
  }

  return(
    <>
      <h3>{title}</h3>
      <p>{body}</p>
      <button>Read more</button>
    </>
  )

};

export default PostCard;