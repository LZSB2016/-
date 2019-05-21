/*购物车*/
$(function () {
    $("#buyBtn").click(function () {
        //获取商品id
        var goodId = $("#pro-id").val();
        //alert($pro_id);
        //获取商品名
        var goodName = $("#pro-name").val();
        //获取商品规格
        var goodGuige = $("#pro-guige").val();
        //获取一般价格
        var goodOrd = $("#pro-mr").val();
        //获取商品价格
        var goodPrice = parseInt($("#pro-price").val());
        //获取商品数量
        var goodNum = parseInt($("#buyNum").val());
        //获取cookie中的信息
        //如果cookie中没有信息会返回一个undefined，所需的是一个字符串类型的数据，所以将它转成一个“”空字符串，保持数据类型一致
        var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
        //将字符串转为对象
        var cartObj = convertCartStrToObj(cartStr);
        //判断该商品是否已经在购物车中存在
        if (goodId in cartObj) {
            //如果已经存在，那么该商品数据增加
            cartObj[goodId].num += goodNum;
        } else {
            //如果不存在，那么将新商品的信息存入
            cartObj[goodId] = {
                "name": goodName,
                "guige": goodGuige,
                "ord": goodOrd,
                "price": goodPrice,
                "num": goodNum
            };
        }
        //将新的购物车信息存回cookie
        //将对象转为字符串
        cartStr = convertObjToCartStr(cartObj);
        alert(cartStr);
        //存入cookie
        //document.cookie = "key=value"
        $.cookie("cart", cartStr, {
            expires: 7,
            path: "/"
        });

    })

    //字符串转对象
    function convertCartStrToObj(cartStr) {
        //如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
        if (!cartStr) {
            return {};
        }
        var goods = cartStr.split(":");
        var obj = {};
        for (var i = 0; i < goods.length; i++) {
            var data = goods[i].split(",");
            //以商品的id为键，商品的其他信息为值，这个值也设计为一个对象
            obj[data[0]] = {
                "name": data[1],
                "guige": data[2],
                "ord": data[3],
                "price": parseFloat(data[4]),
                "num": parseInt(data[5])
            }
        }
        return obj;
    }

    //对象转字符串
    function convertObjToCartStr(obj) {
        var cartStr = "";
        //变量对象
        for (var id in obj) {
            if (cartStr) {
                cartStr += ":";
            }
            cartStr += id + "," + obj[id].name + "," + obj[id].guige + "," + obj[id].ord + "," + obj[id].price + "," + obj[id].num;
        }
        return cartStr;
    }
})