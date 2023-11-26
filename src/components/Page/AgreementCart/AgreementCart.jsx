import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth/useAuth";


const AgreementCart = ({item}) => {
    const {floor,Block,apartNumber,rent} = item;
    const {user} = useAuth();

    const handelAddToAgreement= agreement =>{
        if(user && user.email){
            // this  
        }
        else{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });
        }
    }
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
         
            <p className=" absolute right-0 text-white rounded-lg bg-red-600 hover:bg-pink-600 mt-4 mr-4 px-4">$ {floor}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{Block}</h2>
                <p>{apartNumber}</p>
                <p>{rent}</p>
                <div className="card-actions justify-end">
                <button onClick={handelAddToAgreement} className=" btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Add Cart</button>
                </div>
            </div>
        </div> 
        </div>
    );
};

export default AgreementCart;