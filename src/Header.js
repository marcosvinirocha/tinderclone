import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

// import { Container } from './styles';

function Header() {
    return <div className="header">
        {/* <h2>eu sou header</h2> */}
        <IconButton>
            <PersonIcon fontSize="large" className="header__icon" />

        </IconButton>

        <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="" className="header__logo" />

        <IconButton>
            <ForumIcon />
        </IconButton>
    </div>;
}

export default Header;