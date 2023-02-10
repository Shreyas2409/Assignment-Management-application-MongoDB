import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Button } from 'react-bootstrap';

const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload(true);
    window.location.replace('/sign-in1');
};


export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/New">
                New
    </a>
            <a className="menu-item" href="/">
                View
    </a>
            <a className="menu-item" href="/">
                submited
    </a>
            <Button onClick={() => handleLogout()} >Log-out</Button>
        </Menu>
    );
};