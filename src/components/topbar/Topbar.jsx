import React from 'react';
import './topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Topbar() {
    return <div className='topbarContainer'>
        <div className="topbarLeft">
            <Link to='/'>
                <span className="logo">Sargasocial</span>
            </Link>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className='searchIcon' />
                <input placeholder='Search for friend, post or video' className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <Link to='/'>
                    <span className="topbarLink">Homepage</span>
                </Link>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">
                        1
                    </span>
                </div>
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">
                        2
                    </span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">
                        3
                    </span>
                </div>
            </div>
            <Link to="/profile">
                <img src="/assets/person/10.jpg" alt="" className="topbarImage" />
            </Link>
        </div>
    </div>
}

export default Topbar;