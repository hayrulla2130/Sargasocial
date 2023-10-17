import "./rightbar.css";
import dummyData from '../../dummyData.js';
const { Users } = dummyData;

function Rightbar({profile}) {

  function HomeRightbar(){
    return <div>
      <div className="birthdayContainer">
          <img className="birthdayImage" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img className="rightbarProfileImage" src={u.profilePicture} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{u.username}</span>
          </li>
          ))}
        </ul>
    </div>
  }

  function ProfileRightbar() {
    return(<div>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Venice</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relatioship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        
        {Users.map(u=>(
          <div className="rightbarFollowing">
          <img src={u.profilePicture} alt="" className="rightbarFollowingImage" />
          <span className="rightbarFollowingName">{u.username}</span>
        </div>
        ))}
      </div>
    </div>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar
