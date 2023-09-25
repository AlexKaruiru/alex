import React from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Text,
  VStack,
  Link as RouterLink,
  useMediaQuery,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiMail, FiGithub } from 'react-icons/fi'; 

const techStackList = [
  'Java', 'JavaScript', 'Kotlin', 'Node JS', 'React', 'React Native', 'Spring',
  'SQL', 'NoSQL', 'GraphQL'
];

const projectList = [
  { name: 'Zuridesk', link: 'https://zuridesk.com', image: 'zuridesk-image.jpg' },
  { name: 'Haba', link: 'https://www.habaapp.com', image: 'haba-image.jpg' },
  { name: 'Kikapu', link: 'https://kikapu-delta.vercel.app', image: 'kikapu-image.jpg' },
  { name: 'Bots', link: 'https://bot-ten-sigma.vercel.app', image: 'bots-image.jpg' },
  { name: 'OrigAfric', link: 'http://www.origafric.com', image: 'origafric-image.jpg' },
  { name: 'Adamur', link: 'https://www.adamur.io', image: 'adamur-image.jpg' },
];

const HomeScreen = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <ChakraProvider>
      <Box
        bg='#000'
        color='#fff'
        minHeight='100vh'
        display='flex'
        flexDirection='column'
        alignItems='center'
        borderRadius='45px'
        padding={['10px', '20px', '40px']}
      >
        <Box
          bg='#000'
          position='fixed'
          top='0'
          left='0'
          right='0'
          display='flex'
          justifyContent='space-around'
          alignItems='center'
          p='2'
          borderBottom='1px solid transparent'
          transition='border-bottom 0.3s'
          _hover={{ borderBottom: '1px solid #fff' }}
        >
          <Button as={RouterLink} to='#home' variant='unstyled'>
            Home
          </Button>
          <Button as={RouterLink} to='#tech-stack' variant='unstyled'>
            Tech Stack
          </Button>
          <Button as={RouterLink} to='#projects' variant='unstyled'>
            Projects
          </Button>
          <Button as={RouterLink} to='#contact' variant='unstyled'>
            Contact
          </Button>
        </Box>

        <Box id='home' py='4'>
          <Text fontWeight='bold' fontSize={['2xl', '3xl', '4xl']}>
            Home
          </Text>
          <Text color='gray.200'>
            A Versatile Software Engineer with a passion for creating elegant solutions.
          </Text>
        </Box>

        <Box id='tech-stack' py='4'>
          <Text fontWeight='bold' fontSize={['2xl', '3xl', '4xl']}>
            Tech Stack
          </Text>
          <VStack
            spacing={isMobile ? '4' : '8'}
            flexWrap={isMobile ? 'wrap' : 'nowrap'}
            justifyContent='center'
          >
            {techStackList.map((tech, index) => (
              <Box
                key={index}
                bg='pink.900'
                color='#fff'
                borderRadius='60px'
                p='4'
                textAlign='center'
                minWidth='100px'
              >
                <Text fontWeight='bold'>{tech}</Text>
                <img src={'zuridesk-image.jpg'[tech]} alt={tech} width='50' />
              </Box>
            ))}
          </VStack>
        </Box>

        <Box id='projects' py='4'>
          <Text fontWeight='bold' fontSize={['2xl', '3xl', '4xl']}>
            Projects
          </Text>
          <VStack
            spacing={isMobile ? '4' : '8'}
            flexWrap={isMobile ? 'wrap' : 'nowrap'}
            justifyContent='center'
          >
            {projectList.map((project, index) => (
              <Box
                key={index}
                bg='pink.900'
                color='#fff'
                borderRadius='60px'
                p='4'
                textAlign='center'
                width='100%'
              >
                <RouterLink to={project.link}>
                  <Text fontWeight='bold'>{project.name}</Text>
                  <img src={project.image} alt={project.name} width='100' />
                </RouterLink>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box id='contact' py='4'>
          <Text fontWeight='bold' fontSize={['2xl', '3xl', '4xl']}>
            Contact
          </Text>
          <HStack spacing='4'>
            <Link href='https://www.linkedin.com/in/alex-ndegwa-63405921a'>
              <Icon as={FiLinkedin} boxSize={8} />
            </Link>
            <Link href='mailto:alexndegwa49@gmail.com'>
              <Icon as={FiMail} boxSize={8} />
            </Link>
            <Link href='https://github.com/AlexKaruiru'>
              <Icon as={FiGithub} boxSize={8} />
            </Link>
          </HStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default HomeScreen;
