import {ref, set, push, onValue, getDatabase, child, get} from "firebase/database";
import firebaseApp from './firebase'


export const db = {}



db.pushArticle = (dataObject) => {
    const postListRef = ref(firebaseApp, '/posts');
    const newPostRef = push(postListRef);
    set(newPostRef, dataObject);
}
    

db.getArticles = (setState) => {
   
    const postListRef = ref(firebaseApp, '/posts');
    const dataArray = [];
    onValue(postListRef, (snapshot) => {
        const data = snapshot.val();
        for(let key in data) {
            dataArray.push({
                id: key,
                title: data[key].title,
                body: data[key].body
            })
        }
    });
    
    const articles = dataArray.reverse();
    setState(articles);
}

db.getArticle = (setStateFn, id) => {
    const dbRef = ref(getDatabase());
    const dataArray = [];
    get(child(dbRef, `/posts/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            
            for(let key in data) {
            dataArray.push(data[key])
            }
            
            // snip the author off of the front of the array
            // pass the rest of the array as the article content
            const author = dataArray.shift();
            setStateFn(author, dataArray)
            
        } else {
            console.log('no data')
        }
    }).catch((error) => {
        console.error(error)
    });
}
               
            
                


