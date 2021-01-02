$(document).ready(() => {
    var user = detect.parse(navigator.userAgent);
    var deviceType = user.device.type;

    if (!(deviceType === 'Desktop' && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        $('.actual-questions-block-1__content, .reviews-block__content, .videos-block-1__content').css('height', window.innerHeight + 'px');
    }
});