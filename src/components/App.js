import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Publish from './Publish';
import RecentPosts from './RecentPosts';
import Nav from './Nav';

import ViewArticle from './ViewArticle';
import UserPic from './UserPic';
import '../styles/App.scss';
import { getAuth } from "firebase/auth";



function App() {
  
  const [displayRecentPosts, setDisplayRecentPosts] = useState(true);
  const [displayPublish, setDisplayPublish] = useState(false);
  const [displayFullArticle, setDisplayFullArticle] = useState(false);
  const [articleData, setArticleData] = useState([]);
  const [user, setUser] = useState({userName: "", userPic: "", userLoggedIn: false})

  // hide recent posts landing page and show the publish page
  const showPublish = () => {
    if(user.userLoggedIn) {
    setDisplayPublish(true);
    setDisplayRecentPosts(false);
    setDisplayFullArticle(false);
    }
  }
  // hide Publish page and show RecentPosts
  const showRecent = () => {
    setDisplayPublish(false);
    setDisplayRecentPosts(true);
    setDisplayFullArticle(false);
  }
  // display article in full view when read more button is clicked
  // state has to drill down from here to PostCard and bring with it a function that takes args
  // that function will call in PostCard and send the article info here, where it will be passed as 
  // props to full article view
  
  // state change here will hide Recentposts and Publish,then show FullArticleView
  const showFullArticle = () => {
    setDisplayPublish(false);
    setDisplayRecentPosts(false);
    setDisplayFullArticle(true);
  }


  // this function should check with firebase to see if they have a persistent connection
  // from google that is active and set the user info accordingly so that Publish is accessible
  // login/logout is displayed correctly
 
  // this function is not working properly at the moment as I ran out of time working on it
  // but it's very close! :) It's missing something to keep it from updating before state is
  useEffect(() => {
    
    const auth = getAuth();
    const googleUser = auth.currentUser;

    if (googleUser) {
      const userObject = {
          userName: googleUser.displayName,
          userPic: googleUser.photoURL,
          userLoggedIn: true
      }
      console.log('authy')
      setUser({...userObject})
    } else {
      console.log('no authy')
    }
    
    
  }, [])  







  // a lot of state is passed down from App.js through this return function
  // some of it is data that has been raised from components like articleData and user
  // some of it is visual toggles like show* and display*
  return (
    <Router>
      <div className="wrapper">
        <header>
          <h1 onClick={showRecent}>Blogz</h1>
          <UserPic user={user} />
          <Nav user={user} setUser={setUser} showPublish={showPublish} />
        </header>
        <div className="container">
          <main>
            <Publish
              visible={displayPublish}
              showRecent={showRecent}
              user={user}
            />
            <RecentPosts
              visible={displayRecentPosts}
              setArticleData={setArticleData}
              showFull={showFullArticle}
            />
            
            <Route exact path="/:postID">
              <ViewArticle />
            </Route>
          </main>
        </div>
      </div>
    </Router>
  );
}
      
        

export default App;
