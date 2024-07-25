import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Grid, TextField, Typography, Button, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
        <form action="">
          <Grid container> 
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField 
                label="Nombre completo" 
                type='text' 
                placeholder='Juan Palomo'
                fullWidth
                />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField 
                label="correo" 
                type='email' 
                placeholder='corre@dominio.com'
                fullWidth
                />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField 
                label="password" 
                type='password' 
                placeholder='contraseña'
                fullWidth
                />
            </Grid>
            <Grid container spacing = {2} sx={{mb: 2, mt: 1}}>
              <Grid item xs={ 12 } sm ={ 6 }>
                <Button variant='contained' fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr:1 }}>¿Ya tienes cuenta? </Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
  );
};
