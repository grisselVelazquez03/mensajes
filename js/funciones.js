import Mensaje from "./clases/Mensajes.js";
import UI from "./clases/UI.js";

const adminMensaje = new Mensaje();
const ui = new UI();

let modificar = false;

let id =1;

const mensaje = {
    id: '',
    texto: ''
}

export function agregarMensaje(e){
    e.preventDefault();
    
    if(modificar){
        adminMensaje.editar({ ...mensaje });
        ui.mostrarMensajes(adminMensaje);
        modificar = false;
    }else{
        if(mensaje.texto == ''){
            alert("llena el campo del mensaje");
        }else{
            mensaje.id = id;
            id+=1;
            adminMensaje.agregarMensaje({...mensaje});
            ui.mostrarMensajes(adminMensaje);
            const{texto} = mensaje;
            console.log("Mensaje registrado");
        }
    }
    limpiarMensaje();
}

export function cargarMensaje(e) {
    mensaje[e.target.name] = e.target.value;
    console.log(mensaje);

    if(mensaje.texto == ''){
        console.log("Llena todos los campos");
        ui.mostrarAlerta("Llena todos los campos", "error");
        return;
    }
}

export function editarMensaje( mensajeModificar){
    modificar = true;
    texto.value = mensajeModificar.texto;
    mensaje.id = mensajeModificar.id;
    mensaje.texto = mensajeModificar.texto;
}

export function eliminarMensaje( id, mensaje){
    adminMensaje.eliminarMensaje(id, mensaje);
    ui.mostrarAlerta("Mensaje Eliminado", "exito");
    ui.mostrarMensajes( adminMensaje);
}

export function limpiarMensaje(){
    mensaje.id = '';
    mensaje.texto = '';
}
