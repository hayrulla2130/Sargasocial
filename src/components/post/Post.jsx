import { MoreVert } from '@mui/icons-material'
import './post.css'
import dummyData from '../../dummyData.js';
import { useState } from 'react';
const { Users } = dummyData;

function Post({post}) {

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  function likeHandler(){
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  console.log(post);
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImage' src={Users.filter(u=> u.id === post?.userId)[0].profilePicture} alt="" />
                <span className="postUsername">{Users.filter(u=> u.id === post?.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className='postImage' src={post.photo} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className='likeIcon' src="/assets/like.png" alt="" onClick={likeHandler}/>
                <img className='likeIcon' src="/assets/heart.png" alt="" onClick={likeHandler}/>
                <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default Post
