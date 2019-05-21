// 移入变色




$.ajax({
    type: "get",
    url: "../jQueryMagnifier/api/getimg.php", //获取图片url
    async: true,
    success: function (str) {
        // console.log(str); //[{"id":"1","url":"1.jpg&2.jpg&3.jpg&4.jpg&1.png&2.png&3.png&4.png"}]

        var arr = JSON.parse(str)[0].maximg.split('&'); //切割得到一组图片路径 ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '1.jpg', '2.png', '3.png', '4.png']


        //渲染数据到节点
        $res = arr.map(function (item) {
            return `<li>
                        <div class="small-img">
                            <img src="../images/xiangqing/c ${item}" />
                        </div>
                    </li>`;
        }).join('');

        $('.animation03').html($res);

        //放大镜插件使用：先渲染再调用插件
        var magnifierConfig = {
            magnifier: "#magnifier1", //最外层的大容器
            width: 400, //承载容器宽
            height: 400, //承载容器高
            moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
            zoom: 2.5 //缩放比例
        };

        var _magnifier = magnifier(magnifierConfig);
    }
});
var urlParam = window.location.search;
var ser1 = urlParam.split("?")[1];
var ser2 = ser1.split("=")[1];
// console.log(ser2);

$('.xiangqing_m_right').append(function () {

    $.ajax({
        type: 'post',
        url: '../api/detail.php',
        data: {
            dbsql: 'sheet1',
            id: ser2
        },
        success: str => {
            var arr = JSON.parse(str);
            xiangqing_shuju(arr);
        }
    });
});

function xiangqing_shuju(str) {
    var inner = str.map(function (item) {
        return `    
        <input style="display: none" class="img_i" type="text" value="${item.img}">
                    <div class="x1">
                        <h2 class="name_h2">${item.name}</h2>
                        <ul class="x_ul">
                            <li>
                                <span>卖点</span>
                                超感官全视屏、3D超声波指纹解锁、无线共享充电、前置双摄像头、骁龙855处理器
                            </li>
                            <li>
                                <span>赠品</span>
                                三星无线充电移动电源（颜色随机）+漫威智能手机壳*
                            </li>
                            <li>
                                <span>免息</span>
                                至高享12期免息分期
                            </li>
                            <li>
                                <span>推荐</span>
                                ${item.name} <a href="###">立即购买</a> ${item.name} 128G <a href="###">立即购买</a> ${item.name} 512G <a
                                    href="###">立即购买</a>
                            </li>
                            <li>
                                <span>推荐</span>
                                ${item.name}系列保护套，给您的爱机换新装 <a href="###">立即购买</a>
                            </li>
                            <li>
                                <span>说明</span>
                                漫威智能保护壳仅限购买S10+ 8G+512G、12G+1TB版本赠送，其他版本不参与本活动，赠品版本颜色随机
                            </li>
                        </ul>
                </div>
                <div class="x2 xx">
                    <i class="tb_left">颜色</i>
                    <ul class="x_ul_2">
                        <li>
                            <a href="###">
                                <i style="background:#000;"></i>
                                <span>炭晶黑</span>
                            </a>
                        </li>
                        <li>
                            <a href="###">
                                <i style="background:#b9d5de;"></i>
                                <span>炭晶黑</span>
                            </a>
                        </li>
                        <li>
                            <a href="###">
                                <i style="background:#277c7d;"></i>
                                <span>炭晶黑</span>
                            </a>
                        </li>
                        <li>
                            <a href="###">
                                <i style="background:#1d1b19;"></i>
                                <span>炭晶黑</span>
                            </a>
                        </li>
                        <li>
                            <a href="###">
                                <i style="background:#e7e6e3;"></i>
                                <span>炭晶黑</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="x3 xx">
                    <i class="tb_left">内存</i>
                    <ul>
                        <li><a href="###">
                                8GB RAM <br>
                                128GB ROM <br>
                                ￥6999.00
                            </a></li>
                        <li><a href="###">
                                8GB RAM <br>
                                512GB ROM <br>
                                ￥8699.00
                            </a></li>
                        <li><a href="###">
                                12GB RAM <br>
                                1TB ROM <br>
                                ￥10999.00
                            </a></li>
                    </ul>
                </div>
                <div class="x4 xx">
                    <i class="tb_left">版本</i>
                    <ul>
                        <li><a href="###">公开版</a></li>

                        <li><a href="###">移动4G+版</a></li>
                    </ul>
                </div>
                <div class="x5 xx">
                    <i class="tb_left">价格</i>
                    <ul>
                        <li>炭晶黑 + 8GB RAM 128GB ROM + 公开版 </li>
                        <div class="x5_right fr">
                            ￥<span class="jiage_span">${item.jiage}.00</span>
                        </div>
                    </ul>
                </div>
                <div class="x6">
                    <a class="shoppcar" href="###">加入购物车</a>
                    <a class="huanxin" href="###">以旧换新</a>
                </div>
        `
    }).join('');
    $('.xiangqing_m_right').html(inner);
    $('.x6').children().eq(0).hover(function () {
        $('.x6 a').addClass('yiru');
    }, function () {
        $('.x6 a').removeClass('yiru');
    });
    // 移入2
    $('.x6').children().eq(1).hover(function () {
        $('.x6 .huanxin').addClass('yiru2');
    }, function () {
        $('.x6 .huanxin').removeClass('yiru2');
    });
    $('.shoppcar').click(function () {
        $.ajax({
            type: 'post',
            url: '../1903xiangmu/api/gouwuche.php',
            data: {
                type: 'i',
                name: $('.name_h2').html(),
                img: $('.img_i').val(),
                price: $('.jiage_span').html(),
                id: 'id',
                nums: 'shuliang',
                count_price: 'zongjia'
            },
            success: str => {
                // console.log(str);
                // var arr = JSON.parse(str);
                // console.log(arr);

            }
        });

    });
}

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
//点击加入购物车数据库
// $('.shoppcar').click(function () {


// });