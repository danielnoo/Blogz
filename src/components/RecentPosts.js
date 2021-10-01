import {useState, useEffect} from 'react';
import {db} from '../dbFunctions';
import PostCard from './PostCard';


const RecentPosts = ({visible}) => {
  
  const [posts, setPosts] = useState([{id: '0', title: 'Loading..........', body: ''}])
  
  
  
  const sendStateFn = (array) => {
    setPosts(array)
  }
  
  useEffect(() => {
      db.getMethodDB(sendStateFn)
  }, [])
  
  
  

  
 
  return(
    <ul className="recentPosts">
      
      {/* take the first ten posts and map over them, returning to jsx */}
      {
        visible ? posts.slice(0, 10).map(post => {
        console.log(post.id)
        return(
          <li key={post.id}>
            <PostCard dbTag={post.id} title={post.title} body={post.body} />
          </li>
        )
      }) : null
        
      }   
    </ul>
  )
}

export default RecentPosts
    
    

  

  
    
      
      
      
 
    
   
      
  