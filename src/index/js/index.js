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

//tabNav
(function() {
    // $('.tabNav li').each(function() {
    //     $(this).mouseover(function() {
    //         $(this).find('.tabNav-dropdown').css({'display': 'block', 'left': 0});
    //     });
    //     $(this).find('.tabNav-dropdown').mouseout(function() {
    //         $(this).css({'display': 'none'});
    //     });
    // });

    $('.tabNav li').mouseover(function() {
        var $index = $(this).index();
        if ($index == 1) {
            $(this).find('.tabNav-dropdown').css({'display': 'block', 'left': 0, 'width': '742px'});
            $(this).find('.tabNav-triangle').css('display', 'block');
        } else if ($index == 2) {
            $(this).find('.tabNav-dropdown').css({'display': 'block', 'left': 0, 'width': '738px'});
            $(this).find('.tabNav-triangle').css('display', 'block');
        } 
    });
    $('.tabNav li').mouseout(function() {
        $(this).find('.tabNav-dropdown').css({'display': 'none'});
        $(this).find('.tabNav-triangle').css('display', 'none');
    });
})();

// banner

function Banner() {
    this.banner = $('#banner');
    this.lis = $('.imgList li');
    this.dots = $('.dot a');
    this.leftBtn = $('.leftBtn');
    this.rightBtn = $('.rightBtn');
    this.num = this.dots.length;
    this.indexA = 0;
    this.slide();
    this.addEvent();
    this.autoPlay();
    this.bannerEnter();
    this.bannerLeave();
}
Banner.prototype = {
    slide: function() {
        for (var i = 0; i < this.num; i++) {
            this.lis.eq(i).css('display', 'none');
            this.dots.eq(i).css({'background': '#fff', 'boxShadow': ''});
        }
        this.lis.eq(this.indexA).css('display', 'block');
        this.dots.eq(this.indexA).css({'background': '#a7936e', 'boxShadow': '0 0 0 4px #dfcead'});
    },
    addEvent: function() {
        this.leftBtn.click($.proxy(this.handleLeftBtn, this));
        this.rightBtn.click($.proxy(this.handleRightBtn, this));
        for (var i = 0; i < this.num; i++) {
            this.dots.eq(i).on('mouseover', i, $.proxy(this.handleDots, this));
        }
    },
    handleLeftBtn: function() {
        this.indexA--;
        if (this.indexA == -1) {
            this.indexA = this.num - 1;
        }
        this.slide();
    },
    handleRightBtn: function() {
        this.indexA++;
        if (this.indexA == this.num) {
            this.indexA = 0;
        }
        this.slide();
    },
    handleDots: function(i) {
        var index = i.data;
        this.indexA = index;
        this.slide();
    },
    autoPlay: function() {
        this.timer = setInterval($.proxy(this.handleAutoPlay, this), 3000);
    },
    handleAutoPlay: function() {
        this.indexA++;
        if (this.indexA == this.num) {
            this.indexA = 0;
        }
        this.slide();
    },
    bannerEnter: function() {
        this.banner.mouseenter($.proxy(this.handleBannerEnter, this));
    },
    handleBannerEnter: function() {
        clearInterval(this.timer);
    },
    bannerLeave: function() {
        this.banner.mouseleave($.proxy(this.handleBannerLeave, this));
    },
    handleBannerLeave: function() {
        this.autoPlay();
    }
};

new Banner();

// section4
function Section4() {
    this.itemLeft = $('.itemLeft');
    this.itemImgs = $('.itemImgWrap>div');
    this.leftBtn = $('.leftBtn');
    this.rightBtn = $('.rightBtn');
    this.dots = $('.dots li');
    this.num = this.dots.length;
    this.indexA = 0;
    this.slide();
    this.addEvent();
    this.autoPlay();
}
Section4.prototype = {
    slide: function() {
        for (var i = 0; i < this.num; i++) {
            this.itemImgs.eq(i).css({'opacity': 0, 'zIndex': 98});
            this.dots.eq(i).css({'background': '#fff', 'boxShadow': ''});
        }
        this.itemImgs.eq(this.indexA).css({'opacity': 1, 'zIndex': 99});
        this.dots.eq(this.indexA).css({'background': '#a7936e', 'boxShadow': '0 0 0 4px #dfcead'});
    },
    addEvent: function() {
        this.leftBtn.click($.proxy(this.handleLeftBtn, this));
        this.rightBtn.click($.proxy(this.handleRightBtn, this));
        for (var i = 0; i < this.num; i++) {
            this.dots.eq(i).on('mouseenter', i, $.proxy(this.handleDots, this));
        }
        this.itemLeft.mouseenter($.proxy(this.handleItemLeftEnter, this));
        this.itemLeft.mouseleave($.proxy(this.handleItemLeftLeave, this));
    },
    handleLeftBtn: function() {
        this.indexA--;
        if (this.indexA == -1) {
            this.indexA = this.num - 1;
        }
        this.slide();
    },
    handleRightBtn: function() {
        this.indexA++;
        if (this.indexA == this.num) {
            this.indexA = 0;
        }
        this.slide();
    },
    handleDots: function(e) {
        this.indexA = e.data;
        this.slide();
    },
    handleItemLeftEnter: function() {
        clearInterval(this.timer);
    },
    handleItemLeftLeave: function() {
        this.autoPlay();
    },
    autoPlay: function() {
        this.timer = setInterval($.proxy(this.handleAutoPlay, this), 3000);
    },
    handleAutoPlay: function() {
        this.indexA++;
        if (this.indexA == this.num) {
            this.indexA = 0;
        }
        this.slide();
    },
};
new Section4();