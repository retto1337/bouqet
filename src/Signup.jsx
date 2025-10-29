import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper, Alert } from "@mui/material";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
    if (!password || password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const userData = { name, email, password };
      localStorage.setItem("user", JSON.stringify(userData));
      setSuccess(true);
      setTimeout(() => navigate("/login"), 3000);
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
          Sign Up
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
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
            Sign Up
          </Button>

          {success && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Veiksmīga reģistrācija! Переход на страницу входа...
            </Alert>
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export default Signup;
