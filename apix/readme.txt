数据库名称：

表1 users
api/users.php

用户名验证：
传参：(POST)
APItype=uname
name 用户名
返回：
0 存在，已存在
1 不存在，可以使用
0,1为字符串


注册：
传参：(POST)
APItype=reg
name 用户名
psw 密码
返回：
0 注册失败
1 注册成功
0,1为字符串


登录：
传参：(POST)
APItype=login
name 用户名
psw 密码
返回：
0 不存在，登录失败
1 存在，登录成功
0,1为字符串










排序一定要int 不能varther

表2 goodlist
api/goodlist.php

列表页数据输出：
传参：(POST)
APItype=goodlist
page 第几页
qty 每页多少数据
返回：
datalist{
    list->第page页的数据
    page->第几页
    qty->每页多少数据
}

列表页价格降序输出：
传参：(POST)
APItype=goodlistdown
page 第几页
qty 每页多少数据
返回：
datalist{
    list->第page页的数据
    page->第几页
    qty->每页多少数据
}

列表页价格升序输出：
传参：(POST)
APItype=goodlistup
page 第几页
qty 每页多少数据
返回：
datalist{
    list->第page页的数据
    page->第几页
    qty->每页多少数据
}

列表页人气降序输出：
传参：(POST)
APItype=goodlisthotdown
page 第几页
qty 每页多少数据
返回：
datalist{
    list->第page页的数据
    total->总数据数
    page->第几页
    qty->每页多少数据
}

列表页人气升序输出：
传参：(POST)
APItype=goodlisthotup
page 第几页
qty 每页多少数据
返回：
datalist{
    list->第page页的数据
    total->总数据数
    page->第几页
    qty->每页多少数据
}

查找相应id在详情页输出：
传参：(POST)
APItype=goodlistDetail
id 商品id
返回：
相应id的数据 可渲染
1 数据不存在





表3 ordercar
api/ordercar.php
步骤：
    1.点击加入购物车，先查询新建的订单表，看是否有这个id
    2.然后更新订单表
传参: (get)
参数：
    num 数量
    gid 商品id

修改：
 $gname $gprice $gimg1
 返回：
 1 插入成功
 0 插入失败







表4 paging
api/paging.php

分页:
传参：(POST)
page 第几页
num  一页多少条数据
返回：
data->一组数据
total->总页数
page-> 页数

