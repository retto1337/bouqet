import Pic from './assets/image.png';
import { Box, Typography, Paper } from "@mui/material";

function Card() {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: { xs: 280, sm: 350 },
        p: { xs: 2, sm: 3 },
        textAlign: "center",
        mx: "auto",
        background: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(6px)",
        borderRadius: 3,
      }}
    >
      <Box
        component="img"
        src={Pic}
        alt="profile picture"
        sx={{
          width: { xs: "50%", sm: "60%" },
          borderRadius: "50%",
          mb: 2,
          mx: "auto",
          display: "block",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      />
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontFamily: "Arial, sans-serif",
          color: "hsl(0, 88%, 40%)",
          mb: 1,
          fontWeight: 700,
        }}
      >
        Laura
      </Typography>
      <Typography
        sx={{
          fontFamily: "Arial, sans-serif",
          color: "hsl(330, 73%, 60%)",
          fontSize: { xs: "0.9rem", sm: "1rem" },
        }}
      >
        Puķēs un dažādi Pušķi
      </Typography>
    </Paper>
  );
}

export default Card;
