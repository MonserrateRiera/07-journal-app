import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Grid, TextField, Typography, Button, Link, Alert } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth/thunks';
import { useMemo, useState } from 'react';

const formData = {
  email: '',
  password: ''
}
const formValidations = {
  email: [ (value) => value.includes('@') , 'El correo debe tener una arroba.'],
  password: [ (value) => value.length >=6  , 'El password debe tener más de 6 letras'],
}


export const LoginPage = () => {

  const {status, errorMessage} = useSelector( state => state.auth );
  const dispatch = useDispatch();
  const {email, password, onInputChange, formState, emailValid, passwordValid, isFormValid } = useForm( formData, formValidations )

  const isAuthenting = useMemo( () => status === 'checking', [status])
  const [formSubmit, setFormSubmit] = useState(false);


  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmit(true);

    if(!isFormValid) {
      return;
    }else{
      
      dispatch( startLoginWithEmailAndPassword( formState ) );
    }

  }

  const onGoogleLogin = ( event ) =>{

    console.log("accediendo a google");
    dispatch( startGoogleSignIn() );
  }


  return (
    <AuthLayout title='Login'>
        <form  
          onSubmit={ onSubmit }
          className="animate__animated animate__fadeIn animate__faster"
        >
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
                error={ !!emailValid && formSubmit }
                helperText={ emailValid }
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
                error={ !!passwordValid && formSubmit }
                helperText={ passwordValid }
                />
            </Grid>
            <Grid container spacing = {2} sx={{mb: 2, mt: 1}}>
              
              <Grid item xs={ 12 } sm ={ 12 }  display={ !!errorMessage ? '' : 'none'}>
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>
              <Grid item xs={ 12 } sm ={ 6 }>
                <Button variant='contained' fullWidth type='submit' disabled={ isAuthenting }>
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm ={ 6 }>
                <Button variant='contained' fullWidth onClick={onGoogleLogin} disabled={ isAuthenting }>
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
