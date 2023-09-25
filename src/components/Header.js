import { 
  Box,
  Flex,
  Heading,
  Icon,
  Link,
} from '@chakra-ui/react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  
  return (
    <Flex
      as='header'
      justifyContent='space-between'
      alignItems='center'
      wrap='wrap'
      py='6'
      px='6'
      bgColor='purple.500'
      w='100%'
      pos='fixed'
      zIndex='9999'
      top='0'
      left='0'
      fontFamily="'Lato', sans-serif"
    >
      {/* Logo */}
      <Link as={RouterLink} to='/' cursor="pointer">
        <Heading
          as='h1'
          color='white'
          fontWeight='bold'
          size='md'
          letterSpacing='wide'
        >
          Whatsapp | Bots
        </Heading>
      </Link>

      {/* Mobile Menu Icon */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Icon as={HiOutlineMenuAlt3} color='white' w='5' h='5' />
      </Box>

      
    </Flex>
  );
};

export default Header;