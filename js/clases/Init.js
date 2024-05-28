import { cargarMensaje, agregarMensaje} from "../funciones.js";
import { formulario } from "../selectores.js";
class Init{
    constructor(){
        this.init();
    }
    init(){
        texto.addEventListener('input', cargarMensaje);
        formulario.addEventListener('submit',agregarMensaje);
    }
}
export default Init;