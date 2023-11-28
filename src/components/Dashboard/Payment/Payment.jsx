
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe('pk_test_51OEVndANtyZ5zA59xTlhlYc6G3n5A7ExSVTUMm1LKGyFMIIsQpiMv2JfuGgn1bWB2XJ4hvW7Uhr3DIUMpUNfythr00YLRFYPyS');
const Payment = () => {
    return (
        <div>
            
            <div>
               <Elements  stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
               </Elements>
            </div>
        </div>
    );
};

export default Payment;