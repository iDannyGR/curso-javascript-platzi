import mediaPlayer from './mediaPlayer.js';
   
    const video = document.querySelector('video');
    const player = new mediaPlayer({el:video});
    
    const boton = document.querySelector('button');   
    boton.onclick =() => player.togglePlay();

