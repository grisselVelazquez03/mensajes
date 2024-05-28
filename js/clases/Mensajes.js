class Mensaje {
    constructor(){
        this.mensajes = [];
    }

    agregarMensaje(mensaje){
        this.mensajes = [...this.mensajes, mensaje];
    }

    editar(mensajeModificar){
        this.mensajes = this.mensajes.map( mensaje => mensaje.id == mensajeModificar.id ? mensajeModificar:mensaje);
    }

    eliminarMensaje(id, mensaje){//pendiente
        this.mensajes = this.mensajes.filter(mensaje => mensaje.id !== id );
    }
}

export default Mensaje;


/* let num = [1, 2, 3];
for (let index = 0; index < num.length; index++) {
    const element = num[index];
    element += 1;
    num[index] = element;
}

let num2 = num.map(element => element + 1);

array.forEach(element => {
    
}); */