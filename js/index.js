$(function () {
    // 头部
    $('.top2_1_ul li a').hover(function () {
        $('#yinchang').stop().animate({
            'height': 190
        }, 200);
        $('#yinchang').hover(function () {
            $(this).stop().animate({
                'height': 190
            }, 200);
        }, function () {
            $(this).stop().animate({
                'height': 0
            }, 200);
        })
    }, function () {
        $('#yinchang').stop().animate({
            'height': 0
        }, 200);
    });
    $('.shousuo a,.guanbi2').stop().click(function () {
        $('.shousuo_menu').slideToggle();
    });

    // 轮播图
    //先把所有图片放在右侧
    var iw = $(window).width();

    $('.sangar_content li').css('left', iw);
    $('.sangar_content li').eq(0).css('left', 0);
    //自动轮播开始
    var timer = null;
    var now = 0;
    //开启定时器
    timer = setInterval(next, 2000);
    //关闭定时器
    qingchu('.sangar_content', timer, next, 2000)

    function next() {
        $('.sangar_content li').eq(now).animate({
            'left': -iw
        });
        now++;
        if (now >= $('.sangar_content li').length) {
            now = 0;
        }
        $('.sangar_content li').eq(now).css('left', iw);
        $('.sangar_content li').eq(now).animate({
            'left': 0
        });
        light('.light', now, 'active');
    };

    //生成焦点
    var html = '';
    $('.sangar_content li').each(function (i, item) {
        html += '<span>' + (i + 1) + '</span>';
    });
    $('.light').html(html);
    $('.light').children().eq(0).addClass('active');

    function light(num, now, sum) {
        $(num).children().eq(now).addClass(sum).siblings().removeClass(sum);
    }
    //点击焦点切换图片
    $('.light').on('click', 'span', function () {
        var index = $(this).index();
        if (index > now) {
            $('.sangar_content li').eq(now).animate({
                'left': -iw
            });
            $('.sangar_content li').eq(index).css('left', iw);
            $('.sangar_content li').eq(index).animate({
                'left': 0
            });
        }
        if (index < now) {
            $('.sangar_content li').eq(now).animate({
                'left': iw
            });
            $('.sangar_content li').eq(index).css('left', -iw);
            $('.sangar_content li').eq(index).animate({
                'left': 0
            });
        }
        now = index;
        light('.light', now, 'active');
    });
    // 轮播图2
    $('.lunbo2 li').css('opacity', 0);
    $('.lunbo2 li').eq(0).css('opacity', 1);

    var timer2 = null;
    var now2 = 0;
    timer2 = setInterval(next2, 3000);

    //轮播2自动
    function next2() {
        now2++;
        if (now2 >= $('.lunbo2 li').length) {
            now2 = 0;
        }
        $('.lunbo2 li').css('opacity', '0');
        $('.lunbo2 li').eq(now2).animate({
            opacity: 1
        }, 100);
        $('.lunbo2 li').eq(now2).css({
            'opacity': '1'
        });
        light('.xuanxiang', now2, 'active2');
    }
    //先给当前的下表加上active2
    $('.xuanxiang').children().eq(now2).addClass('active2');


    //点击切换图片
    $('.xuanxiang').on('click', 'li', function () {
        $('.lunbo2 li').css({
            opacity: 0
        });
        var index = $(this).index();
        $('.lunbo2 li').eq(index).animate({
            opacity: 1
        }, 100);

        light('.xuanxiang', index, 'active2');
    });
    //鼠标划入清除定时器
    qingchu('.m2_1', timer2, next2, 2000);
    //前
    // qingchu('m2_1', timer2, next2);
    $('.il').click(function () {
        now2--;
        if (now2 < 0) {
            now2 = $('.lunbo2 li').length - 1;
        }
        $('.lunbo2 li').css('opacity', '0');
        $('.lunbo2 li').eq(now2).animate({
            opacity: 1
        }, 100);
        $('.lunbo2 li').eq(now2).css({
            'opacity': '1'
        });
        light('.xuanxiang', now2, 'active2');
    });
    //点击下一个系类图
    $('.ir').click(function () {
        next2();
    });


    // 轮播图3
    //将图片丢到右边
    var iw2 = $('.m3').outerWidth();

    $('.lunbo3 li').css({
        'left': iw2
    });
    $('.lunbo3 li').eq(0).css({
        'left': 30
    });

    // 开始自动轮播
    var timer3 = null;
    var now3 = 0; //这是下标
    //开启定时器
    timer3 = setInterval(next3, 2000);
    //让第一个小圆点变颜色
    $('.lunbo3_1').children().eq(0).addClass('active3');

    function next3() {
        $('.lunbo3 li').eq(now3).animate({
            'left': -iw2
        });
        now3++;
        if (now3 >= $('.lunbo3 li').length) {
            now3 = 0;
        }
        $('.lunbo3 li').eq(now3).css('left', iw2);
        $('.lunbo3 li').eq(now3).animate({
            'left': 30
        });
        light('.lunbo3_1', now3, 'active3');
    }
    //点击小圆点更换位置
    $('.lunbo3_1').on('click', 'li', function () {
        var index = $(this).index();
        if (index > now3) {
            $('.lunbo3 li').eq(now3).animate({
                'left': -iw2
            });
            $('.lunbo3 li').eq(index).css('left', iw2);
            $('.lunbo3 li').eq(index).animate({
                'left': 30
            });
        }
        if (index < now3) {
            $('.lunbo3 li').eq(now3).animate({
                'left': iw2
            });
            $('.lunbo3 li').eq(index).css('left', -iw2);
            $('.lunbo3 li').eq(index).animate({
                'left': 30
            });
        }
        now3 = index;
        light('.lunbo3_1', now3, 'active3');
    })

    //清除定时器
    qingchu('.m3', timer3, next3, 2000);

    $('.lunbo4').append(function () {
        $.ajax({
            type: 'post',
            url: './api/goodlist.php',
            data: {
                dbsql: 'sheet2'
            },
            success: str => {
                var arr = JSON.parse(str);
                console.log(arr);
                liebiao(arr.data);
            }
        });
    });

    function liebiao(str) {
        var inner = str.map(function (item) {
            return `
            <li>
            <div class="lunbo4_div">
                <div>
                    <a href="###"><img src="${item.img}" alt=""></a>
                    <h3>${item.name} <br>
                        <p>至高12期免息分期 购机赠好礼</p>
                    </h3>
                    <p>${item.jiage}.00</p>
                </div>
            </div>
            <div class="lunbo4_div">
                <div>
                    <a href="###"><img src="${item.img}" alt=""></a>
                    <h3>${item.name} <br>
                        <p>至高12期免息分期 购机赠好礼</p>
                    </h3>
                    <p>${item.jiage}.00</p>
                </div>
            </div>
            <div class="lunbo4_div">
                <div>
                    <a href="###"><img src="${item.img}" alt=""></a>
                    <h3>${item.name} <br>
                        <p>至高12期免息分期 购机赠好礼</p>
                    </h3>
                    <p>${item.jiage}.00</p>
                </div>
            </div>
            <div class="lunbo4_div">
                <div>
                    <a href="###"><img src="${item.img}" alt=""></a>
                    <h3>${item.name} <br>
                        <p>至高12期免息分期 购机赠好礼</p>
                    </h3>
                    <p>${item.jiage}.00</p>
                </div>
            </div>
        </li>
            `
        }).join('');
        $('.lunbo4').html(inner);
    };

    // 轮播4
    $('.lunbo4 li').css('opacity', 0);
    $('.lunbo4 li').eq(0).css('opacity', 1);

    var timer4 = null;
    var now4 = 0;
    timer4 = setInterval(next4, 3000);

    //自动
    function next4() {
        now4++;
        if (now4 >= $('.lunbo4 li').length) {
            now4 = 0;
        }
        $('.lunbo4 li').css('opacity', 0);
        $('.lunbo4 li').eq(now4).animate({
            opacity: 1
        }, 100);
        $('.lunbo4 li').eq(now4).css({
            opacity: 1
        });
        light('.xuanxiang2', now4, 'active3');
    };
    //给第一个下标加上active3
    $('.xuanxiang2').children().eq(now4).addClass('active3');
    //点击切换图片
    $('.xuanxiang2').on('click', 'li', function () {
        $('.lunbo4 li').css('opacity', 0);
        var index = $(this).index();
        $('.lunbo4 li').eq(index).animate({
            opacity: 1
        }, 100);
        light('.xuanxiang2', index, 'active3');
    });
    //清除
    qingchu('.m6_1', timer4, next4, 3000);

    //点击下一个图
    $('.ir2').click(function () {
        next4();
    });
    //点击上一个图
    $('.il2').click(function () {
        now2--;
        if (now2 < 0) {
            now2 = $('.lunbo4 li').length - 1;
        }
        $('.lunbo4 li').css('opacity', '0');
        $('.lunbo4 li').eq(now2).animate({
            opacity: 1
        }, 100);
        $('.lunbo4 li').eq(now2).css({
            'opacity': '1'
        });
        light('.xuanxiang2', now2, 'active3');
    });


    //回到顶部
    $(function () {
        //一开始就给他隐藏
        $("#huidao").fadeOut(0);
        $(window).scroll(function () {
            //到达指定的深度之后就让他显示，否则就隐藏
            if ($(window).scrollTop() > 100) {
                $("#huidao").fadeIn(500);
            } else {
                $("#huidao").fadeOut(500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#huidao").click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });
    //吸顶菜单
    var a = $('#top2'),
        b = a.offset(); //返回或设置导航栏相对于文档的偏移(位置)
    //加个屏幕滚动事件，c是滚动条相当于文档最顶端的距离
    $(document).on('scroll', function () {
        var c = $(document).scrollTop();
        if (b.top <= c) {
            a.addClass('menu');
        } else {
            a.removeClass('menu');
        }
    })


    //打开关闭客服
    $('.zixun_1,.kefu_1').click(function () {
        $('#zixunkefu2').css(
            'display', 'block'
        );
        console.log(123);
    });
    $('.guanbi').click(function () {
        $('#zixunkefu2').css(
            'display', 'none'
        );
    });

}); //底线 

//清除定时器
function qingchu(num, sum, nom, pnp) {
    $(num).stop().hover(function () {
        clearInterval(sum);
    }, function () {
        sum = setInterval(nom, pnp);
    })
}

//点击上一个图

a = getCookie("username3");
c_start = document.cookie.indexOf("username3=");
if (c_start == -1) {
    $("#login_form").show();
    $("#logined").hide();
} else {
    $("#login_form").hide();
    $("#logined").show();
    $("#ustr").html(a);
}

//获得coolie 的值
function cookie(name) {
    var cookieArray = document.cookie.split("; "); //得到分割的cookie名值对    
    var cookie = new Object();
    for (var i = 0; i < cookieArray.length; i++) {
        var arr = cookieArray[i].split("="); //将名和值分开    
        if (arr[0] == name) return unescape(arr[1]); //如果是指定的cookie，则返回它的值    
    }
    return "";
}

function getCookie(objName) { //获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) return unescape(temp[1]);
    }
}