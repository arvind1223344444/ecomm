<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include("config.php");

if(isset($_POST['user_id']))
{

    $usr_id=$_POST['user_id'];
$clt_dtl="select * from cart where user_id='$usr_id'";
$qst_clt_dtl=$db->query($clt_dtl);
$count = mysqli_num_rows($qst_clt_dtl);

if($count == 0)
{

echo json_encode(['status'=>true,"response"=>"Your cart is Empty",'order_status'=>'0']);
}
else
{
$ord_id="ORD".rand(9999,99999999);
while($clct_crt_dtl=$qst_clt_dtl->fetch_assoc())
{

$prdt_id=$clct_crt_dtl['product_id'];
$prdt_qty=$clct_crt_dtl['product_qty'];

$clt_prdt_dtl="select * from products where id = '$prdt_id'";
$qst_clt_prdt_dtl=$db->query($clt_prdt_dtl);
$clct_prdt_dtl=$qst_clt_prdt_dtl->fetch_assoc();

$prdt_neme= $clct_prdt_dtl['product_name'];
$prdt_price= $clct_prdt_dtl['price'];
$prdt_id = $clct_prdt_dtl['id'];

$ad_ord="insert into order_history set
user_id='$usr_id',
product_id='$prdt_id',
product_name='$prdt_neme',
price='$prdt_price',
quantity='$prdt_qty',
order_id='$ord_id'";
    
    $qst_ad_ord=$db->query($ad_ord);
   

}
if($qst_ad_ord)
{
    $dlt_usr_crt="delete from cart where user_id='$usr_id'";
    $qst_dlt_usr_crt=$db->query($dlt_usr_crt);
    if($qst_dlt_usr_crt)
    {
    echo json_encode(["status"=>true,"response"=>"Order placed successfully","order_status"=>"1"]);
}
}







}
}
else
{
    echo json_encode(["status"=>false,"response"=>"Wrong parameteres","add_status"=>"0"]);
}
   
?>