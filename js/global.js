$(document).ready(function() {
    $("img").mouseenter(function() {
        $(this).addClass("huerotate");
        $(this).removeClass("grayscale");
    });
    $("img").mouseleave(function() {
        $(this).addClass("grayscale");
        $(this).removeClass("huerotate");
    });
});
