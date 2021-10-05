import React from 'react';

const FullArticleView = ({visible, data}) => {

  // get article data from App.js, which gets it from RecentPosts->PostCard
  // for now just get article on page and deal with dynamic situations later
  return(
    <React.Fragment>
      { visible ? 
        
        <div className="fullArticleContainer">
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>

        : null
        
      }
    </React.Fragment>
  )
}


export default FullArticleView;







