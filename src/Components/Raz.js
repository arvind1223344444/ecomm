import React, { useState } from 'react';
//import { loadScript } from './utils'; // Helper function to load external scripts
import { loadScript } from './loadscript';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { order_place_api} from '../Api_path';
const Raz = (props) => {
  const [payment, setPayment] = useState(null);
const amnt=props.amount*100;
const users_id = localStorage.getItem('userid');
const navigate=useNavigate();
const orderplace = async()=>{
  const datas = {
    user_id:users_id
  }
const order_place = await axios.postForm(`${order_place_api}`,datas)
if(order_place.data.status===true && order_place.data.order_status==="1" )
{

toast.success(order_place.data.response); 
setTimeout(() => {
navigate('/my_order');
}, 5000);


}
else{
toast.warning(order_place.data.response); 

}
}



  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js'); // Load the Razorpay script dynamically


 





    
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_uyjwTZ4f2Hw97d', // Replace with your actual API key
      amount: `${amnt}`, // The amount in paise or the smallest currency unit
      currency: 'INR', // The currency code
      name: 'Aakash Enterprizes',
      description: 'Test Transaction',
      image: 'https://sabredge.com/images/sabre_edge_it.webp',
      handler: function (response) {
        // Handle the success callback
        orderplace();
        alert(response.razorpay_payment_id);

      },
      prefill: {
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
    };

    const paymentObject = new window.Razorpay(options);
    setPayment(paymentObject);

    paymentObject.open();
  };

  return (
    <div>
      <button type="button" class="btn btn-primary mt-5" onClick={displayRazorpay}>Pay Online</button>
    </div>
  );
};

export default Raz;
