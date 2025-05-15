import { useState, useEffect } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from './PostList.module.css';
function PostList({isPosting, onStopPosting}) {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        async function fecthPosts() {
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);               
        } 
        fecthPosts();
    }, [])
    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }
    
    return (
    <>
        {isPosting && (
            <Modal onClose = {onStopPosting}>
                <NewPost onCancel = {onStopPosting} onAddPost = {addPostHandler}/>
            </Modal>
        )}
        {posts.length > 0 && (
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <Post key = {post.body} author = {post.author} body = {post.body}/>
                ))}
            </ul>
        )}
        {posts.length === 0 && (
            <div style={{textAlign: 'center', color: 'white'}}>
                <h2>No posts found.</h2>
                <p>Start adding some!</p>
            </div>
        )}
    </>
    );
}

export default PostList;