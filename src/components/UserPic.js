
// get user from state in App.js and display pic in the header
const UserPic = ({user}) => {
  
  
  return(
    user.userLoggedIn ? 
    <div className="userPicContainer">
      <img src={user.userPic} alt="it's you!" />
    </div> 
    : null
  )
}

export default UserPic;