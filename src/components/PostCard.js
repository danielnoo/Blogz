


const PostCard = ({post, setArticleData, showFull}) => {

   const handleClick = () => {
    
    setArticleData(post)
    showFull();

   }
  
  
  const time = Math.round((post.body.length) / 220);
  

  return(
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className="fade"></div>
      <button onClick={handleClick}>Read more --- {time} min. read</button>
    </>
  )

};

export default PostCard;

