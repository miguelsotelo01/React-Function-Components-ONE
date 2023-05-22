import Button from '@mui/material/Button';
function FormSingUp (){
    return <form>
        <label>nombre</label>
        <input type="text" />
        <label>apellidos</label>
        <input type="text" />
        <label>correo electronico</label>
        <input type="email" />
        <label>promociones</label>
        <input type="checkbox" />
        <label>novedades</label>
        <input type="checkbox" />
        <Button variant="contained" color="error">registrarse</Button>

    </form>
}
export default FormSingUp