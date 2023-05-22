import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup  from '@mui/material/FormGroup';
import  FormControlLabel from '@mui/material/FormControlLabel';
function FormSingUp (){
    return <form>
       
        <TextField 
        id="name" 
        label="Nombre" 
        variant="outlined" 
        fullWidth 
        margin='normal'
        />
        <TextField 
        id="lastName" 
        label="Apellidos" 
        variant="outlined" 
        color='error' 
        fullWidth 
        margin='normal'
        />
        <TextField 
        id="email" 
        label="email" 
        variant="outlined"  
        fullWidth 
        margin='normal'
        />
    <FormGroup>
        <FormControlLabel 
        control={
        <Switch defaultChecked/>
        } 
        label="promociones"
        />
        <FormControlLabel 
        control={
        <Switch defaultChecked/>
        } 
        label="novedades"
        />
    </FormGroup>
        <Button variant="contained" color="error">registrarse</Button>

    </form>
}
export default FormSingUp