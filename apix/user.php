<?php
//连接数据库
include 'conn.php';

//总开关
$APItype = isset($_POST['APItype'])?$_POST['APItype']:'';

 //接收数据
 $name= isset($_POST['name']) ? $_POST['name'] :'';
 $psw=isset($_POST['psw'])? $_POST['psw']:'';

if($APItype=='uname'){ //验证用户名
    //写sql语句
    $sql="SELECT * FROM comm WHERE username='$name'";
    
    //执行语句
    $res=$conn->query($sql); //集合
    
    // var_dump ($res);
    
    if($res->num_rows){
        //已存在
        echo 0;
    }else{ 
        //可以使用
        echo 1;
    }
}else if($APItype=='reg'){
    $sql="INSERT INTO comm(username,psw) VALUES('$name','$psw')";
    $res=$conn->query($sql); //返回布尔值
    if($res){
        //注册成功
        echo 1;
    }else{
        //注册失败
        echo 0;
    }

}else if($APItype=='login'){
    $sql="SELECT * from comm WHERE username='$name' AND psw='$psw'";
    $res=$conn->query($sql);
    if($res->num_rows){
        //可以登录
        echo 1;
    }else{ 
        //用户名或密码错误
        echo 0;
    }
}

?>