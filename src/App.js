import Header from './components/Header';
import LandingSection from './components/LandingSection';
import './App.css';
import { ChakraProvider, extendTheme} from "@chakra-ui/react";

const theme = extendTheme({});

function App() {
  return (
    <div className="App">
      <Header />
      <ChakraProvider theme={theme}>
        <LandingSection />  
      </ChakraProvider>
    </div>
  );
}

export default App;
