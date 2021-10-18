function mediaPlayer(config){
    this.media  = config.el;
    this.plugins = config.plugins || [];
  }  
     
  mediaPlayer.prototype.play=function (){this.media.play()};
  mediaPlayer.prototype.pause=function(){this.media.pause()};
  mediaPlayer.prototype.togglePlay=function(){player.media.paused? player.play():player.pause()};
  
  export default mediaPlayer;