import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import './profile.css'

function Profile() {
    return (
        <div>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImage" src="/assets/post/1.jpg" alt="" />
                            <img className="profileUserImage" src="/assets/person/10.jpg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Abispa Wick</h4>
                            <span className="profileInfoDesc">Hey, I'm using Sargasocial</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
