import {useState, useEffect} from 'react';
import Publish from './Publish';
import RecentPosts from './RecentPosts';
import Nav from './Nav';
import FullArticleView from './FullArticleView';
import '../styles/App.scss';






function App() {
  
  const [displayRecentPosts, setDisplayRecentPosts] = useState(true);
  const [displayPublish, setDisplayPublish] = useState(false);
  const [displayFullArticle, setDisplayFullArticle] = useState(false);
  const [articleData, setArticleData] = useState([]);

  // hide recent posts landing page and show the publish page
  const showPublish = () => {
    setDisplayPublish(true);
    setDisplayRecentPosts(false);
  }
  // hide Publish page and show RecentPosts
  const showRecent = () => {
    setDisplayPublish(false);
    setDisplayRecentPosts(true);
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




 
  return (
    <div className="wrapper">
      <header>
        <a href="index.html"><h1>Blogz</h1></a>
        <Nav loggedIn={false} showPublish={showPublish} />
      </header>
      <div className="container">  
        <main>
          <Publish visible={displayPublish} showRecent={showRecent}/>
          <RecentPosts visible={displayRecentPosts} setArticleData={setArticleData}/>
          <FullArticleView visible={displayFullArticle} data={articleData} />
        </main>
      </div>
    </div>
  );
}
      
        

export default App;
