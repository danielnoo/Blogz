import {useState, useEffect} from 'react';
import Publish from './Publish';
import RecentPosts from './RecentPosts';
import Nav from './Nav';
import '../styles/App.scss';
import pushDB from '../dbPush';




function App() {
  
  const [displayRecentPosts, setDisplayRecentPosts] = useState(true);
  const [displayPublish, setDisplayPublish] = useState(false);

  
  const showPublish = () => {
    setDisplayPublish(true);
    setDisplayRecentPosts(false);
  }

 
  return (
    <div>
      <header>
        <h1>Blogz</h1>
        <Nav loggedIn={false} showPublish={showPublish} />
      </header>
      <main>
        <Publish visible={displayPublish}/>
        <RecentPosts visible={displayRecentPosts}/>
      </main>
    </div>
  );
}

export default App;
