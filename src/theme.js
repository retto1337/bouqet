import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b058eb", // Цвет кнопок
    },
    secondary: {
      main: "#f11696", // Цвет заголовков и декоративных элементов
    },
  },
  typography: {
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
});

export default theme;
