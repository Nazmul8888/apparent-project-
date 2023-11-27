import useAgreementCart from "../../../../Page/AgreementCart/AgreementCart";



const Agreement = () => {

const [,agreements] = useAgreementCart()
  const totalPrice = agreements.reduce((total, item)=> total + item.rent, 0)
  console.log(agreements);
    return (
        <div className="bg-red-100  text-center">

           <div className="flex justify-evenly">
            <h2 className="text-4xl ">Items: {agreements.length}</h2>
            <h2 className="text-4xl  ">Total Rent: {totalPrice}</h2>
            <button className="btn btn-primary">Pay Now</button>
            </div> 

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-bold">
        <th>
         #
        </th>
        <th className="text-bold">User Email</th>
        <th>Floor No</th>
        <th>Block Name</th>
        <th>Rent</th>
      </tr>
    </thead>
    <tbody>
      {
        agreements.map((item,index)=><tr key={item._id}>
          <th>
            {index}
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div>
                <div className="font-bold">{item.email}</div>
                <div className="text-sm opacity-50"></div>
              </div>
            </div>
          </td>
          <td>
          {item.floor}
            <p></p>
          </td>
          <td>{item.Block}</td>
          <td>{item.rent}</td>
          <th>
            <button className="btn btn-ghost btn-xs">Status</button>
          </th>
        </tr>)
      }
     
     
    </tbody>
    
    
  </table>
</div>
    </div>
        
    );
};

export default Agreement;