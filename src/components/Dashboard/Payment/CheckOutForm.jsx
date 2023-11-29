import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth/useAuth";
import useAgreementCart from "../../Page/AgreementCart/AgreementCart";

const CheckOutForm = () => {
    const [error, setError] = useState();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
   const axiosSecure = useAxiosSecure();
   const [,agreements] = useAgreementCart();
    const navigate = useNavigate();
    const totalRent = agreements.reduce((total, item)=> total + item.rent, 0)


    useEffect(()=>{

      if(totalRent > 0){
        axiosSecure.post('/create-payment-intent',{Rent: totalRent})
      .then(res=>{
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
      
      }
    },[axiosSecure, totalRent])

  
    const handleSubmit = async (event)=>{
        event.preventDefault();
   
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }
    
          const card = elements.getElement(CardElement);
          if (card == null) {
            return;
          }
    
    
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
  
          if (error) {
            console.log('error', error);
            setError(error.message)
          } else {
            console.log('[PaymentMethod]',paymentMethod);
            setError('')
          }

          // confirm payment method 

          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
              card: card,
              billing_details:{
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'
              }
            }
          })
          if(confirmError){
            console.log('confirm error')
          }
          else{
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === "succeeded"){
              console.log('transaction id', paymentIntent.id);
              setTransactionId(paymentIntent.id);

              // now save payment in database

              const payment = {
                email: user.email,
                price: totalRent,
                transactionId: paymentIntent.id,
                date: new Date(),
                cartIds: agreements.map(item => item._id),
                apartmentId: agreements.map(item => item.apartmentId),
                    status: 'pending'
              }
            const res = await axiosSecure.post('/payments', payment)
              console.log('payment save', res.data)
              refetch();
              if(res.data?. paymentResult.insertedId){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Thank you for payment",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/dashboard/paymentHistory')

              }
            }
          }
        }

    return (
       <form className="py-20 p-10 ml-20 gap-10 bg-[#FFC5C5] " onSubmit={handleSubmit}>
        <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#B15EFF',
              '::placeholder': {
                color: '#b22929',
              },
            },
            invalid: {
              color: '#b22929',
            },
          },
        }}
      />
      <button className="btn btn-info bg-[#F86F03]  text-white " type="submit" >
        PAY NOW
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && <p className="text-green-600">your transaction id: {transactionId}</p>}
       </form>
    );
};

export default CheckOutForm;