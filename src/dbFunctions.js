import { getDatabase, ref, set, push, onValue, get, child } from "firebase/database";
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

// db.getMethodDB = (sendStateFn) => {
//     const dbRef = ref(getDatabase());
//     const dataArray = [];
//     get(child(dbRef, '/posts')).then((snapshot) => {
//         if (snapshot.exists()) {
//             const data = snapshot.val();
//             for(let key in data) {
//             dataArray.push({
//                 id: key,
//                 title: data[key].title,
//                 body: data[key].body
//             })
//             }
//             sendStateFn(dataArray.reverse())
//         } else {
//             console.log('no data')
//         }
//     }).catch((error) => {
//         console.error(error)
//     });
// }
               
            
                


