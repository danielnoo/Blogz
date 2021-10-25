import TitleText from './TitleText.js';
import BodyText from './BodyText.js';
import ImageComponent from './ImageComponent.js';
import SubTitleText from './SubTitleText.js';
import React from 'react';



const FullArticleView = ({visible, data}) => {

  // get article data from App.js, which gets it from RecentPosts->PostCard
  ////// get unique id from firebase, set as :route in app


  return(
    <>
      { visible ? 
        
        <div className="fullArticleContainer">
          {data.map((component, index) => {
            
            return(() => {
              switch(component[0]) {
                case 'title':
                  return <React.Fragment key={index}>
                          <TitleText text={component[1]} />
                         </React.Fragment>;
                case 'subTitle':
                  return <React.Fragment key={index}>
                          <SubTitleText text={component[1]} />
                         </React.Fragment>;
                case 'image':
                  return <React.Fragment key={index}>
                          <ImageComponent text={component[1]} />
                         </React.Fragment>; 
                case 'body':
                  return <React.Fragment key={index}>
                          <BodyText text={component[1]} />
                         </React.Fragment> 
                default:
                  return null;
              }
            })()

          })}
        </div>

        : null
        
      }
    </>
  )
}


export default FullArticleView;







