import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AllRoutes from './Route/AllRoutes';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
     <ChakraProvider>
      <AllRoutes />
    </ChakraProvider>
    </div>
  );
}

export default App;
