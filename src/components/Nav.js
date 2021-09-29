

const Nav = ({loggedIn}) => {

  // pass Nav info on whether or not user is logged in and conditionally render the login button as logout

  return(
    <nav>
      <ul>
        <li>{
          loggedIn ? <button className="log-button">Login</button> : <button className="log-button">Logout</button>
          }</li>
        <li><button className="publish-button">Publish</button></li>
      </ul>
    </nav>
  )
}

export default Nav