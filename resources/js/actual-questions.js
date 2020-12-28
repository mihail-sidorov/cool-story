$(document).ready(() => {
    var user = detect.parse(navigator.userAgent);
    var deviceType = user.device.type;

    if (deviceType === 'Desktop' && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if ($('div').is('.actual-questions-block-3__photos') && $('div').is('.actual-questions-block-3__content-chat-items')) {
            $('.actual-questions-block-3__photos, .actual-questions-block-3__content-chat-items').mCustomScrollbar(
                {
                    axis: 'y',              // вертикальный скролл
                    scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах
                    mouseWheel: {
                        deltaFactor: 100    // кол-во пикселей на одну прокрутку колёсика мыши
                    }
                }
            );
        }
    }
});