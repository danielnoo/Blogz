import TitleText from './TitleText';
import BodyText from './BodyText';
import ImageComponent from './ImageComponent';
import SubTitleInput from './SubTitleInput';



const FullArticleView = ({visible, data}) => {

  // get article data from App.js, which gets it from RecentPosts->PostCard
  // for now just get article on page and deal with dynamic situations later


  return(
    <>
      { visible ? 
        
        <div className="fullArticleContainer">
          {data.map(component => {
            return(() => {
              switch(component[0]) {
                case 'title':
                  return <
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







