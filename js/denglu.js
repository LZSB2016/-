var isok = true;
// 用户名
$('.username').blur(function () {
    var arr = $('.username').val().trim();
    var reg = /^[a-zA-Z0-9]{6,20}$/;
    var res = reg.test(arr);
    if (arr) {
        if (res) {
            $('.sp1').eq(0).css({
                color: '#58bc58'
            }).html('✔');
            isok = true;
        } else {
            $('.sp1').eq(0).css({
                color: 'red'
            }).html('✖');
            isok = !isok;
        }
    } else {
        $('.sp1').eq(0).css({
            color: 'red'
        }).html('空');
        isok = !isok;
    }
});
// 密码
$('.password').blur(function () {
    var arr = $('.password').val().trim();
    var reg = /^[a-zA-Z]\w{5,17}$/;
    var res = reg.test(arr);
    if (arr) {
        if (res) {
            $('.sp1').eq(1).css({
                color: '#58bc58'
            }).html('✔');
            isok = true;
        } else {
            $('.sp1').eq(1).css({
                color: 'red'
            }).html('✖');
            isok = !isok;
        }
    } else {
        $('.sp1').eq(1).css({
            color: 'red'
        }).html('空');
        isok = !isok;
    }
});

//验证码
// 验证码验证
$.ranCode = function () {
    html = '0987654321zxcvbnmkjhgfdsaqwertyuioplZXCVBNMLKJHGFDSAQWERTYUIOP';
    var num = ''; //存放四位随机数
    for (var i = 0; i < 5; i++) {
        //定义html的随机下标数
        var now = parseInt(Math.random() * html.length); //长度为0-html.length-1 //now为下标
        num += html[now];
        $('.yan').val(num);
        //			console.log($('#num').html());
    }
    return num;
}
$('.yan').click(function () {
    $.ranCode();
});
//鼠标离开输入框
$('.yzm1').blur(function () {
    var arr = $('.yzm1').val().toLowerCase();
    var arr2 = $('.yan').val().toLowerCase();
    if (arr) {
        if (arr == arr2) {
            $('.sp1').eq(2).css({
                color: '#58bc58'
            }).html('✔');
            isok = true;
        } else {
            $('.sp1').eq(2).css({
                color: 'red'
            }).html('✖');
            isok = !isok;
        }
    } else {
        $('.sp1').eq(2).css({
            color: 'red'
        }).html('空');
        isok = !isok;
    }
});
$('.denglu_d').click(function () {
    if (isok) {
        $.ajax({
            type: 'post',
            url: '../api/login.php',
            data: {
                m: 'login',
                val: $('.username').val(),
                paw: $('.password').val(),
            },
            success: function (str) {


                var arr = JSON.parse(str);
                setCookie('username', $('.username').val(), 7);
                alert(arr.message);
                console.log(arr.code);

                if (arr.code != 0) {
                    console.log(123);
                    location.replace("../indexx.html");
                }
            }
        })
    }
});









function setCookie(key, val, iday) {
    //key:键名  val:键值  iday：失效时间
    //document.cookie = 'name=malin;expires=date;path=/';
    var now = new Date();
    now.setDate(now.getDate() + iday); //iday==5:5天后失效，-1：立即失效
    document.cookie = key + '=' + val + ';expires=' + now + ';path=/';
}

/*
	用户登陆
	get/post
		guestbook/index.php
			m : index
			a : login
			username : 要登陆的用户名
			password : 登陆的密码
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/
// $('.denglu_d').click(function () {
//     $.ajax({
//         type: 'post',
//         url: '../guestbook/index.php',
//         data: {
//             m: 'index',
//             a: 'login',
//             username: $('.username').val(),
//             password: $('.password').val(),
//         },
//         success: function (str) {
//             console.log(str);

//             var arr = JSON.parse(str);
//             alert(arr.message);
//             console.log(arr.message);

//             if (arr.code == 0) {
//                 console.log(123);
//                 location.replace("../indexx.html");
//             }
//         }
//     })
// });