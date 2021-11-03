"use strict";
exports.__esModule = true;
var mediaPlayer_1 = require("./mediaPlayer");
var autoPlay_1 = require("./plugins/autoPlay");
var autoPause_1 = require("./plugins/autoPause");
var video = document.querySelector('video');
var play = document.getElementById('play-pause');
var mute = document.getElementById('mute-unmute');
var player = new mediaPlayer_1["default"]({
    video: video,
    plugins: [new autoPlay_1["default"](), new autoPause_1["default"]()]
});
play.onclick = function () { player.tooglePlayPause(); };
mute.onclick = function () { player.toogleMuteUnmute(); };
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')["catch"](function (error) {
        console.log(error.message);
    });
}
