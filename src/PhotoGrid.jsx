import { Box, Paper, Typography } from "@mui/material";

const flowers = [
  { name: "Flower 1", img: "flower1.jpg" },
  { name: "Flower 2", img: "flower2.jpg" },
  { name: "Flower 3", img: "flower3.jpg" },
  { name: "Flower 4", img: "flower4.jpg" },
  { name: "Flower 5", img: "flower5.jpg" },
  { name: "Flower 6", img: "flower6.jpg" },
];

function PhotoGrid() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: { xs: 2, sm: 3 },
        maxWidth: 600,
        justifyContent: "center",
        boxSizing: "border-box",
        mx: "auto", // центрирует сетку
      }}
    >
      {flowers.map((flower, idx) => (
        <Paper
          key={idx}
          elevation={3}
          sx={{
            width: { xs: 120, sm: 150 },
            p: 2,
            textAlign: "center",
            boxSizing: "border-box",
            background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,240,250,0.3) 100%)",
            backdropFilter: "blur(6px)",
            borderRadius: 2,
          }}
        >
          <img
            src={flower.img}
            alt={flower.name}
            style={{
              width: "100%",
              height: "auto",
              marginBottom: 8,
              borderRadius: 8,
            }}
          />
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {flower.name}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default PhotoGrid;
