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

$clt_crt_dtl="select * from order_history where user_id='$usr_id'";
$qst_clt_crt_dtl=$db->query($clt_crt_dtl);
while($clct_crt_prdt=$qst_clt_crt_dtl->fetch_assoc())
{

$prdt_id=$clct_crt_prdt['product_id'];

$clt_prd_dtl="select image from products where id='$prdt_id'";
$qst_clt_prd_dtl=$db->query($clt_prd_dtl);
$clct_prd_dtl=$qst_clt_prd_dtl->fetch_assoc();

$prdt_img= $clct_prd_dtl['image'];

$prdt_qty=$clct_crt_prdt['quantity'];
$prdt_neme=$clct_crt_prdt['product_name'];

$prdt_price=$clct_crt_prdt['price'];
$prdt_qty=$clct_crt_prdt['quantity'];
$order_id=$clct_crt_prdt['order_id'];
$order_date=$clct_crt_prdt['date'];


$response['product_id'] = $prdt_id;
$response['product_name'] = $prdt_neme;
$response['price'] = $prdt_price;
$response['image'] = $prdt_img;
$response['quantity']=$prdt_qty;
$response['order_id']=$order_id;
$response['order_date']=$order_date;

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