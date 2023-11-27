import agreementCart from "../../../../Page/AgreementCart/agreementCart";


const Agreement = () => {
 const [agreements] = agreementCart();
  const totalPrice = agreements.reduce((total, item)=> total + item.price, 0)
    return (
        <div>

           <div>
            <h2 className="text-4xl ">items: {agreements.length}</h2>
            <h2 className="text-4xl ">Total Price: {totalPrice}</h2>
            <button className="btn btn-primary">Pay Now</button>
            </div> 
    </div>
        
    );
};

export default Agreement;