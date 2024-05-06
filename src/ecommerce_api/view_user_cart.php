<?php
include"config.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$all_products = array();


if(isset($_GET['user_id']))
{
    $usr_id= $_GET['user_id'];

$clt_crt_dtl="select * from cart where user_id='$usr_id'";
$qst_clt_crt_dtl=$db->query($clt_crt_dtl);
while($clct_crt_prdt=$qst_clt_crt_dtl->fetch_assoc())
{

$prdt_id=$clct_crt_prdt['product_id'];
$prdt_qty=$clct_crt_prdt['product_qty'];
$cart_id=$clct_crt_prdt['id'];
    $job_sql="select * from products where `id`='$prdt_id'";
$result_sql=$db->query($job_sql);
$fetch_sql=$result_sql->fetch_assoc();
$id =$fetch_sql['id'];
$ctg_id  = $fetch_sql['category_id'];
$prdt_neme  = $fetch_sql['product_name'];
$price  = $fetch_sql['price'];
$image  = $fetch_sql['image'];
$description  = $fetch_sql['description'];


$response['product_id'] = $id;
$response['cart_id'] = $cart_id;
$response['product_name'] = $prdt_neme;
$response['price'] = $price;
$response['image'] = $image;
$response['quantity']=$prdt_qty;

//$response=$fetch_sql;
array_push($all_products,$response);

}
echo json_encode($all_products);

}
else
{
    echo json_encode(['status'=>false,'response'=>"Wrong parameteres"]);
}

?>