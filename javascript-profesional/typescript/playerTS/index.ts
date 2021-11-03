import MediaPlayer from './mediaPlayer'
import AutoPlay from './plugins/autoPlay'
import AutoPause from './plugins/autoPause'

    const video = document.querySelector('video');
    const play = document.getElementById('play-pause');
    const mute = document.getElementById('mute-unmute');
 
    const player = new MediaPlayer({ 
        video, 
        plugins:[new AutoPlay(), new AutoPause() ], 
    });

    play.onclick=() => {player.tooglePlayPause()};
    mute.onclick=() => {player.toogleMuteUnmute()};

   if('serviceWorker' in navigator){
       navigator.serviceWorker.register('/sw.js').catch(error=>{
           console.log(error.message);
       });
   }