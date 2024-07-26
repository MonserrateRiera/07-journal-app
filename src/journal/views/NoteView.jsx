import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ my:5 }} >
        <Grid item> 
            <Typography fontSize={ 39 } fontWeight='light'> 28 de agosto 2024</Typography>
        </Grid>
        <Grid item> 
           <Button color="primary" sx={{ padding:2 }}>
                <SaveOutlined sx={{ fontSize:30, mr:1 }} />
                Guardar
           </Button>
        </Grid>
        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Insertar titulo"
                label="Título"
                sx={{ mb:1, border:'none' }}
            />
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="¿Que sucede en el día de hoy?"
                minRows={ 5 }
                sx={{ mb:1, border:'none' }}
                multiline
            />
        </Grid>
        {/* Galeria Imagenes */}
        <ImageGallery />
    </Grid>
  );
};
