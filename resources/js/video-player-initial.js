$(document).ready(() => {
    $('.video-player-initial').click((e) => {
        var video = e.currentTarget;
        var mediaVideo = $(video).find('video').get(0);
        var btn = $(video).find('.video-btn').get(0);
        if (mediaVideo.paused) {
            mediaVideo.play();
            $(btn).addClass("plaing");
        }
        else {
            mediaVideo.pause();
            $(btn).removeClass("plaing");
       }
     });
});