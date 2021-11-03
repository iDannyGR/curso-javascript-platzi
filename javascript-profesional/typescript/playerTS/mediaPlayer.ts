// MediaPlayer
class MediaPlayer {
  media:HTMLMediaElement;
  plugins: Array<any>;

  constructor({ video, plugins }) {
    this.media = video
    this.plugins = plugins || []
    this.initPlugins()
  }
  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run;
    })
  }
  
  toogleMuteUnmute() {
    this.media.muted = !this.media.muted
  }

  tooglePlayPause() {
    this.media.paused
      ? this.media.play()
      : this.media.pause()
  }
}

export default MediaPlayer