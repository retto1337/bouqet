import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js"; 
import bgImage from './assets/1670915619_grizly-club-p-lepestki-roz-png-1.png';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            color: "#fff", // читаемый текст
          },
          "#root": {
            height: "100%",
            background: "transparent",
          },
        }}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
