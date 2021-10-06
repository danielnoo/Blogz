import TitleText from './TitleText';
import BodyText from './BodyText';
import ImageComponent from './ImageComponent';
import SubTitleText from './SubTitleText';



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
                  return <TitleText keyPass={component.id} text={component[1]} />;
                case 'subTitle':
                  return <SubTitleText keyPass={component.id} text={component[1]} />;
                case 'image':
                  return <ImageComponent keyPass={component.id} text={component[1]} />;
                case 'body':
                  return <BodyText keyPass={component.id} text={component[1]} />;
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







