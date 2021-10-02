import {useState, useEffect} from 'react';
import firebaseApp from '../firebase'
import {ref, onValue} from 'firebase/database';
import PostCard from './PostCard';



const RecentPosts = ({visible}) => {
  
  const [posts, setPosts] = useState([])
  
  
  useEffect(() => {
      
    const postListRef = ref(firebaseApp, '/posts');
    const dataArray = [];
    onValue(postListRef, (snapshot) => {
      const data = snapshot.val();
      for(let key in data) {
        dataArray.push({
          id: key,
          title: data[key].title,
          body: data[key].body
        })
      }
      setPosts(dataArray.reverse());
    });
    
  }, [])
    
  
  
  
 // visible state is passed from App.js, if it is true, render a ul and 
 // map the first ten items of the posts array into li elements
  return(
    <>
      { visible ? <h2 className="recentHeader">Recent Posts</h2> : null }

      { visible ? 
      
        <ul className="recentPosts">
          {posts.slice(0, 10).map(post => {
            return(
              <li key={post.id}>
                <PostCard dbTag={post.id} title={post.title} body={post.body} />
              </li>
            )
          })} 
        </ul> : null
      } 
    </>
  )
}

export default RecentPosts
  

    
    
    

  

  
    
      
      
      
 
    
   
      
  