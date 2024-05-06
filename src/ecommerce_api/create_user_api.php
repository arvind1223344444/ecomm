<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 


include("config.php");

if(isset($_POST['name']))
{
$neme=$_POST['name'];
$emnl=$_POST['email'];
$passwrd=$_POST['password'];


$clt_dtl="select * from users where email='$emnl'";
$qst_clt_dtl=$db->query($clt_dtl);
$count=mysqli_num_rows($qst_clt_dtl);

if($count==0)
{
$ad_usr="insert into users set
name='$neme',
email='$emnl',
password='$passwrd'";

$qst_ad_usr=$db->query($ad_usr);
if($qst_ad_usr)
{
    echo json_encode(["status"=>true,"response"=>"User created successfully"]);
}
else
{
    echo json_encode(["status"=>false,"response"=>"Went something wrong"]);
    
}
}
else
{
    echo json_encode(["status"=>true,"response"=>"This email is already exist please try again"]);
}
}
else
{
    echo json_encode(["status"=>false,"response"=>"Wrong parameteres"]);
}
   
?>