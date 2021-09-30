import { getDatabase, ref, set, push, onValue } from "firebase/database";
import './firebase'


export const dbPush = (dataObject) => {
    const db = getDatabase();
    const postListRef = ref(db, '/posts');
    const newPostRef = push(postListRef);
    set(newPostRef, dataObject);
}

export const dbGet = () => {
    const db = getDatabase();
    const postListRef = ref(db, '/posts');
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
    return dataArray;
}
               


