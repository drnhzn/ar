(function ($, window, document) {
    var vid = document.getElementById("test");
    $(document).on('click touchstart', function(){
        vid.play();
        alert(vid);
    });
    $(function () {
        alert('loaded');
    });
}(window.jQuery, window, document));