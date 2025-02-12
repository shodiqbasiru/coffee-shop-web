import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home/Home";
import "./index.css";

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
