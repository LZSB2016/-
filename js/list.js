$('.left_m1_4 ul').append(function () {
    var data = [{
        bg: '#000'
    }, {
        bg: '#0f5eb9'
    }, {
        bg: '#fff'
    }, {
        bg: '#ffc6f4'
    }, {
        bg: '#fb0b0c'
    }, {
        bg: '#2bb5a5'
    }, {
        bg: '#777'
    }, {
        bg: '#dbdbdb'
    }, {
        bg: '#e17e00'
    }, {
        bg: '#ffec14'
    }, {
        bg: '#e1dec4'
    }, {
        bg: '#5f4b41'
    }]

    var a = data.map(function (item) {
        return `<li>
                            <a href="###" style="background:${item.bg};"></a>
                        </li>`;
    })

    $('.left_m1_4 ul').html(a);

})



$('.main_m').append(function () {
    $.ajax({
        type: 'post',
        url: '../api/goodlist.php',
        data: {
            dbsql: 'sheet1'
        },
        success: str => {
            console.log(str);
            var arr = JSON.parse(str);
            console.log(arr.data.dbsql);
            shujux(arr.data);
        }
    })
});

function shujux(str) {
    var inner = str.map(function (item) {
        return `
                        <div data-id="${item.id}" class="main_m_x">
                            <div class="main_m_x1">
                                <img src="${item.img}" alt="">
                            </div>
                            <div class="main_m_x2">
                                <div class="main_m_x2_bottom">
                                    <h2><a href="###">${item.name}</a></h2>
                                    <p>￥${item.jiage}.00</p>
                                </div>
                                <div class="main_m_x2_top">
                                    <ul>
                                        <li style="background:#000"></li>
                                        <li style="background:#2bb5a5"></li>
                                        <li style="background:#ffec14"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        `;
    }).join('');
    $('.main_m').html(inner);

}
$('.main_m').on('click', '.main_m_x', function () {
    var arr = $(this).attr('data-id');
    console.log(arr);
    window.location.href = 'xiangqing.html?id=' + arr;
})

//开关
var isok = true;
//点击升降序
$('.pai').click(function () {

    if (isok) {
        //升序
        $.ajax({
            type: 'post',
            url: '../api/sort.php',
            data: {
                dbsql: 'sheet1',
                page: '1',
                num: '18',
                sort: 'ascend',
                demand: 'jiage'
            },
            success: str => {
                console.log(str);
                
                var arr = JSON.parse(str);
                shujux(arr.data);
            },
        });
    } else if (!isok) {
        //降序
        $.ajax({
            type: 'post',
            url: '../api/sort.php',
            data: {
                dbsql: 'sheet1',
                page: '1',
                num: '18',
                sort: 'descend',
                demand: 'jiage'
            },
            success: str => {
                var arr = JSON.parse(str);
                shujux(arr.data);
            }
        });
    }
    isok = !isok;
    console.log(isok);

});
if ($.cookie("username") != null) {
	// $("#abc").html("cookie不存在")
	$('.deg span').html('退出');
	console.log(123);
	$('.deg').addClass('tuichu');
	var isok = true;
	$('.tuichu').click(function () {
		if (isok) {
			$('a').attr('href', '###');
			alert('账户已退出');
			setCookie('username', '', -1);
			setCookie('uid', '', -1);
			$('.deg').removeClass('tuichu');
			$('.deg span').html('登录');
		} else {
			$('a').attr('href', '../html/denglu.html');
		}
		isok = !isok;
	})
};