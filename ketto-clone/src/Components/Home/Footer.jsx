import { Box, Image } from '@chakra-ui/react';
import React from 'react';

function Footer() {
    return (
        <Box bg={'#2b5958'} p={'1rem'} >
        <Box p={'1rem'}  w ={'90%'} m={'auto'} display={'flex'} justifyContent={'space-between'}>
        <Box> 
            <Box borderBottom={'1px solid white'} w={'200px'}><Image h={'60px'} w={'80px'} src='https://kettocdn.gumlet.io/images/logo-dark-bg.svg?w=80&dpr=1.1' alt='ketto'/></Box>
            <Box display={'flex'} gap={2} mt={3}>
                <Image w={'30px'} h={'30px'} src='https://www.detroitk12.org/cms/lib/MI50000060/Centricity/Domain/2523/767-7674910_black-and-white-facebook-logo-png.png' />
                <Image w={'30px'} h={'30px'} src='https://th.bing.com/th/id/R.583fde2f84fb678181bfd45fa317387f?rik=R4wOaoEm%2fhJSVA&riu=http%3a%2f%2f192.169.155.66%2f~bullerockgc%2fwp-content%2fuploads%2f2018%2f05%2fwhite-twitter-e1526593924526.png&ehk=M3iLlY99cBpKvZ6MrbjLy9YJrt6GeRIWjxenxGkiQRM%3d&risl=&pid=ImgRaw&r=0'/>
                <Image w={'30px'} h={'30px'} src='https://innovativepublishing.com/wp-content/uploads/2019/08/linkedin-in-icon-300x300.png'/>
                <Image w={'30px'} h={'30px'} src='https://www.saddlebrookproperties.com/wp-content/themes/saddlebrook/images/play-button.png'/>
                <Image w={'30px'} h={'30px'} src='https://taaly.ir/Assets/image/social/ins.png'/>
            </Box>
            <Box fontSize={'3xl'} color={'white'} fontWeight={"600"} textAlign={'left'} mt={'5'}>1.5M+</Box>
            <Box textAlign={'left'} color={'cyan'} >Followers</Box> 
            <Box mt={'2rem'}>
                <Box fontSize={'medium'} color={'white'} fontWeight={'semibold'} textAlign={'left'} >For any queries</Box>
                <Box fontSize={'medium'} color={'white'} fontWeight={'semibold'} textAlign={'left'} >Email: info@ketto.org</Box>
                <Box fontSize={'medium'} color={'white'} fontWeight={'semibold'} textAlign={'left'} >Contact No: +91 9930088522</Box>
            </Box>   
        </Box>
        <Box>
            <Box textAlign={'left'} fontSize={'xl'} fontWeight={'bold'} color={'white'} mb={'2rem'}>Causes</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Medical crowdfunding</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Cancer Crowdfunding</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Education Crowdfunding</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Creative Fundraising</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Child Welfare</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Animal Fundraisers</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>COVID-19 Relief Fund</Box>             
        </Box>
        <Box>
            <Box textAlign={'left'} fontSize={'xl'} fontWeight={'bold'} color={'white'} mb={'2rem'}>How it works?</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Fundraising for NGOs</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Sponsor A Child</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Fundraising Tips</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>What is Crowdfunding?</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Corporates</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Withdraw Funds</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Browse Fundraiser</Box>
            </Box>
        <Box>
            <Box textAlign={'left'} fontSize={'xl'} fontWeight={'bold'} color={'white'} mb={'2rem'}>About Us</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Team Ketto</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>In The News</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Our Partners</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Careers</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Ketto Blog</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Success Stories</Box>
            </Box>
        <Box>
            <Box textAlign={'left'} fontSize={'xl'} fontWeight={'bold'} color={'white'} mb={'2rem'}>Success Stories</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Medical Finance</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>FAQs & Help Center</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Are Ketto Campaigns Genuine?</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Fundraiser Video</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Trust & Safety</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Plans & Pricing</Box>
            <Box fontWeight={'semibold'} textAlign={'left'} color={'white'} mt={'0.5rem'}>Contact Us</Box>
        </Box>
       
        </Box>
        <Box align={'right'}  w ={'90%'} ><Image src='https://ketto.gumlet.io/assets/images/homepage/footer-secured-card.png?w=457&dpr=1.1'/></Box>
        <Box m={'auto'} w={'90%'} borderTop={'1px solid white'} mt={5} mb={5} color={'white'}>Copyright © 2022 Ketto Online Ventures Pvt Ltd. All Rights Reserved.
 Terms of Use |
 Privacy Policy |
 AML Policy |
 Use of cookies </Box>
    </Box>
    );
}

export default Footer;