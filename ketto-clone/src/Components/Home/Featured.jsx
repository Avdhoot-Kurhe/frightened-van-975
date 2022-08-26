import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import{ Component } from "react";
import Slider from "react-slick";

const featured=[
    {
        image:'https://th.bing.com/th/id/R.a2493a8efc5b139278b57d770028b651?rik=nnkGX7Ywz%2f5Awg&riu=http%3a%2f%2fwww.tubefilter.com%2fwp-content%2fuploads%2f2015%2f11%2fvice-logo.jpg&ehk=%2fHw2RNJriH3nSuApjJoOeTRFVlSreccA7X0aRut9xKA%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        image:'https://img.traveltriangle.com/attachments/press_releases/135/original/afaqs-logo.jpg?tr=,w-300'
    },
    {
        image:'https://th.bing.com/th/id/OIP.HbL0GTT6215dweAw29UegwHaHa?pid=ImgDet&rs=1'
    },
    {
        image:'https://mylabdiscoverysolutions.com/roofegri/2021/02/Standard-Express-Healthcare.jpg'
    },
    {
        image:'https://logodix.com/logo/1113825.png'
    },
    {
        image:'https://th.bing.com/th/id/OIP.kPXVQmmHwQENI-Q1LFYGDwHaHa?pid=ImgDet&rs=1'
    },
    {
        image:'https://www.underconsideration.com/brandnew/archives/india_times_logo.png'
    },
    {
        image:'https://www.hindustantimes.com/res/images/logo.png'
    },
]



export default class Featured extends Component {
  render() {
    const settings = {
      dots: true,
      arrows:true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
      <Box w={'90%'} m={'auto'}>
        <Box  fontSize={'3xl'} fontWeight={'bold'} mt={'3rem'} mb={'2rem'}>Featured In</Box>
        <Box m={'1.5rem'} borderRadius={'15px'} p={' 0 3rem'} bg={'gray'}>
        <Slider {...settings}>
          {featured.map((item)=>(
            <Box gap={20} p={'1rem'}>
            <Image   h={'100px'} w={'250px'} src={item.image} />
            </Box>
          ))}
        </Slider>
        </Box>

        <Box display={'flex'} m={'2rem'} textAlign={'left'} alignItems={'center'} justifyContent={'space-evenly'}>
            <Box fontSize={'medium'}>Have a question? Check out our FAQs page or chat with us on Facebook or WhatsApp.</Box>
        <Box display={'flex'} gap={3}>
        <Box cursor={'pointer'} borderRadius={'15px'} w={'150px'} display={'flex'} bg={'blue'} alignItems={'center'}>
            <Image h={'40px'} w={'50px'} src='https://clipart.info/images/ccovers/1509135360facebook-logo-png-white.png'/>
            <Box color={'white'} fontSize={'medium'} fontWeight={'semibold'}>chat with us</Box>
        </Box>
        <Box cursor={'pointer'} borderRadius={'15px'} w={'150px'} display={'flex'} bg={'green'} alignItems={'center'}>
            <Image h={'40px'} w={'50px'} p={2} src='https://www.dlf.pt/dfpng/maxpng/6-66817_whatsapp-png.png'/>
            <Box color={'white'} fontSize={'medium'} fontWeight={'semibold'}>chat with us</Box>
        </Box>
            
        </Box>
        </Box>
      </Box>
    );
  }
}