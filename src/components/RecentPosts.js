import {useState} from "react"

const RecentPosts = ({visible}) => {

  return(
    <div>
      {
        visible ? <h1>Visible</h1> : null
        
      }   
    </div>
    
    
  )
}

export default RecentPosts