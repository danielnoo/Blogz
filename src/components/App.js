import {useState} from 'react';
import Publish from './Publish';
import RecentPosts from './RecentPosts';
import Nav from './Nav';
import '../styles/App.scss';
import firebaseApp from '../firebase';

function App() {
  console.log(firebaseApp)
  const [displayRecentPosts, setDisplayRecentPosts] = useState(true);
  const [displayPublish, setDisplayPublish] = useState(false);

  
  
  return (
    <div>
      <header>
        <h1>Blogz</h1>
        <Nav loggedIn={false} setDisplayPublish={setDisplayPublish} setDisplayRecentPosts={setDisplayRecentPosts} />
      </header>
      <main>
        <Publish visible={displayPublish}/>
        <RecentPosts visible={displayRecentPosts}/>
      </main>
    </div>
  );
}

export default App;
