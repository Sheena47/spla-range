import Main from "./components/main";
import { ChakraProvider } from '@chakra-ui/react';

export default function App(){
    return (
      <ChakraProvider>
          <Main></Main>
      </ChakraProvider>
    );
  }