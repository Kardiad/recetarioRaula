import './css/style.css';
import { conexion } from './js/app';
import img from "../src/img/2.png";
const query = document.getElementById('query');
const adelante = document.getElementById('adelante');
const btnAnterior = document.getElementById('anterior');
const bundlePosition = img.indexOf('bundle/');
const urlImg = img.substring(bundlePosition, img.lenght);
const imgLogo = document.querySelector('.logo');
imgLogo.setAttribute('src', `${img}`);
query.addEventListener('keypress', (event)=>{
    window.scroll(0, 0);
    if(event.key === 'Enter'){
        conexion(query.value, false, '');
    }
})
adelante.addEventListener('click', (event)=>{
    event.preventDefault();
    window.scroll(0, 0);
    const url = adelante.getAttribute('href');
    adelante.setAttribute('disabled', true);
    btnAnterior.setAttribute('disabled', true);
    conexion(url, true, true);
    adelante.disabled=false;
    btnAnterior.disabled=false;
})
btnAnterior.addEventListener('click', (event)=>{
    event.preventDefault();
    window.scroll(0,0);
    const url = btnAnterior.getAttribute('href');
    adelante.setAttribute('disabled', true);
    btnAnterior.setAttribute('disabled', true);
    conexion(url, true, false);
    adelante.disabled=false;
    btnAnterior.disabled=false;
})