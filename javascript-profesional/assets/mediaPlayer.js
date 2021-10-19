class mediaPlayer{
    constructor(config) {
      this.media =config.el;
      this.plugins = config.plugins || [];
      
      this._initPlugins();
    }
    _initPlugins(){
      this.plugins.forEach(plugin =>{
        plugin.run();
      }
      )};

    play(){this.media.play()};
    pause(){this.media.pause()};
    togglePlay(){this.media.paused? this.play():this.pause()};
    mute(){this.media.muted=true};
    unmute(){this.media.muted=false};

  }  
     
 
  
  export default mediaPlayer;