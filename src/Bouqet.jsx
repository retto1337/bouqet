import { useState } from "react";
import { Box, Button, Collapse, Typography, List, ListItem, ListItemText, Paper } from "@mui/material";

function Bouquet() {
  const [showFlowers, setShowFlowers] = useState(false);
  const category = " – Favorites";

  const toggleFlowers = () => setShowFlowers((prev) => !prev);

  const flowers = ["Nezabudka", "Delfinijums", "Peonijas", "Puķu Zirņi", "Nezabudka", "Neļķes"];

  return (
    <Box sx={{ maxWidth: 350, position: "relative", textAlign: "left" }}>
      <Button variant="contained" color="primary" onClick={toggleFlowers} sx={{ mb: 2 }}>
        {showFlowers ? "Paslēpt sarakstu" : "Rādīt ziedu sarakstu"}
      </Button>

      <Collapse
        in={showFlowers}
        sx={{
          position: "absolute",
          top: "100%", 
          left: 0,
          width: "100%",
          zIndex: 1000,
          bgcolor: "background.paper",
          boxShadow: 3,
        }}
      >
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Ziedi{category}
          </Typography>
          <List>
            {flowers.map((flower, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText primary={flower} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Collapse>
    </Box>
  );
}

export default Bouquet;
