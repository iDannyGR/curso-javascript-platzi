import  mediaPlayer from './mediaPlayer.js';
import autoPlay from './plugins/autoPlay.js';
   
    const video = document.querySelector('video');
    const player = new mediaPlayer({el:video, plugins:[new autoPlay()] } );
    
    const boton = document.querySelector('button');   
    boton.onclick =() => player.togglePlay();

