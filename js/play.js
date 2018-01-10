(function ($, window, document) {
    $(document).on('click touchstart', function(){
        var vid = document.querySelector('#test');
        vid.play();
    });
    $(function () {
        alert('loaded assets 4');
    });
}(window.jQuery, window, document));