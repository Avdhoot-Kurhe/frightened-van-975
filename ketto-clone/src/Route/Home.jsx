import React from 'react';
import Featured from '../Components/Home/Featured';
import HomeImage from '../Components/Home/HomeImage';
import Success from '../Components/Home/Success';
import WhyKetto from '../Components/Home/WhyKetto';
import Navbar from '../Components/Navbar/Navbar';

function Home() {
    return (
        <div>
            <Navbar/>
            <HomeImage />
            <WhyKetto/>
            <Success/>
            <Featured/>
        </div>
    );
}

export default Home;