// header notice
(function() {
    var $noticeList = $('.noticeList');
    setInterval(function() {
        var $top = $noticeList.offset().top - 36 + 'px';
        if (parseInt($top) == -108) {
            $noticeList.css('top', 0);
            $top = -36 + 'px';
        }
        $noticeList.animate({top: $top}, 500, function() {
        });
    }, 5000);
})();