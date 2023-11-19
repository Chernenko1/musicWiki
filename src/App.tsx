import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
