import React from 'react';
import { Box, Stack, VStack, Heading, Text, Button, Image, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Correct import for React Router
import "./home.css";
import vg from "../../assets/images/bg.png";
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { DiAws } from "react-icons/di";

// LinkButton Component
const LinkButton = ({ url = "/", title = "Home", onClose, colorScheme = "gray" }) => (
  <Link to={url}>
    <Button onClick={onClose} variant="solid" colorScheme={colorScheme}>
      {title}
    </Button>
  </Link>
);


const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems="center"
          spacing={["16", "56"]}
        >
          <VStack width="full" alignItems={["center", "flex-end"]} spacing="8">
            <Heading size="xl">
              Craft your mastery on the SKILL CANVAS
            </Heading>
            <Text fontSize="2xl" fontFamily="cursive" textAlign={["center", "left"]}>
              Find Valuable Content At Best Place
            </Text>

            {/* LinkButton usage */}
            <LinkButton url="/courses" title="Explore Now" colorScheme='yellow' />
          </VStack>

          <Image
            className="vector-graphics"
            boxSize="md"
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>

      <Box padding="8" bg="blackAlpha.800">
        <Heading textAlign="center" fontFamily="body" color="yellow.400">
          OUR BRANDS
        </Heading>

        <HStack
          className="brandsBanner"
          justifyContent="space-evenly"
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
    </section>
  );
};

export default Home;
