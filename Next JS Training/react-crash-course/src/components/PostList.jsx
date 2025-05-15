import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from './PostList.module.css';
function PostList() {
    const [moalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }  
    
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }
    return (
    <>
        {moalIsVisible ? (
        <Modal onClose = {hideModalHandler}>
            <NewPost 
            onBodyChange = {bodyChangeHandler} 
            onAuthorChange = {authorChangeHandler}/>
        </Modal>
        ): false}
        <ul className={styles.posts}>
            <Post author ={enteredAuthor} body = {enteredBody} />
            <Post author ="Some other dude" body = "Other world" />
        </ul>
    </>
    );
}

export default PostList;