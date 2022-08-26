import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';


const successStory=[
    {
        Image:'https://kettocdn.gumlet.io/media/banner/0/97/image/50e08ce31ef3bfa184cadd9ec164b8ecee8bb0f0.jpg?w=auto&dpr=1.0&q=70',
        story:"Our son’s cancer had relapsed after 2.5 years of chemotherapy & we knew we couldn’t afford his life-saving treatment. But thanks to your donations & prayers, he underwent successful treatment & is recovering well. May God bless you all for saving his life! -Dhanasar (Father)",
        title:'You are the reason Suraj gets to live his dream'
    },
    {
        Image:'https://kettocdn.gumlet.io/media/banner/0/96/image/0717875196afb641172a631c282e1875d76b8930.jpg?w=auto&dpr=1.1',
        story:"May Allah bless you all! Thanks to your generous donations, Afzal underwent a successful BMT to treat thalassemia major. We are eternally grateful to you all for gifting our little bundle of joy a second chance at life! -Reshma (Mother)",
        title:'Heroes like you helped my son win his battle.'
    },
    {
        Image:'https://kettocdn.gumlet.io/media/banner/0/95/image/bc5ae443b8da492ff0c97082e2981ada078e385d.jpg?w=auto&dpr=1.1',
        story:"My daughter was suffering from Budd Chiari syndrome with a recurrent gastrointestinal bleed and needed an urgent liver transplant to survive, but sadly we couldn't afford it. However, your donations gave her a new lease on life! She underwent a successful liver transplant and is now enjoying her childhood. Words cannot express how grateful I am to you angels!- Prajakta (Mother)",
        title:'My daughter finally gets to enjoy her childhood.'
    },
    {
        Image:'https://kettocdn.gumlet.io/media/banner/0/94/image/26fe5c8a80fe779e091bd15f4de3c80224ca7c5b.jpg?w=auto&dpr=1.1',
        story:"I express my heartfelt gratitude towards you all for saving my son, Vedant's life! He was suffering from CLD Budd Chiari Syndrome, and a liver transplant was his only hope at survival, but we couldn't afford it. We would've lost him had it not been for your generosity and prayers. Thank you for lighting up our lives. He is doing better than ever post his liver transplant.",
        title:'Your support gave my son a second chance at life'
    }
]
function Success() {
    const [story,setStory]=useState(0)
    return (
        <div>
            <Box m={'2rem'}></Box>
            <Box fontSize={'3xl'} m={'2rem'} fontWeight={'bold'}>
            Success Stories
            </Box>
            <Box  display={'flex'}  w={'80%'} m={'auto'} alignItems={'center'}>
                <ArrowLeftIcon onClick={()=>{story>0 && setStory(curr=>curr-1)}}/>
                    <Box borderRadius={'15px'} boxShadow={'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'}  w={'90%'} m={'auto'} display={'flex'}>
                        <Image borderTopLeftRadius={'15px'} borderBottomLeftRadius={'15px'} w={'400px'} h={'300px'} src={`${successStory[story].Image}`}/>
                        <Box>
                        <Box fontWeight={'medium'} p={'1rem'} textAlign={'left'}>{successStory[story].title}</Box>
                        <Box pl={'1rem'} textAlign={'initial'}>{successStory[story].story}</Box>
                        <Box textAlign={'left'} p={'1rem'} color={'blue.400'} fontWeight={'medium'} cursor={'pointer'} >Read more</Box>
                        <Box display={'flex'} pl={'8rem'}><Box color={'gray.500'} mr={'1rem'}>Subscribe to read such inspiring stories</Box> <Image h={'2rem'} w={'6rem'} src='https://i2.wp.com/tribulant.com/blog/wp-content/uploads/2018/08/whatsapp-button.png?ssl=1'/></Box>
                        </Box>
                    </Box>
                <ArrowRightIcon onClick={()=>{story < (successStory.length-1) && setStory(curr=>curr+1)}}/>
            </Box>
        </div>
    );
}

export default Success;