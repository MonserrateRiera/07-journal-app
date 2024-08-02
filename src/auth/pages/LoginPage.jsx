import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Grid, TextField, Typography, Button, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

export const LoginPage = () => {

  const {email, password, onInputChange, formState } = useForm({
    email: 'example@example.com',
    password: ''
  })

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(email, password);
  }


  return (
    <AuthLayout title='Login'>
        <form  onSubmit={ onSubmit }>
          <Grid container> 
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField 
                label="correo" 
                type='email' 
                placeholder='corre@dominio.com'
                fullWidth
                name='email'
                onChange={ onInputChange }
                value={ email }
                />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField 
                label="password" 
                type='password' 
                placeholder='contraseña'
                fullWidth
                name='password'
                onChange={ onInputChange }
                value={ password }
                />
            </Grid>
            <Grid container spacing = {2} sx={{mb: 2, mt: 1}}>
              <Grid item xs={ 12 } sm ={ 6 }>
                <Button variant='contained' fullWidth type='submit'>
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm ={ 6 }>
                <Button variant='contained' fullWidth>
                  <Google />
                  <Typography sx={{ ml:1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to='/auth/register'>
                Crear cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
  );
};
