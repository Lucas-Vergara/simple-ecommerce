import React from 'react';

const Home = () => {

    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    const divStyle = {
        width: '100%',
        height: (vh - 57) + 'px',
        backgroundSize: 'cover'   
    };

    return(
        <div id='home' style={divStyle}>
            <div id='home-title'>La Feria Online </div>        
        </div>
    )
}

export default Home