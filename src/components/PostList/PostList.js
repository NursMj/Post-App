import PostListItem from '../PostListItem/PostListItem';
import './post-list.css';

const PostList = () => {
    return (
        <ul className='app-list list-group'>
            <PostListItem label='Going to learn React'/>
            <PostListItem label='That is so good'/>
            <PostListItem label='I need a breack'/>
        </ul>
    )
}

export default PostList