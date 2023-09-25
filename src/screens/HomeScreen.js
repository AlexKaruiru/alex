import React from 'react';
import { Box, Center, Button, Text } from '@chakra-ui/react';

const HomeScreen = () => {
  return (
    <Box p='4' minHeight='100vh' display='flex' flexDirection='column' alignItems='center'>
      {/* Title */}
      <Box my='4'>
        <Text color="purple.500" fontWeight="bold">WhatsApp Bot Testing</Text>        
      </Box>

      <Center my='4'>
        <Button as='a' href='/' colorScheme='purple' bg='purple.500' mr='4' borderRadius='60px'>
          Whatsapp 
        </Button>
        <Button as='a' href='/' colorScheme='purple' bg='purple.500' borderRadius='60px'>
          Web Chat
        </Button>
      </Center>
    </Box>
  );
};

export default HomeScreen;
