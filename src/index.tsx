import { ChakraProvider } from "@chakra-ui/react";

import Home from "./pages/Home/Home";
import theme from "./theme/theme";
import "@/assets/css/index.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
