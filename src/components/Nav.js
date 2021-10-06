import LoginButton from "./LoginButton"

const Nav = ({user, setUser, showPublish }) => {


  /// have login state here and apply it all in a new nav component


  // toggle state in App by passing reference to setState() as props

  


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
            