import {useState} from 'react';
import Publish from './Publish';
import Nav from './Nav';
import '../styles/App.scss';
import firebaseApp from '../firebase'

function App() {
  console.log(firebaseApp)
  const [displayRecentPosts, setDisplayRecentPosts] = useState(false);
  const [displayPublish, setDisplayPublish] = useState(true);
  
  return (
    <div>
      <header>
        <h1>Blogz</h1>
        <Nav />
      </header>
      <main>
        <Publish />
      </main>
    </div>
  );
}

export default App;
