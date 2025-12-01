import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, GlobalStyles } from "@mui/material";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Bouquet from "./Bouqet.jsx";
import Card from "./Card.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Test from "./test.jsx";
import PhotoGrid from "./PhotoGrid.jsx";

function MainContent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, sm: 3, md: 4 },
        p: { xs: 2, sm: 3, md: 4 },
        width: "100%",
        flex: 1,
        backgroundColor: "transparent",
      }}
    >
      <Bouquet />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, sm: 3, md: 4 },
          width: "100%",
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: { xs: "center", md: "flex-start" },
          backgroundColor: "transparent",
        }}
      >
        <Card />
        <PhotoGrid />
      </Box>
    </Box>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <CssBaseline />

      {/* 🔥 Добавлен розовый фон для всей страницы */}
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#ffb6c1",
            margin: 0,
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "transparent",
        }}
      >
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/test" element={<Test onLogout={handleLogout} />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
