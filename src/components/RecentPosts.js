import {useState, useEffect} from 'react';
import firebaseApp from '../firebase';
import {ref, onValue} from 'firebase/database';
import PostCard from './PostCard';




const RecentPosts = ({setArticleData}) => {
  
  const [posts, setPosts] = useState([]);
  const [dataReceived, setDataReceived] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [paginatedPosts, setPaginatedPosts] = useState([]);
  
  // contact the database once on page load to get article data
  useEffect(() => {
      
    const postListRef = ref(firebaseApp, '/posts');
    const dataArray = [];
    onValue(postListRef, (snapshot) => {
      const data = snapshot.val();
      
      for(let key in data) {
        dataArray.push({
          id: key,
          post: data[key]
        })
      }

         
      // reverse the array of articles so that the newest are at
      // the beginning of it
      dataArray.reverse();
      setPosts(dataArray);
      setDataReceived(true);
      
    });
    
  }, [])

  
  useEffect(() => {
    setPaginatedPosts(paginatePosts(posts));
  }, [posts])
  
  
  const paginatePosts = (postsArray) => {
    const numOfPages = postsArray.length / 10;
    
    // a new array to put arrays(pages) in
    const newArray = [];
    for (let i = 0; i < numOfPages; i++) {
      newArray[i] = new Array(0)
    }
    
    // this variable is the stopping point for the loop
    // before switching to next page
    let postCounter = 9;
    let pageCounter = 1;
    postsArray.forEach((post, index) => {
      if (index <= postCounter) {
        newArray[pageCounter - 1].push(post);
      } else {
        postCounter = pageCounter * 10 + postCounter;
        pageCounter++;
        newArray[pageCounter - 1].push(post);
      }
    });
    
    return newArray;
  }
    
  const handlePageTurn = (next) => {
    if(next) {
      if(pageNum === paginatedPosts.length - 1) {
        return
      }else {
        setPageNum(pageNum + 1)
      }
    } else {
      if(pageNum <= 0) {
        return
      } else {
        setPageNum(pageNum - 1)
      }
    }
  }
  
  
 // visible state is passed from App.js, if it is true, render a ul and 
 // map the first ten items of the posts array into li elements
  return(
    <>
      <h2 className="recentHeader">Recent Posts</h2>

      { dataReceived ? 
      <>
        <ul className="recentPosts">
          {paginatedPosts[pageNum].map(post => {
            console.log(post.id);
            return(
              <li key={post.id}>
                <PostCard post={post} author={post.post.author} setArticleData={setArticleData} />
              </li>
            )
          })} 
        </ul> 
        
        <nav className="pageSelectNav">
          <button onClick={() => handlePageTurn(false)}>Previous Page</button>
          <p>Page {pageNum + 1}</p>
          <button onClick={() => handlePageTurn(true)}>Next Page</button>
        </nav>

        <footer>Created at Juno College</footer>
        
      </> : <p className="fetching">Fetching posts from database...</p>

        
      }
       
    </>
  )
}

export default RecentPosts;
  

    
    
    

  

  
    
      
      
      
 
    
   
      
  