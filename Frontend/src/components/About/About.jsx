import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import introVideo from "../../assets/vedios/intro.mp4"
import { RiSecurePaymentFill } from 'react-icons/ri'
import termsAndCondition from "../../assets/docs/termsAndCondition"

const Founder = () =>(
    <Stack 
    direction={["column" , 'row']} 
    spacing={['4' , '16']} 
    padding={'8'}
    >
      
        <VStack>
            <Avatar 
            src='https://assets.leetcode.com/users/Sahil_1694/avatar_1719163444.png'
            boxSize={['40','48']}/>
            <Text children="Founder" opacity={0.7} />
        </VStack>
        <VStack justifyContent={"center"} alignItems={['center' , 'flex-start']}>
            <Heading children="Sahil Khilari" size={['md' , "xl"]}/>
            <Text
            textAlign={['center' , 'left']}
            children={"Hi, I'm Sahil Khilari, a third-year engineering student at VIIT, Pune. I have interned as a Software Engineering Intern at PayPal in Chennai. I'm passionate about creating robust websites and improving user experiences through the power of technology."} />
        </VStack>

    </Stack>
)

// const VedioPlayer = ()=>(
//     <Box>
//        <video 
//         // autoPlay 
//         muted
//         loop
//         controls 
//         controlsList='nodownload nofullscreen noremoteplayback'
//         disablePictureInPicture
//         disableRemotePlayback
//         src = {introVideo}>

//         </video>
//     </Box>
// )

const TandC = ({termsAndCondition}) =>(
    <Box>
        <Heading 
        size={"md"} 
        children = "Terms & Condition" 
        textAlign={["center" , "left"]}
        my={'4'}
        />
        <Box h={'sm'} p={"4"} overflowY={"scroll"}>
            <Text 
            fontFamily={"heading"} 
            letterSpacing={"widest"}
             textAlign={["center" , 'left']}>
                {termsAndCondition}
            </Text>
            <Heading my={"4"} size={"xs"} children ="Refund only Applicable for cancellation within 7 days" />

        </Box>
    </Box>
)

const About = () => {
  return <Container maxW={'container.lg'} padding={"16"} boxShadow={'lg'}>
    <Heading children="About Us" textAlign={['center' , 'left']} />
      <Founder />

      <Stack m={'8'} direction={["column" , "row" ]} alignItems={"center"}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center' , 'left']}>
        We are a vedio streaming platform with some premium course availabale only for premium users.
        </Text>
        <Link to="/subscribe">
            <Button variant={'ghost'} colorScheme='yellow'>
                Checkout Our Plan

            </Button>
        </Link>

      </Stack>
{/*    <VedioPlayer /> */}

   <TandC termsAndCondition = {termsAndCondition} />
   
   <HStack my={'4'} p={'4'}>
    <RiSecurePaymentFill />
    <Heading 
    size={"xs"} 
    fontFamily="sans-serif" 
    children = {"Payment is Secured by RazorPay"} 
    textTransform={"uppercase"}
    />
   </HStack>
  </Container>
}

export default About
