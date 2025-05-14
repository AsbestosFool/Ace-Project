import Post from "./Post";
import styles from './PostList.module.css';
function PostList() {
    return (
        <ul className={styles.posts}>
            <Post author ="Some dude" body = "Hello world" />
            <Post author ="Some other dude" body = "Other world" />
        </ul>
    );
}

export default PostList;