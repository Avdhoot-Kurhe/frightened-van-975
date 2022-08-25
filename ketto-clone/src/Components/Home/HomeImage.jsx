

import { Box, Button} from '@chakra-ui/react';
import {ArrowRightIcon} from '@chakra-ui/icons'
import React from 'react';

function HomeImage() {
    return (
        <div>
        <Box className='background-Image' m={'auto'} w={'100%'} display={'flex'} >
            <Box w={'50%'} m={'4rem'}></Box>
            <Box w={'50%'} m={'4rem'}>
                <Box fontSize={'3xl'} textAlign={'left'} color={'blackAlpha.800'} fontWeight={'700'} >
                Need Funds to Pay For a Medical Emergency or Social Cause?
                </Box>
                <Box display={'flex'} textAlign={'left'} m={'1rem 1rem 0 0'} fontWeight={'700'} color={'#039695'} fontSize={'2xl'} >
                   <Box w={'30%'}>0%</Box>
                   <Box w={'30%'}>55 Lakh+</Box>
                   <Box w={'30%'}>2 Lakh+</Box>
                   
                </Box>
                <Box display={'flex'} textAlign={'left'} m={'0 1rem 1rem 0'} fontWeight={'700'} color={'gray'} fontSize={'medium'} >
                   <Box w={'30%'}>PLATFORM FEE</Box>
                   <Box w={'30%'}>DONORS</Box>
                   <Box w={'30%'}>FUNDRAISERS</Box>
                </Box>
                <Box display={'flex'} textAlign={'left'} m={'2rem 1rem 1rem 0'} gap={'1'} fontWeight={'medium'} color={'#039695'} fontSize={'medium'}>Ketto’s<Box m={'-9px 0 0 0'} color={'#039695'} fontSize={'2xl'}>0% Platform fees</Box> ensures maximum funds for you</Box>
                <Button left={'-4.5rem'} m={'1rem 0 0 0'} p={'2rem'} fontSize={'2xl'} bg={'#039690'} className={'btn'} >Start a Fundraiser for FREE</Button>
                <Box textAlign={'left'} m={'1rem 1rem 1rem 0'} cursor={'pointer'} fontWeight={'bold'} color={'#039695'} fontSize={'medium'}>नि: शुल्क फंडरेजर शुरू करें <ArrowRightIcon/> </Box>
            </Box>
        </Box>
        </div>
    );
}

export default HomeImage;