import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Grid, TextField, Typography, Button, Link, Alert } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailAndPassword } from '../../store/auth/thunks';

const formData = {
  displayName: '',
  email: '',
  password: ''
}
const formValidations = {
  email: [ (value) => value.includes('@') , 'El correo debe tener una arroba.'],
  password: [ (value) => value.length >=6  , 'El password debe tener más de 6 letras'],
  displayName: [ (value) => value.length >=1  , 'El nombre es obligatorio'],
}


export const RegisterPage = () => {
  const dispatch = useDispatch();
  const {formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
   } = useForm(formData, formValidations)

   const [formSubmit, setFormSubmit] = useState(false);
   const { status, errorMessage } = useSelector( state => state.auth );
   const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) =>{
    event.preventDefault();
    setFormSubmit(true);
    if(!isFormValid){
       console.log('no valid')
      return;}
    dispatch(startCreatingUserWithEmailAndPassword( formState ));
  }
  return (
    <AuthLayout title='Register'>
        <form onSubmit={ onSubmit }>
          <Grid container> 
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField 
                
                label="Nombre completo" 
                type='text' 
                placeholder='Juan Palomo'
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChange}
                error = { !!displayNameValid && formSubmit }
                helperText = { displayNameValid }
                />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField 
                label="correo" 
                type='email' 
                placeholder='corre@dominio.com'
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
                error = { !!emailValid && formSubmit }
                helperText = { emailValid }
                />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField 
                label="password" 
                type='password' 
                placeholder='contraseña'
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
                error = { !!passwordValid && formSubmit }
                helperText = { passwordValid }
                />
            </Grid>
            <Grid container spacing = {2} sx={{mb: 2, mt: 1}}>

              <Grid item 
                xs={ 12 } 
                sm ={ 12 }
                display={ !!errorMessage ? '' : 'none'}
              >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>

              <Grid item xs={ 12 } sm ={ 6 }>
                <Button variant='contained' fullWidth type='submit' disabled={ isCheckingAuthentication }>
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
