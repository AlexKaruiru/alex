import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as='footer'
      justifyContent='center'
      alignItems='center'
      py='5'
      flexDirection='column'
      textAlign='center'
      fontFamily="'Lato', sans-serif" 
    >
      
      {/* Copyright Text */}
      <Text mt='3' fontWeight='semibold'>
        &copy; {new Date().getFullYear()} Alex & bots.
      </Text>
    </Flex>
  );
};

export default Footer;