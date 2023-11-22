import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { ChakraProvider, Spinner } from "@chakra-ui/react";

import "./App.css";
import { NavBar } from "./components/NavBar";
import { useAppDispatch } from "./store/hooks";
import { check } from "./http/userAPI";
import { setIsAuth, setUser } from "./store/slices/userSlice";

function App() {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        dispatch(setIsAuth(true));
        dispatch(setUser(true));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Spinner
        color="red.500"
        size={"xl"}
        style={{
          margin: "0 auto",
          padding: 50,
        }}
      />
    );
  }

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
