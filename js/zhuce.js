	/*
	验证用户名
	get
		guestbook/index.php
			m : index
			a : verifyUserName
			username : 要验证的用户名
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息具体返回信息
			}
    */
	// $('.username1').blur(function () {
	// 	$.ajax({
	// 		type: 'get',
	// 		url: '../guestbook/index.php',
	// 		data: {
	// 			m: 'index',
	// 			a: 'verifyUserName',
	// 			username: $('.username1').val()
	// 		},
	// 		success: function (str) {
	// 			console.log(str);
	// 			var arr = JSON.pare(str);
	// 			if (arr.code == 0) {
	// 				$('.sp1').css({
	// 					color: '#58bc58'
	// 				}).html('✔')
	// 			} else {
	// 				$('.sp1').css({
	// 					color: 'red'
	// 				}).html('✖')
	// 			}
	// 			console.log(arr.message);
	// 		}
	// 	})
	// });
	var isok = true;
	// 用户名
	$('.username1').blur(function () {
		var arr = $('.username1').val().trim();
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
	/*
	验证用户名
	post
		api/index1.php
			m : index
			val : 要验证的用户名
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息具体返回信息
			}
    */


	$('.username1').blur(function () {
		$.ajax({
			type: 'post',
			url: '../api/Username.php',
			data: {
				m: 'index',
				val: $('.username1').val()
			},
			success: str => {
				console.log(str);
				var arr = JSON.parse(str);
				if (arr.code == 2) {
					$('.sp1').eq(0).css({
						color: 'red'
					}).html('✖');
					alert(arr.message);
				}

			}
		})
	})

	// 密码
	$('.password1').blur(function () {
		var arr = $('.password1').val().trim();
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
	//手机号码
	$('.shouji').blur(function () {
		var arr = $('.shouji').val().trim();
		var reg = /^1[3-9]\d{9}$/;
		var res = reg.test(arr);
		if (arr) {
			if (res) {
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
				$('.sp1').eq(3).css({
					color: '#58bc58'
				}).html('✔');
				isok = true;
			} else {
				$('.sp1').eq(3).css({
					color: 'red'
				}).html('✖');
				isok = !isok;
			}
		} else {
			$('.sp1').eq(3).css({
				color: 'red'
			}).html('空');
			isok = !isok;
		}
	});
	/*
	注册
	post
		api/Register.php
			m : insert
      val : 要验证的用户名
      paw:密码
      num1：自己在全局定义一个空的null1
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息具体返回信息
			}
    */

	$('.zhuce_d').click(function () {

		if (isok) {
			$.ajax({
				type: 'post',
				url: '../api/Register.php',
				data: {
					m: 'insert',
					val: $('.username1').val(),
					paw: $('.password1').val(),
				},
				success: function (str) {
					console.log(str);

				}
			})
		} else {
			console.log(234);
		}
	});


	/*
	用户注册
	get/post
		guestbook/index.php
			m : index
			a : reg
			username : 要注册的用户名
			password : 注册的密码
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/

	// $('.zhuce_d').click(function () {
	// 	$.ajax({
	// 		type: 'post',
	// 		url: '../guestbook/index.php',
	// 		data: {
	// 			m: 'index',
	// 			a: 'reg',
	// 			username: $('.username1').val(),
	// 			password: $('.password1').val(),
	// 		},
	// 		success: function (str) {
	// 			console.log(str);

	// 			var arr = JSON.parse(str);
	// 			console.log(arr.code);
	// 			console.log(arr.message);
	// 			alert(arr.message);
	// 			if (arr.code == 0) {
	// 				console.log(123);
	// 				location.replace("./denglu.html");
	// 			}
	// 		}
	// 	})
	// });
	// $('.zhuce_d').click(function () {
	//     $.ajax({
	//         type: 'post',
	//         url: '../api/Username.php',
	//         data: {
	//             m: 'index',
	//             val: $('.username').val(),
	//             paw: $('.password').val(),
	//         },
	//         success: function (str) {
	//             console.log(str);

	//             var arr = JSON.parse(str);
	//             alert(arr.message);
	//             if (arr.message == '登录成功') {
	//                 console.log(123);
	//                 location.replace("./denglu.html");
	//             }
	//         }
	//     })
	// });