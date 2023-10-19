import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/homepage/HomePage";
import GlobalStyle from "./lib/GlobalStyle.js";
import UserLogged from "./pages/logged/Logged";

import { UserLoggedProvider } from "../context/UserLoggedProvider";

export default function App() {
  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {
    setIsLogged(sessionStorage.getItem("asLogged"));

    redirect("/");
  }, [isLogged]);

  return (
    <UserLoggedProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vehicles-resume" element={<UserLogged />} />
        </Routes>
      </BrowserRouter>
    </UserLoggedProvider>
  );
}
