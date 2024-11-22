import { Box, Button, Container, Flex, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../redux/actions/user'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container height={"98vh"}>
      <Flex height={"full"} alignItems="center" justifyContent={"center"}>
        <VStack spacing={"16"} width="100%" maxWidth="400px" textAlign="center" mt="8">
          <Heading children={"Welcome to Skill Canvas"} />  

          <form onSubmit={submitHandler} style={{width: "100%"}}>
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

            <Box textAlign="left" width="100%" my={'4'}>
              <Link to="/forgetpassword">
                <Button fontSize={'sm'} variant={"link"}>
                  Forget Password?
                </Button>
              </Link>
            </Box>

            <Button my={'4'} colorScheme='yellow' type='submit'>
              Login
            </Button>  

            <Box my={'4'}>
                New User?{' '} 
                <Link to= '/register' >
                    <Button colorScheme='yellow' variant={"link"}>
                        Sign Up
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

export default Login;
