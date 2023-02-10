import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Button } from 'react-bootstrap';

const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload(true);
    window.location.replace('/sign-in');
};

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/Sview">
                Profile
    </a>
    <a className="menu-item" href="/StudentView">
                View
    </a>
            <a className="menu-item" href="/Studentupload">
                Submit
    </a>
            <a className="menu-item" href="/">
            Results
    </a>
            <Button onClick={() => handleLogout()} >Log-out</Button>
        </Menu>
    );
};