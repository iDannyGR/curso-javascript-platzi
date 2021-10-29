import MediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/autoPlay.js'
import autoPause from './plugins/autoPause.js'

    const video = document.querySelector('video');
    const play = document.getElementById('play-pause');
    const mute = document.getElementById('mute-unmute');
 
    const player = new MediaPlayer({ video, plugins: [ new AutoPlay(video), new autoPause() ] });
    play.onclick=() => {player.tooglePlayPause()};
    mute.onclick=() => {player.toogleMuteUnmute()};


   