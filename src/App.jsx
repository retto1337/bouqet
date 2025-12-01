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
import Admin from "./admin.jsx";

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
    localStorage.removeItem("admin"); 
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <CssBaseline />

      {/* 🔹 Глобальный розовый фон */}
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
            {/* Главная страница */}
            <Route path="/" element={<MainContent />} />

            {/* Login для всех пользователей */}
            <Route
              path="/login"
              element={<Login onLogin={handleLogin} />}
            />

            {/* Signup */}
            <Route path="/signup" element={<Signup />} />

            {/* Тестовая страница */}
            <Route path="/test" element={<Test onLogout={handleLogout} />} />

            {/* Admin панель */}
            <Route
              path="/admin"
              element={
                localStorage.getItem("admin") === "true"
                  ? <Admin />
                  : <Login onLogin={() => window.location.reload()} />
              }
            />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
