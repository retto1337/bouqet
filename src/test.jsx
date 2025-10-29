import { Box, Typography, Paper, Avatar, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Test() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);



  const handleOrderClick = () => {
    navigate("/order");
  };

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        maxWidth: 900,
        mx: "auto",
        p: 9,
        bgcolor: "rgba(247, 188, 229, 0.9)",
        borderRadius: 9,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
    >
      
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          pr: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar sx={{ width: 80, height: 80, bgcolor: "secondary.main" }}>
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </Avatar>
          <Box>
            <Typography variant="h6">{user?.name || "Пользователь"}</Typography>
            <Typography color="text.secondary" sx={{ mb: 1 }}>
              {user?.email}
            </Typography>
            <Button size="small" variant="contained" color="primary" onClick={handleEditProfile}>
              Изменить данные
            </Button>
          </Box>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" onClick={handleOrderClick}>
            Заказать букет
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          pl: 2,
        }}
      >
        
      </Box>
    </Box>
  );
}

export default Test;
