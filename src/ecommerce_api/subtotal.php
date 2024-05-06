<?php
include"config.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


if(isset($_GET['user_id']))
{
    $usr_id= $_GET['user_id'];

$clt_crt_dtl="select * from cart where user_id='$usr_id'";
$qst_clt_crt_dtl=$db->query($clt_crt_dtl);
$prdt_sbtotal = 0;
while($clct_crt_prdt=$qst_clt_crt_dtl->fetch_assoc())
{

$prdt_id=$clct_crt_prdt['product_id'];
$prdt_qty=$clct_crt_prdt['product_qty'];
$cart_id=$clct_crt_prdt['id'];
    $job_sql="select * from products where `id`='$prdt_id'";
$result_sql=$db->query($job_sql);
$fetch_sql=$result_sql->fetch_assoc();


$price  = $fetch_sql['price'];


$prd_totoal=$price*$prdt_qty;
$prdt_sbtotal+=$prd_totoal;

//$response=$fetch_sql;


}
echo json_encode(["status"=>true , "subtotal"=>"$prdt_sbtotal"]);

}
else
{
    echo json_encode(['status'=>false,'response'=>"Wrong parameteres"]);
}

?>