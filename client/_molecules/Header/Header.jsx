import React from 'react';
import Button from 'Atoms/Button/Button.jsx';

import './Header.scss';

const Header = (props) => {
    const { toggleSport, currentSport } = props;
    return (
        <header>
            <Button
                action={toggleSport}
                className={`header-btn ${currentSport === 'mlb' ? 'active' : 'inactive'}`}
                label="MLB"
            />
            <Button
                action={toggleSport}
                className={`header-btn ${currentSport === 'nba' ? 'active' : 'inactive'}`}
                label="NBA"
            />
        </header>
    )
}

export default Header;