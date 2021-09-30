

const Nav = ({loggedIn, showPublish }) => {

  // toggle state in App by passing reference to setState() as props

  


  return(
    <nav>
      <ul>
        <li>{
          loggedIn ? <button className="log-button">Login</button> : 
                     <button className="log-button">Logout</button>
          }</li>
        <li><button className="publish-button" onClick={() => showPublish()}>Publish</button></li>
      </ul>
    </nav>
  )
}

export default Nav