<?php
    header("content-type:text/html;charset=utf-8");
    $dbsql=isset($_POST['dbsql']) ? $_POST['dbsql'] : '';
    $Id=isset($_POST['Id']) ? $_POST['Id'] : '';
    $num=isset($_POST['num']) ? $_POST['num'] : '';
    include "connect.php";
    $sql1="UPDATE $dbsql SET num=$num where productid=$Id";
    $res1=$conn->query($sql1);
?>