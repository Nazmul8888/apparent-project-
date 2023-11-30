import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAgreement from "../../../Hooks/useAgreement/useAgreement";




const ApartmentDetails = ({item}) => {
    const {imageRoom,title,Block,floor, size,rent,_id} = item;

    const {user} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useAgreement();

    const handelAddAgreement= () =>{
        if(user && user.email){
            const cartItem ={
                apartmentId: _id,
                email: user.email,
                title,
                floor,
                rent,
                Block,
                

            }
            axiosSecure.post('/agreements',cartItem)
            .then(res=>{
             
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${title} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch();
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:{from:location}});
                }
              });
        }
    }
    return (
        <div>
            
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
       
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imageRoom} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Block: {Block}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Floor: {floor}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Size: {size}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rent: {rent}</p>
      
           <button onClick={handelAddAgreement} className=" btn btn-outline border-0 border-b-4 mt-4">Agreement</button>
           
        
        
    </div>
        </a>
        
        </div>
    );
};

export default ApartmentDetails;