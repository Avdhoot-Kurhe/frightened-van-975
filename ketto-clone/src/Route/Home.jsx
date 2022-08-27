import { Box } from '@chakra-ui/react';
import React from 'react';
import Featured from '../Components/Home/Featured';
import Footer from '../Components/Home/Footer';
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
            <Footer/>
            <Box fontWeight={'semibold'} color={'blackAlpha.800'} fontSize={'2xl'}>Know more about Ketto Crowdfunding Platform</Box>
        </div>
    );
}

export default Home;