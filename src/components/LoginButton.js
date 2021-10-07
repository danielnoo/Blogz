
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";





const LoginButton = ({user, setUser}) => {

  const provider = new GoogleAuthProvider();
  const loginFunction = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        
        // The signed-in user info.
        const user = result.user;
        
        const userObject = {
          userName: user.displayName,
          userPic: user.photoURL,
          userLoggedIn: true
        }
        // set minimal user info in state
        setUser({...userObject})
        
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorMessage} ${errorCode}`)
        alert(`${errorMessage} ${errorCode}`)
      });
  }


  const logoutFunction = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      const userObject = {
      userName: "",
      userPic: "",
      userLoggedIn: false
      };

      setUser(userObject)
    
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`${errorMessage} ${errorCode}`);
      alert(`${errorMessage} ${errorCode}`);
    });
  }
  
  
  return(
     user.userLoggedIn ?
      
      <button onClick={logoutFunction} className="log-button">Logout</button> : 
      <button onClick={loginFunction} className="log-button">Login</button>

  )


}

export default LoginButton;
  
  





   