import Post from "./Post";
import NewPost from "./NewPost";
import styles from './PostList.module.css';
function PostList() {
    return (
    <>
        <NewPost />
        <ul className={styles.posts}>
            <Post author ="Some dude" body = "Hello world" />
            <Post author ="Some other dude" body = "Other world" />
        </ul>
    </>
    );
}

export default PostList;