import { Flex, Box } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
     <BrowserRouter>
      <Header />
      <Flex as='main' mt='72px' direction='row' bgColor='white.900'>
        <Box flex='1' p='6' overflow='auto'>
          
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </Box>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
