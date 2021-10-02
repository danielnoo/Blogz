import {useState} from 'react';

const FullArticleView = ({visible, data}) => {

  // get article data from App.js, which gets it from RecentPosts->PostCard
  // for now just get article on page and deal with dynamic situations later
  return(
    <>
      { visible ? 
        
        <div>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>

        : null
        
      }
    </>
  )
}


export default FullArticleView;







