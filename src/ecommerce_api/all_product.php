<?php
include"config.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$all_products = array();
$job_sql="select * from products";
$result_sql=$db->query($job_sql);
while($fetch_sql=$result_sql->fetch_assoc()){
$id   =  $fetch_sql['id'];
$ctg_id  = $fetch_sql['category_id'];
$prdt_neme  = $fetch_sql['product_name'];
$price  = $fetch_sql['price'];
$image  = $fetch_sql['image'];
$description  = $fetch_sql['description'];


$response['id'] = $id;
$response['category_id'] = $ctg_id;
$response['product_name'] = $prdt_neme;
$response['price'] = $price;
$response['image'] = $image;
$response['description'] = $description;

//$response=$fetch_sql;
array_push($all_products,$response);

}
echo json_encode($all_products);

?>