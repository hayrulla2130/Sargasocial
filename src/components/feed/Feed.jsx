import Post from '../post/Post.jsx';
import Share from '../share/Share.jsx'
import "./feed.css"
import dummyData from '../../dummyData.js';
const { Posts } = dummyData;

function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map((p)=>(
                    <Post key={p.id} post={p}/>
                ))}
            </div>
        </div>
    )
}

export default Feed;