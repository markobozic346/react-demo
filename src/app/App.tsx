import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import Main from 'app/Main';
import Header from 'components/Header';
import Footer from 'components/Footer';
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
