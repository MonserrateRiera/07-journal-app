



export const fileUpload = async ( file ) =>{
    if( !file ) throw new Error('No hay archivo');

    const api_key = import.meta.env.VITE_CLOUDINARY_API_KEY;
    const api_secret = import.meta.env.VITE_CLOUDINARY_API_SECRET;

    const cloudURL = `https://api.cloudinary.com/v1_1/dqxt6g7dm/upload`;
    
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal-app');
    formData.append('file', file);
    
    try{

        const response = await fetch( cloudURL,{
            method : 'POST',
            body : formData
        });

        console.log(response);
        if(!response.ok) throw new Error('No se pudo subir la imagen')
        const cloudResp = await response.json();
        return cloudResp.secure_url;
    }catch( error ){
        console.log(error);
        throw new Error (error.message);
    }
}