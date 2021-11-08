import React from 'react';

import Directory from '../../components/directory/directory.component';


import './homepage.styles.scss';

// functional component here as no need of lifecycle methods nor state handling. 
// don't forget to export it.
const HomePage = () => (
    <div className='homepage'>
        <Directory/>
    </div>
);

export default HomePage;