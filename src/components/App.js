import Publish from './Publish';
import '../styles/App.scss';
import firebaseApp from '../firebase'

function App() {
  console.log(firebaseApp)
  
  return (
    <div>
      <header>
        <h1>Blogz</h1>
      </header>
      <main>
        <Publish />
      </main>
    </div>
  );
}

export default App;
