function autoPlay(){
    this.autoPlay.run = function(player){
        player.mute();
        player.play();
    }
}

export default autoPlay;