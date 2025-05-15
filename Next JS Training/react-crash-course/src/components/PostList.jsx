import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from './PostList.module.css';
function PostList({isPosting, onStopPosting}) {
    const [posts,setPosts] = useState([]);
    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }
    return (
    <>
        {isPosting && (
            <Modal onClose = {onStopPosting}>
                <NewPost onCancel = {onStopPosting} onAddPost = {addPostHandler}/>
            </Modal>
        )}
        <ul className={styles.posts}>
            <Post author ="Some other dude" body = "Other world" />
        </ul>
    </>
    );
}

export default PostList;