import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Publish from "./Publish";
import RecentPosts from "./RecentPosts";
import Nav from "./Nav";

import ViewArticle from "./ViewArticle";
import UserPic from "./UserPic";
import "../styles/App.scss";
import { getAuth } from "firebase/auth";

function App() {
  const [user, setUser] = useState({
    userName: "",
    userPic: "",
    userLoggedIn: false,
  });

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
        userLoggedIn: true,
      };
      console.log("authy");
      setUser({ ...userObject });
    } else {
      console.log("no authy");
    }
  }, []);

  return (
    <Router>
      <div className="wrapper">
        <header>
          <Link className="logoLink" to="/">
            <h1>Blogz</h1>
          </Link>
          <UserPic user={user} />
          <Nav user={user} setUser={setUser} />
        </header>
        <div className="container">
          <main>
            <Route path="/publish/">
              <Publish user={user} />
            </Route>
            <Route exact path="/">
              <RecentPosts />
            </Route>
            <Route path="/post/:postID/">
              <ViewArticle />
            </Route>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
