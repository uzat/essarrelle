import React from 'react';
import './menu-item.styles.scss';

// functional component again as no state, L/C methods needed atm. don't forget to export!
const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
        }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>BOOK NOW</span>
        </div>
    </div>
);

export default MenuItem;