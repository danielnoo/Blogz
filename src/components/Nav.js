

const Nav = ({loggedIn, setDisplayPublish, setDisplayRecentPosts}) => {

  // toggle state in App by passing reference to setState() as props

  const swapStates = () => {
    setDisplayPublish(true)
    setDisplayRecentPosts(false)
  }


  return(
    <nav>
      <ul>
        <li>{
          loggedIn ? <button className="log-button">Login</button> : 
                     <button className="log-button">Logout</button>
          }</li>
        <li><button className="publish-button" onClick={() => swapStates()}>Publish</button></li>
      </ul>
    </nav>
  )
}

export default Nav