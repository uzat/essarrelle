import React from 'react';

import './homepage.styles.scss';

// functional component here as no need of lifecycle methods nor state handling. 
// don't forget to export it.
const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>PORTRAITS</h1>
                    <span className='subtitle'>BOOK NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WEDDINGS</h1>
                    <span className='subtitle'>BOOK NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>BABIES</h1>
                    <span className='subtitle'>BOOK NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>PRODUCT</h1>
                    <span className='subtitle'>BOOK NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>REAL ESTATE</h1>
                    <span className='subtitle'>BOOK NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;