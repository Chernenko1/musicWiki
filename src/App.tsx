import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import { NavBar } from "./components/NavBar";

function App() {
  console.log(process.env.REACT_APP_API_URL);
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
