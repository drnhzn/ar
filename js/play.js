(function ($, window, document) {
    var vid = document.querySelector('#test');
    $(document).on('click touchstart', function(){
        var vid = document.querySelector('#test');
        vid.play();
        alert(vid);
    });
    $(function () {
        alert('loaded 2');
    });
}(window.jQuery, window, document));