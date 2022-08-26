import { Box, Image } from '@chakra-ui/react';
import React from 'react';

function WhyKetto() {
    return (
        <div>
            <Box h={'3rem'}></Box>
            <Box fontSize={'3xl'} fontWeight={'bold'}>
                Why Ketto?
            </Box>
            <Box display={'flex'}  justifyContent={'space-evenly'} w={'80%'} m={'auto'} mt={'3rem'} >
                <Box alignItems={'center'}>
                    <Image borderBlockEnd={'3px solid orange'} w={20} h={20} m={'auto'} src='https://media.istockphoto.com/vectors/set-of-gold-medal-vector-icon-illustration-flat-design-vector-id1006205822?k=6&m=1006205822&s=612x612&w=0&h=cvNyrw1p3ibRgQGlE6fci1Yoh5ZfxU33RwUslS06cOM=' />
                    <Box w={'220px'} m={'15px'} >Industry’s best fundraising success rate</Box>
                </Box>
                <Box>
                    <Image borderBlockEnd={'3px solid orange'} w={20} h={20} m={'auto'} src='https://thumbs.dreamstime.com/b/donation-support-symbol-to-charity-people-donation-support-symbol-to-charity-people-vector-illustration-115390624.jpg' />
                    <Box w={'220px'} m={'15px'} >Supported By 55,00,000+ Donors</Box>
                </Box>
                <Box>
                    <Image borderBlockEnd={'3px solid orange'} w={20} h={20} m={'auto'} src='https://cdn2.iconfinder.com/data/icons/data-analysis-10/48/13_repair_technician_technology_work_maintenance_service_system-256.png' />
                    <Box w={'220px'} m={'15px'} >Easy-To-Manage Tools To Boost Results</Box>
                </Box>
                <Box>
                    <Image borderBlockEnd={'3px solid orange'} w={20} h={20} m={'auto'} src='https://thumbs.dreamstime.com/b/hand-pointer-smartphone-line-icon-phone-heart-charity-donation-symbol-outline-style-pictogram-white-hand-pointer-176284014.jpg' />
                    <Box w={'220px'} m={'15px'} >Receive donations via all popular payment modes</Box>
                </Box>
            </Box>

            <Box display={'flex'}  justifyContent={'space-evenly'} w={'80%'} m={'auto'} mt={'3rem'} >
                <Box alignItems={'center'}>
                    <Image borderBlockEnd={'3px solid orange'} w={20} h={20} m={'auto'} src='https://ethiopia.safeguardingsupporthub.org/sites/default/files/inline-images/icon-expert.png' />
                    <Box w={'220px'} m={'15px'} >Get Expert Support 24/7</Box>
                </Box>
                <Box>
                    <Image borderBlockEnd={'3px solid orange'} w={20} h={20} m={'auto'} src='https://th.bing.com/th/id/OIP.fqsm4_ZTLAUMzpNEF8B_SAHaHa?pid=ImgDet&rs=1' />
                    <Box w={'220px'} m={'15px'} >A Dedicated Smart-Dashboard</Box>
                </Box>
                <Box>
                    <Image borderBlockEnd={'3px solid orange'} w={20} h={20} m={'auto'} src='https://cdn3.iconfinder.com/data/icons/cyber-monday-astute-vol-2/512/Pay_Cash-512.png' />
                    <Box w={'220px'} m={'15px'} >Withdraw Funds Without Hassle</Box>
                </Box>
                <Box>
                    <Image borderBlockEnd={'3px solid orange'} w={20} h={20} m={'auto'} src='https://konverge.co.in/wp-content/uploads/2020/08/security.png' />
                    <Box w={'220px'} m={'15px'} >International Payment Support</Box>
                </Box>
            </Box>
        </div>
    );
}

export default WhyKetto;