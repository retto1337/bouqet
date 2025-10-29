import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        mt: "auto",
        py: { xs: 2, sm: 3 },
        px: { xs: 2, sm: 3 },
        textAlign: "center",
        color: "#fff",
        background: "linear-gradient(to top, rgba(243,33,121,0.7), rgba(243,33,121,0.0))",
        boxShadow: "0 -8px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        variant="body2"
        sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
      >
        &copy; {new Date().getFullYear()} Your website name
      </Typography>
    </Box>
  );
}

export default Footer;
