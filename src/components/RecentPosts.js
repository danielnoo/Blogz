import {useState} from 'react';
import {dbGet} from '../dbFunctions';
import PostCard from './PostCard';

const RecentPosts = ({visible}) => {
  // get posts from the database and reverse them
  const postArray = dbGet().reverse();
  
  // take the first 10 - map over them return them to page
  const pageOnePosts = postArray.slice(0, 10);

  console.log(pageOnePosts);

  

  return(
    <ul className="recentPosts">
      {
        visible ? pageOnePosts.map(post => {
          return(
            <li key={post.id}>
              <PostCard title={post.title} body={post.body} />
            </li>
          )
        }) : null
        
      }   
    </ul>
    
    
  )
}

export default RecentPosts