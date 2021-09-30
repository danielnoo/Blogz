import {useState, useEffect} from 'react';
import Publish from './Publish';
import RecentPosts from './RecentPosts';
import Nav from './Nav';
import '../styles/App.scss';





function App() {
  
  const [displayRecentPosts, setDisplayRecentPosts] = useState(true);
  const [displayPublish, setDisplayPublish] = useState(false);

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

 
  return (
    <div>
      <header>
        <h1>Blogz</h1>
        <Nav loggedIn={false} showPublish={showPublish} />
      </header>
      <main>
        <Publish visible={displayPublish} showRecent={showRecent}/>
        <RecentPosts visible={displayRecentPosts}/>
      </main>
    </div>
  );
}

export default App;
