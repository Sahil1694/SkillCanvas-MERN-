import { Avatar, Box, Button, Container, Flex, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../../redux/actions/user'
// import { Link } from '@chakra-ui/react'

export const fileuploadCss = {
    cursor: 'pointer',
     marginLeft: "-5%",
     width: "110%",
     border: "none",
     height:"100%",
     color: "#ECC94B",
     backgroundColor:"white",
}

const fileuploadStyle = {
    "&::file-selector-button": fileuploadCss
}


const Register = () => {
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [imagePrev, setImagePrev] = useState("")
    const [image, setImage] = useState("")

    const dispatch = useDispatch();
    const changeImageHandler =e=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setImagePrev(reader.result)
            setImage(file);
        }
    }

    const submitHandler = (e)=>{
      e.preventDefault();
      const myForm = new FormData()

      myForm.append("name",name);
      myForm.append("email",email);
      myForm.append("password",password);
      myForm.append("file",image);

      dispatch(register(myForm));
    }


  return (
    <Container height={"98vh"}>
      <Flex height={"full"} alignItems="center" spacing={"16"} justifyContent={"center"}>
        <VStack spacing={"16"} width="100%" maxWidth="400px" textAlign="center" mt="8">
          <Heading textTransform="uppercase" children={"Registration"} />  

          <form onSubmit={submitHandler} style={{width: "100%"}}>
            <Box my={"4"} display={"flex"} justifyContent={"center"}>
                <Avatar src= {imagePrev} size={"2xl"}>

                </Avatar>

            </Box>   
          <Box my={'4'}>
              <FormLabel htmlFor='name' children= "Name" />
              <Input 
                required
                id='name'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={"Enter the Name"}
                type='text'
                focusBorderColor='yellow.500'
              />
            </Box>
            <Box my={'4'}>
              <FormLabel htmlFor='email' children= "Email Address" />
              <Input 
                required
                id='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={"Enter Your email"}
                type='email'
                focusBorderColor='yellow.500'
              />
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor='password' children= "Password" />
              <Input 
                required
                id='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder={"Enter your Password"}
                type='password'
                focusBorderColor='yellow.500'
              />
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor='chooseAvatar' children= "Choose Avatar" />
              <Input
              accept='image/*' 
                required
                id='chooseAvatar'
                type='file'
                focusBorderColor='yellow.500'
                css={fileuploadStyle}
                onChange={changeImageHandler}
              />
            </Box>

            {/* <Box textAlign="left" width="100%" my={'4'}>
              <Link to="/forgotpassword">
                <Button fontSize={'sm'} variant={"link"}>
                  Forget Password?
                </Button>
              </Link>
            </Box> */}

            <Button my={'4'} colorScheme='yellow' type='submit'>
              Sign Up
            </Button>  

            <Box my={'4'}>
                Already User?{' '} 
                <Link to= '/login' >
                    <Button colorScheme='yellow' variant={"link"}>
                       Login
                    </Button>{' '}
                    here
                </Link>

            </Box>

          </form>
        </VStack>
      </Flex>
    </Container>
  );
}

export default Register