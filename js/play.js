(function ($, window, document) {
    var vid = document.getElementById("test");
    $(function () {
        $(document).on('click', function(){
            vid.play();
        });
    });
}(window.jQuery, window, document));