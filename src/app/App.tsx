import "./App.css";
import { ChakraProvider } from "@chakra-ui/react"
import Main from 'app/Main'
function App() {
  return (<div className='App'>
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  </div>)

}

export default App;
