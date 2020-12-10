$(document).ready(() => {
    $('.video-player-initial').click((e) => {
        var video = e.currentTarget;
        var mediaVideo = $(video).find('video').get(0);
        if (mediaVideo.paused) {
            mediaVideo.play();
            $(video).addClass("plaing");
        }
        else {
            mediaVideo.pause();
            $(video).removeClass("plaing");
       }
     });
});