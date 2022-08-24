import React from 'react';
import { Link } from 'react-router-dom';
import {Box, Image, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import {TriangleDownIcon } from "@chakra-ui/icons"

function Navbar() {
    return (
        <div className='navBar'>
            <Box>
                <Link to={'/'}><Image className='image' src='https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=100&dpr=0.9' /></Link>
            </Box>
           <Box display={'flex'} p={'15px'} gap={5}>
                <Box p={2} cursor={'pointer'} >
                    Browse Fundraisers
                </Box>
                <Box p={2}>
                <Menu>
                    <MenuButton  >
                        Fundraise For <TriangleDownIcon/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Medical Treatment</MenuItem>
                        <MenuItem>NGO / Charity</MenuItem>
                        <MenuItem>Other Cause</MenuItem>
                    </MenuList>
                </Menu>
                </Box>
                
                <Box p={2} cursor={'pointer'} >
                    How It Works
                </Box>
           </Box>
           <Box display={'flex'} p={5} gap={5}>
            <Box display={'flex'} gap={5}>
                <Image cursor={'pointer'} className='icon_image' src='https://i2.wp.com/tribulant.com/blog/wp-content/uploads/2018/08/whatsapp-button.png?ssl=1'/>
                <Image cursor={'pointer'} className='icon_image' src='https://th.bing.com/th/id/OIP.Paj6cGpU4NYwOY3ZgsgguQAAAA?pid=ImgDet&rs=1'/>
            </Box>
                <Link to={'/signin'}><Box p={2}>Sign in</Box></Link>
           </Box>
            
        </div>
    );
}

export default Navbar;