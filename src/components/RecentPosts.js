import {useState, useEffect} from 'react';
import firebaseApp from '../firebase'
import {ref, onValue} from 'firebase/database';
import PostCard from './PostCard';




const RecentPosts = ({visible, setArticleData, showFull}) => {
  
  const [posts, setPosts] = useState([])
  const [dataReceived, setDataReceived] = useState(false)
  
  
  useEffect(() => {
      
    const postListRef = ref(firebaseApp, '/posts');
    const dataArray = [];
    onValue(postListRef, (snapshot) => {
      const data = snapshot.val();
      
      for(let key in data) {
        dataArray.push({
          id: key,
          post: data[key]
        })
      }
      
      
      dataArray.reverse();
      setPosts([...dataArray]);
      setDataReceived(true);
      
    });
    
  }, [])
    
  useEffect(() => {})
  
  
 // visible state is passed from App.js, if it is true, render a ul and 
 // map the first ten items of the posts array into li elements
  return(
    <>
      { visible ? <h2 className="recentHeader">Recent Posts</h2> : null }

      { visible && dataReceived ? 
      
        <ul className="recentPosts">
          {posts.slice(0, 10).map(post => {
            return(
              <li key={post.id}>
                <PostCard post={post} setArticleData={setArticleData} showFull={showFull} />
              </li>
            )
          })} 
        </ul> : null
      } 
    </>
  )
}

export default RecentPosts
  

    
    
    

  

  
    
      
      
      
 
    
   
      
  