import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper, Alert } from "@mui/material";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Проверка на админа
    const ADMIN_LOGIN = "admin";
    const ADMIN_PASSWORD = "12345";

    if (email === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
      localStorage.setItem("token", "true");
      localStorage.setItem("admin", "true"); // помечаем как админ
      setErrorMsg("");
      onLogin();
      navigate("/admin"); // перенаправляем в админку
      return;
    }

    // Обычный пользователь
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setErrorMsg("No registered user found. Please sign up first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem("token", "true");
      localStorage.setItem("name", savedUser.name);
      localStorage.removeItem("admin"); // не админ
      setErrorMsg("");
      onLogin();
      navigate("/test"); // обычная страница
    } else {
      setErrorMsg("Invalid email or password");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: { xs: 6, sm: 8 } }}>
      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, sm: 4 },
          background: "rgba(255,255,255,0.25)",
          backdropFilter: "blur(6px)",
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" gutterBottom align="center" sx={{ mb: 3 }}>
          Log In
        </Typography>

        <Box component="form" onSubmit={handleLogin}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if(errorMsg) setErrorMsg(""); }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => { setPassword(e.target.value); if(errorMsg) setErrorMsg(""); }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              fontWeight: 700,
              textTransform: "none",
              background: "linear-gradient(45deg,rgb(243,33,121) 30%,rgb(240,140,215) 90%)",
              "&:hover": {
                background: "linear-gradient(45deg,#9c27b0 30%,#ce93d8 90%)",
                transform: "scale(1.05)",
              },
            }}
          >
            Log In
          </Button>

          {errorMsg && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {errorMsg}
            </Alert>
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;
