class AutoPause {
    constructor() {
      this.handleIntersection = this.handleIntersection.bind(this)
    }
  
    run(player) {
      this.player = player;
      const observer = new IntersectionObserver (this.handleIntersection)
      observer.observe(player.media)
      }
    handleIntersection(entries){
      const entry = entries[0];
      const entryPoint= entry.isIntersecting
      if(!entryPoint){
        this.player.pause()
      }else{
        this.player.play()
      }
    }
}
  export default AutoPause;