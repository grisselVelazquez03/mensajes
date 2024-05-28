import {contenedor, formulario} from "../selectores.js";
import {eliminarMensaje, editarMensaje} from "../funciones.js";
class UI{
    mostrarAlerta(mensaje, tipo) {
        const div = document.createElement('div');
        div.classList.add('alert');
        div.textContent = mensaje;
        if (tipo === 'error') {
            div.classList.add('alert-danger');
        } else {
            div.classList.add('alert-success');
        }

        document.querySelector('#alerta').appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 5000);
    }
    
    mostrarMensajes({mensajes}){
        //console.log(mensajes);

        document.querySelector('#publicaciones').innerHTML = '';
        mensajes.forEach(mensaje => { 
            const { id, texto } = mensaje;
            const div = document.createElement('div');
            div.classList.add('card');
            div.classList.add('mb-2');

            const text = document.createElement('div');
            text.classList.add('card-text');
            text.classList.add('col-3');
            text.innerHTML = `@${id} \n${texto}`;

            const button = document.createElement('button');
            button.classList.add('btn');
            button.classList.add('btn-danger');
            button.textContent = 'Eliminar';
            button.classList.add('col-2');
            button.onclick = () => eliminarMensaje(id);

            const modificar = document.createElement('button');
            modificar.classList.add('btn');
            modificar.classList.add('btn-warning');
            modificar.textContent = 'Modificar';
            modificar.classList.add('col-2');
            modificar.onclick = () => editarMensaje(mensaje);

            // Agregar evento dblclick al contenedor
            div.addEventListener('dblclick', () => {
                /* button.style.display = 'block';
                modificar.style.display = 'block'; */

                button.style.display = button.style.display === 'none' ? 'block' : 'none';
                modificar.style.display = modificar.style.display === 'none' ? 'block' : 'none';
            });

            // Ocultar los botones al principio
            button.style.display = 'none';
            modificar.style.display = 'none';

            div.appendChild(text);
            div.appendChild(button);
            div.appendChild(modificar);
            contenedor.appendChild(div);
        });
        formulario.reset();
    }
    
}
export default UI;