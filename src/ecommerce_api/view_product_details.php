<?php
include"config.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


if(isset($_GET['id']))
{

$iid=$_GET['id'];

$job_sql="select * from products where id='$iid'";
$result_sql=$db->query($job_sql);
$fetch_sql=$result_sql->fetch_assoc();
$id   =  $fetch_sql['id'];
$ctg_id  = $fetch_sql['category_id'];
$prdt_neme  = $fetch_sql['product_name'];
$price  = $fetch_sql['price'];
$image  = $fetch_sql['image'];
$description  = $fetch_sql['description'];


echo json_encode(['status'=>true,'category_id'=>"$ctg_id",'product_name'=>"$prdt_neme",'price'=>"$price",'category_id'=>"$ctg_id","image"=>"$image","description"=>"$description","product_id"=>"$id"]);
}
else
{
    echo json_encode(['status'=>false,'response'=>"Invalid parameteres"]);
}
?>