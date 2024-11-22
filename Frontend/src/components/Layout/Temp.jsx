import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Heading, Button } from '@chakra-ui/react';
import { IconButton, Text } from '@chakra-ui/react';
import { CalendarIcon, DeleteIcon } from '@chakra-ui/icons';
import {Flex, VStack } from '@chakra-ui/react';


//Button Component
const IconButtonWithName = ({ icon, label, textColor, borderColor, onClick }) => {
  return (
    <Button color={textColor} borderColor={borderColor} onClick={onClick} ml="2">
      <Flex align="center">
        {icon}
        <Text ml="2">{label}</Text>
      </Flex>
    </Button>
  );
};


const Temp = () => {
    //Button HAndlers
  const handleReschedule = () => {
    // Add logic for rescheduling
    console.log('Reschedule clicked');
  };

  const handleDelete = () => {
    // Add logic for deletion
    console.log('Delete clicked');
  };

  return (
    <VStack spacing="4" align="left" padding="14">
      <Heading as="h2" size="xl" textAlign="left" color="blackAlpha.600">
        ReShedule
      </Heading>
      <Table variant="simple" borderRadius="10%" mx="auto">
        <Thead>
          <Tr>
            <Th textAlign="center">TEST NAME</Th>
            <Th textAlign="center">DURATION</Th>
            <Th textAlign="center">NUMBER OF QUESTIONS</Th>
            <Th textAlign="center">ACTION</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* Assuming you have a sample array of data */}
          {[...Array(5)].map((_, rowIndex) => (
            <Tr key={rowIndex} borderRadius="md" bg={rowIndex % 2 === 0 ? 'whiteAlpha.200' : 'blackAlpha.200'}>
              <Td textAlign="center">Test {rowIndex + 1}</Td>
              <Td textAlign="center">60 min</Td>
              <Td textAlign="center">MCQ: 20 | Coding: 5</Td>
              <Td textAlign="center">
                <IconButtonWithName
                  icon={<CalendarIcon />}
                  label="Reschedule"
                  textColor="blue.500"
                  borderColor="blue.500"
                  onClick={handleReschedule}
                />
                <IconButtonWithName
                  icon={<DeleteIcon />}
                  label="Delete"
                  textColor="red.500"
                  borderColor="red.500"
                  onClick={handleDelete}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

export default Temp;
