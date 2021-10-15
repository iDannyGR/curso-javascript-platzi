window.addEventListener('load',()=>{
    const video = document.querySelector('video');
    const boton = document.querySelector('button');

      function mediaPlayer(config){
        this.media  = config.el;
      }  
         
      mediaPlayer.prototype.play = function (){this.media.play()} ;
      mediaPlayer.prototype.pause =function(){this.media.pause()};
   
    const player = new mediaPlayer({el:video});
    boton.onclick = ()=>{player.media.paused? player.play():player.pause()};
})
