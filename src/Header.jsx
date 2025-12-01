import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Link,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useState } from "react";

function Header({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleMainPageClick = () => navigate("/");
  const handleLoginClick = () => navigate("/login");
  const handleSignupClick = () => navigate("/signup");

  // 🔹 Редирект для профиля: админ → /admin, обычный → /test
  const handleProfileClick = () => {
    if (localStorage.getItem("admin") === "true") {
      navigate("/admin");
    } else {
      navigate("/test");
    }
  };

  const handleLogoutClick = () => {
    onLogout();
    navigate("/");
  };

  return (
    <>
      <AppBar position="fixed" color="default" elevation={10}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            color="DarkBlue"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            laurennbouquet
          </Typography>

          <Box
            component="nav"
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            <Link href="https://www.instagram.com/jetaimelaura/" target="_blank" rel="noopener" underline="hover" color="blue">
              Owner - Laura Kuzminska
            </Link>
            <Link href="https://www.instagram.com/laurennbouquet/" target="_blank" rel="noopener" underline="hover" color="blue">
              Order - Instagram
            </Link>
            <Link href="https://www.instagram.com/p/DJuQYwzCC14/?img_index=1" target="_blank" rel="noopener" underline="hover" color="blue">
              Bouquet - Work
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button variant="contained" onClick={handleMainPageClick} sx={{ fontWeight: 900, borderRadius: "20px", textTransform: "none", px: 3, background: "linear-gradient(45deg,rgb(243,33,121) 30%,rgb(240,140,215) 90%)" }}>
              Main page
            </Button>

            {isLoggedIn ? (
              <>
                <Button variant="contained" onClick={handleProfileClick} sx={{ borderRadius: "20px", fontWeight: 900, textTransform: "none", px: 3, background: "linear-gradient(45deg,rgb(243,33,243) 30%,rgb(92,21,133) 90%)" }}>
                  Профиль
                </Button>
                <Button variant="contained" onClick={handleLogoutClick} sx={{ borderRadius: "20px", fontWeight: 900, textTransform: "none", px: 3, background: "linear-gradient(45deg,rgb(243,33,243) 30%,rgb(92,21,133) 90%)" }}>
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Button variant="contained" onClick={handleLoginClick} endIcon={<LoginIcon />} sx={{ borderRadius: 15, fontSize: "1rem", fontWeight: 800, textTransform: "none", background: "linear-gradient(45deg,rgb(243,33,121) 30%,rgb(240,140,215) 90%)" }}>
                  Log in
                </Button>
                <Button variant="contained" color="secondary" onClick={handleSignupClick} startIcon={<PersonAddIcon />} sx={{ borderRadius: 15, fontSize: "1rem", fontWeight: 900, textTransform: "none", background: "linear-gradient(45deg,rgb(243,33,121) 30%,rgb(240,140,215) 90%)" }}>
                  Sign up
                </Button>
              </>
            )}
          </Box>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMainPageClick}>Main page</MenuItem>
        {isLoggedIn ? (
          <>
            <MenuItem onClick={handleProfileClick}>Профиль</MenuItem>
            <MenuItem onClick={handleLogoutClick}>Выйти</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleLoginClick}>Log in</MenuItem>
            <MenuItem onClick={handleSignupClick}>Sign up</MenuItem>
          </>
        )}
        <MenuItem component="a" href="https://www.instagram.com/jetaimelaura/" target="_blank">Owner - Laura</MenuItem>
        <MenuItem component="a" href="https://www.instagram.com/laurennbouquet/" target="_blank">Order - Instagram</MenuItem>
        <MenuItem component="a" href="https://www.instagram.com/p/DJuQYwzCC14/?img_index=1" target="_blank">Bouquet - Work</MenuItem>
      </Menu>

      <Toolbar />
      <hr />
    </>
  );
}

export default Header;
