<?php

//从书库库中获得数据:
//1.连接数据库,参数二:数据库登陆账号,参数三:数据库名称
//2.判断数据库是否正确,如果不正确,调用die函数结束

$mysql = new mysqli("localhost","root","","lk");
if($mysql->connect_errno){
	die($mysql->connect_errno);
}
//2.将要查询的内容设置为utf8编码格式

$mysql->query("set name utf8");

//3.创建将要执行的sql语句
$sqlstr = "insert into user values(\"l\",\"123\",\"1.png\",\"mail\")";
//4.执行sql语句并返回执行的结果
$result = $mysql->query($sqlstr);
var_dump($result);


// . 拼接字符串
	// $mysql = new mysqli("localhost","root","","users");
	// if($mysql->connect_errno){
	// 	die($mysql->connect_errno);
	// }

	// $mysql->query("set name utf8");
	// $sqlstr = "select * from user where user_pwd = 4";
	// $result = $mysql->query($sqlstr);
	//  //var_dump($result);
	// //将查询出的数据放到数组中

	// //创建数组;
	// $myArray = array();
	// //fetch_assoc:查询每一条在result中的数据

	// while($record = $result->fetch_assoc()){
	// 	array_push($myArray,$record);
	// };
	// // $m = ["a"=>$myArray];
	// // print_r($myArray);
	// // [{
	// // 	user_id:""
	// // }]
	// echo json_encode($myArray);

?>