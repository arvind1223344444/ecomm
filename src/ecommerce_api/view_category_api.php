<?php
include"config.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$all_category = array();
$job_sql="select * from category";
$result_sql=$db->query($job_sql);
while($fetch_sql=$result_sql->fetch_assoc()){
$id   =  $fetch_sql['id'];
$name  = $fetch_sql['category_name'];

$response['id'] = $id;
$response['category_name'] = $name;

//$response=$fetch_sql;
array_push($all_category,$response);




}
echo json_encode($all_category);

?>