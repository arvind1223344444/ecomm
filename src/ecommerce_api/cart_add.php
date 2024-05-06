<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 


include("config.php");

if(isset($_POST['user_id']))
{


$prdt_id=$_POST['product_id'];

$usr_id=$_POST['user_id'];


$clt_dtl="select * from cart where product_id='$prdt_id' and user_id='$usr_id'";
$qst_clt_dtl=$db->query($clt_dtl);
$count = mysqli_num_rows($qst_clt_dtl);

if($count == 0)
{


$ad_usr="insert into cart set
product_id='$prdt_id',
product_qty='1',
user_id='$usr_id'";

$qst_ad_usr=$db->query($ad_usr);
if($qst_ad_usr)
{
    echo json_encode(["status"=>true,"response"=>"Product add to cart successfully","add_status"=>"1"]);
}
}
else
{
    echo json_encode(["status"=>true,"response"=>"This product is already in your cart","add_status"=>"0"]);
}
}
else
{
    echo json_encode(["status"=>false,"response"=>"Wrong parameteres","add_status"=>"0"]);
}
   
?>