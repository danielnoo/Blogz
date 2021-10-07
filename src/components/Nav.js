import LoginButton from "./LoginButton"

const Nav = ({user, setUser, showPublish }) => {


  
  // this return takes some state from App.js and passes user status to display
   // the correct Login/Logout button
  return(
    <nav>
      <ul>
        <li>
          <LoginButton user={user} setUser={setUser} />
        </li>
        <li><button className="publish-button" onClick={() => showPublish()}>Publish</button></li>
      </ul>
    </nav>
  )
}

export default Nav
            