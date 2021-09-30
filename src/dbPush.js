import { getDatabase, ref, set, push } from "firebase/database";
import './firebase'


const dbPush = (dataObject) => {
    const db = getDatabase();
    const postListRef = ref(db, '/posts')
    const newPostRef = push(postListRef)
    set(newPostRef, dataObject)
}


export default dbPush