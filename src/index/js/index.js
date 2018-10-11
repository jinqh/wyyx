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

// register
function Register() {
    this.register = $('.register');
    this.close = $('.close');
    this.mark = $('.mark');
    this.registerDialog = $('.registerDialog');
    this.telInp = $('.registerDialog .tel');
    this.pwdInp = $('.registerDialog .pwd');
    this.subBtn = $('.registerDialog .submit');
    this.errMsg = $('.registerDialog .errMsg');
    this.blur();
    this.focus();
    this.subBtnClick();
    this.registerClick();
    this.closeClick();
}
Register.prototype = {
    registerClick: function() {
        this.register.click($.proxy(this.handleRegister, this));
    },
    handleRegister: function() {
        this.mark.css('display', 'block');
        this.registerDialog.css('display', 'block');
    },
    closeClick: function() {
        this.close.click($.proxy(this.handleClose, this));
    },
    handleClose: function() {
        this.mark.css('display', 'none');
        this.registerDialog.css('display', 'none');
    },
    blur: function() {
        this.telInp.blur($.proxy(this.handleBlur, this));
    },
    handleBlur: function() {
        if (!/^1[34578]\d{9}$/.test(this.telInp.val())) {
            this.errMsg.css('display', 'block');
        }
    },
    focus: function() {
        this.telInp.focus($.proxy(this.handleFocus, this));
    },
    handleFocus: function() {
        this.errMsg.css('display', 'none');
    },
    subBtnClick: function() {
        this.subBtn.click($.proxy(this.handleSubBtn, this));
    },
    handleSubBtn: function() {
        var telNum = this.telInp.val();
        var pwd = this.pwdInp.val();

        var users = $.cookie('registerUsers') ? $.cookie('registerUsers') : '';
        users = this.convertStrToObj(users);
        if (users[telNum] in users) {
            alert('用户名已被注册');
        } else {
            users[telNum] = pwd;
            userStr = JSON.stringify(users);
            $.cookie('registerUsers', userStr, {expires: 7, path: '/'});
            console.log(decodeURIComponent(document.cookie));
            alert('注册成功');
        }
        
    },
    convertStrToObj: function(str) {
        if (!str) {
            return {};
        }
        return JSON.parse(str);
    }
};

new Register();

// login
function Login() {
    this.login = $('.login');
    this.close = $('.close');
    this.mark = $('.mark');
    this.loginDialog = $('.loginDialog');
    this.telInp = $('.loginDialog .tel');
    this.pwdInp = $('.loginDialog .pwd');
    this.subBtn = $('.loginDialog .submit');
    this.errMsg = $('.loginDialog .errMsg');
    this.blur();
    this.focus();
    this.subBtnClick();
    this.loginClick();
    this.closeClick();
}
Login.prototype = {
    loginClick: function() {
        this.login.click($.proxy(this.handleLogin, this));
    },
    handleLogin: function() {
        this.mark.css('display', 'block');
        this.loginDialog.css('display', 'block');
    },
    closeClick: function() {
        this.close.click($.proxy(this.handleClose, this));
    },
    handleClose: function() {
        this.mark.css('display', 'none');
        this.loginDialog.css('display', 'none');
    },
    blur: function() {
        this.telInp.blur($.proxy(this.handleBlur, this));
    },
    handleBlur: function() {
        if (!/^1[34578]\d{9}$/.test(this.telInp.val())) {
            this.errMsg.css('display', 'block');
        }
    },
    focus: function() {
        this.telInp.focus($.proxy(this.handleFocus, this));
    },
    handleFocus: function() {
        this.errMsg.css('display', 'none');
    },
    subBtnClick: function() {
        this.subBtn.click($.proxy(this.handleSubBtn, this));
    },
    handleSubBtn: function() {
        var telNum = this.telInp.val();
        var pwd = this.pwdInp.val();

        var users = $.cookie('registerUsers') ? $.cookie('registerUsers') : '';
        users = this.convertStrToObj(users);
        if (users[telNum] == pwd) {
            $.cookie('loginUsers', telNum, {expires: 7, path: '/'});
            alert('登录成功');
            this.handleClose();
            var str = $.cookie('loginUsers') ? $.cookie('loginUsers') : '';
            console.log(str);
            if (str) {
                $('.login a').text(str);
                $('.register a').replaceWith('<a href="##" class="cancel">注销</a>');
                $('.cancel').click($.proxy(this.handleCancel, this));
            }
        } else {
            alert('用户名和密码不匹配');
        }
    },
    handleCancel: function() {
        $.removeCookie('loginUsers', {expires: 7, path: '/'});
        $('.login a').html('登录');
        $('.cancel').replaceWith('register a');
    },
    convertStrToObj: function(str) {
        if (!str) {
            return {};
        }
        return JSON.parse(str);
    }
};

new Login();