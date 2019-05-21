<?php
   include 'connect.php';
   //接收数据
   $page=isset($_POST['page'])? $_POST['page']:'';
   $num=isset($_POST['num'])? $_POST['num'] :'';

   //写sql语句
   $index=($page-1)*$num;
   $sql="SELECT * FROM goodlist LIMIT $index,$num";

   //执行语句
   $res=$conn->query($sql);
//    print_r($res);
//得到结果集的内容部分
$arr = $res ->fetch_all(MYSQLI_ASSOC);//获取所有查询到的记录内容
	

   //查数据库
   $sql2='SELECT * FROM goodlist';
   //执行语句
   $res2=$conn->query($sql2);

   $lists=array(
       'data'=>$arr,   //查询一段数据
       'total'=>$res2->num_rows,   //总条数
       'page'=>$page,
       'num'=>$num

   );
echo json_encode($lists,JSON_UNESCAPED_UNICODE);

?>