import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

function PhotoGrid() {
  const photos = JSON.parse(localStorage.getItem("photos") || "[]");

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Grid container spacing={2}>
        {photos.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
              <CardMedia component="img" image={item.img} sx={{ height: 250, objectFit: "cover" }} />
              <CardContent>
                <Typography>{item.desc}</Typography>
                <Typography variant="caption" color="gray">{item.tags.join(", ")}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PhotoGrid;
