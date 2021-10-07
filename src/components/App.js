import {useState} from 'react';
import Publish from './Publish';
import RecentPosts from './RecentPosts';
import Nav from './Nav';
import FullArticleView from './FullArticleView';
import UserPic from './UserPic';
import '../styles/App.scss';
import { getAuth } from "firebase/auth";
import { useEffect } from 'react/cjs/react.development';


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
    <div className="wrapper">
      <header>
        <h1 onClick={showRecent}>Blogz</h1>
        <UserPic user={user} />
        <Nav user={user} setUser={setUser} showPublish={showPublish} />
      </header>
      <div className="container">  
        <main>
          <Publish visible={displayPublish} showRecent={showRecent} user={user}/>
          <RecentPosts visible={displayRecentPosts} setArticleData={setArticleData} showFull={showFullArticle}/>
          <FullArticleView visible={displayFullArticle} data={articleData} />
        </main>
      </div>
    </div>
  );
}
      
        

export default App;
