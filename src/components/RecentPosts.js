import {useState, useEffect} from 'react';
import firebaseApp from '../firebase'
import {ref, onValue} from 'firebase/database';
import PostCard from './PostCard';
import React from 'react';



const RecentPosts = ({visible, setArticleData, showFull}) => {
  
  const [posts, setPosts] = useState([])
  
  
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
      
      // flatten out the data gathered by the for..in by using
      // access to the index property of .map()
      // console.log(dataArray);
      // const postSectionCount = Object.keys(dataArray[0].post).length
      // console.log(postSectionCount)
      // const evenOutData = dataArray.map((post, index) => {
      //   return {
      //     id: post.id,
      //     type: post.post['index' + index].inputType,
      //     content: post.post['index' + index].inputValue
      //   }
      // }).reverse()
      dataArray.reverse();
      setPosts([...dataArray]);
      
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
  

    
    
    

  

  
    
      
      
      
 
    
   
      
  