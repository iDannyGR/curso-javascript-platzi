"use strict";
exports.__esModule = true;
// MediaPlayer
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(_a) {
        var video = _a.video, plugins = _a.plugins;
        this.media = video;
        this.plugins = plugins || [];
        this.initPlugins();
    }
    MediaPlayer.prototype.initPlugins = function () {
        this.plugins.forEach(function (plugin) {
            plugin.run;
        });
    };
    MediaPlayer.prototype.toogleMuteUnmute = function () {
        this.media.muted = !this.media.muted;
    };
    MediaPlayer.prototype.tooglePlayPause = function () {
        this.media.paused
            ? this.media.play()
            : this.media.pause();
    };
    return MediaPlayer;
}());
exports["default"] = MediaPlayer;
