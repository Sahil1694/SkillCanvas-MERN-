import { Box, Center, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialInstagramCircular , TiSocialLinkedinCircular} from "react-icons/ti"
import {DiGithub} from "react-icons/di"
const Footer = () => {
  return <Box padding={"4"} bg={"blackAlpha.900"} minH={'6vh'}>

    <Stack  direction={['column' , 'row']}>
         <VStack alignItems={["center" , "flex-start"]} width={"full"}>

            <Heading  size={"sm"}  children= "All Right Reserved" color={"white"}  />
            <Heading 
            children= "@SKILL_CANVAS" 
            color={"yellow.400"}
            size= "sm" 
            />
         </VStack>
    <HStack spacing={["2", "10"]} justifyContent={"center"}
       color={"white"}
       fontSize={"35"}
    >
        <a href="https://www.instagram.com/sahil._.1.6/" target='blank'>
          <TiSocialInstagramCircular />
        </a>

        <a href="https://www.linkedin.com/in/sahil-khilari-20513224a/" target='blank'>
          <TiSocialLinkedinCircular />
        </a>
        <a href="https://github.com/Sahil1694" target='blank'>
          <DiGithub />
        </a>

    </HStack>
    </Stack>


  </Box>
}

export default Footer 