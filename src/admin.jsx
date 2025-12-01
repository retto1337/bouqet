import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Card, CardMedia, CardContent, CardActions, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

function Admin() {
  const [photos, setPhotos] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("photos") || "[]");
    setPhotos(saved);
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem("photos", JSON.stringify(data));
  };

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleSave = async () => {
    let base64 = imgFile;
    if (imgFile instanceof File) {
      base64 = await convertToBase64(imgFile);
    }

    const newItem = {
      img: base64,
      desc,
      tags: tags.split(",").map(t => t.trim()),
    };

    let updated;
    if (editIndex !== null) {
      updated = [...photos];
      updated[editIndex] = newItem;
    } else {
      updated = [...photos, newItem];
    }

    setPhotos(updated);
    saveToLocalStorage(updated);
    clearForm();
  };

  const clearForm = () => {
    setImgFile(null);
    setDesc("");
    setTags("");
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const item = photos[index];
    setImgFile(item.img);
    setDesc(item.desc);
    setTags(item.tags.join(", "));
    setEditIndex(index);
    setDialogOpen(true);
  };

  const handleDelete = (index) => {
    const updated = photos.filter((_, i) => i !== index);
    setPhotos(updated);
    saveToLocalStorage(updated);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Админ-панель</Typography>

      {/* Кнопка добавления нового фото */}
      <Button variant="contained" onClick={() => setDialogOpen(true)} sx={{ mb: 3 }}>
        Добавить новое фото
      </Button>

      {/* Диалог для добавления/редактирования */}
      <Dialog open={dialogOpen} onClose={() => { setDialogOpen(false); clearForm(); }} fullWidth maxWidth="sm">
        <DialogTitle>{editIndex !== null ? "Редактировать фото" : "Добавить фото"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <Button variant="contained" component="label">
            {imgFile ? "Выбрать другое фото" : "Выбрать фото"}
            <input type="file" hidden onChange={(e) => setImgFile(e.target.files[0])} />
          </Button>
          {imgFile && <img src={imgFile instanceof File ? URL.createObjectURL(imgFile) : imgFile} alt="preview" style={{ maxWidth: "100%", maxHeight: 200, marginTop: 5 }} />}
          <TextField label="Описание" value={desc} onChange={(e) => setDesc(e.target.value)} fullWidth />
          <TextField label="Теги (через запятую)" value={tags} onChange={(e) => setTags(e.target.value)} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setDialogOpen(false); clearForm(); }}>Отмена</Button>
          <Button variant="contained" onClick={() => { handleSave(); setDialogOpen(false); }}>Сохранить</Button>
        </DialogActions>
      </Dialog>

      {/* Сетка фото */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 2 }}>
        {photos.map((item, index) => (
          <Card key={index} sx={{ borderRadius: 2 }}>
            <CardMedia component="img" image={item.img} sx={{ height: 250, objectFit: "cover" }} />
            <CardContent>
              <Typography>{item.desc}</Typography>
              <Typography variant="caption" color="gray">{item.tags.join(", ")}</Typography>
            </CardContent>
            <CardActions>
              <IconButton color="primary" onClick={() => handleEdit(index)}><Edit /></IconButton>
              <IconButton color="error" onClick={() => handleDelete(index)}><Delete /></IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Admin;
