import {useParams} from 'react-router-dom';
import {db} from '../dbFunctions';
import {useEffect, useState} from 'react';
import TitleText from "./TitleText.js";
import BodyText from "./BodyText.js";
import ImageComponent from "./ImageComponent.js";
import SubTitleText from "./SubTitleText.js";
import React from 'react';


const ViewArticle = () => {
  const [article, setArticle] = useState([]);
  const [author, setAuthor] = useState();
  const {postID} = useParams();
  
  useEffect(() => {
    db.getArticle(setArticleInState, postID)
    
  }, [postID]);

  const setArticleInState = (author, articleArray) => {
    setAuthor(author);
    setArticle(articleArray);
  }

 
  
  return (article.length > 0 ? (
    <div className="fullArticleContainer">
      <h6>by: {author}</h6>
      {article.map((component, index) => {
        return (() => {
          switch (component.inputType) {
            case "title":
              return (
                <React.Fragment key={index}>
                  <TitleText text={component.inputValue} />
                </React.Fragment>
              );
            case "subTitle":
              return (
                <React.Fragment key={index}>
                  <SubTitleText text={component.inputValue} />
                </React.Fragment>
              );
            case "image":
              return (
                <React.Fragment key={index}>
                  <ImageComponent text={component.inputValue} />
                </React.Fragment>
              );
            case "body":
              return (
                <React.Fragment key={index}>
                  <BodyText text={component.inputValue} />
                </React.Fragment>
              );
            default:
              return null;
          }
        })();
      })}
    </div>
  ) : null
  )
}



export default ViewArticle;