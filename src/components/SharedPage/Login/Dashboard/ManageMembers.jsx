import Swal from "sweetalert2";
import useAgreement from "../../../Hooks/useAgreement/useAgreement";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageMembers = () => {
    const [agreement, refetch] = useAgreement();
    const axiosSecure = useAxiosSecure();
    const handelDelate = item=>{
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
          if (result.isConfirmed) {
              const res = await axiosSecure.delete(`/apartment/${item._id}`);
              // console.log(res.data)
              if(res.data.deletedCount > 0){
                  refetch();
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `${item.title} has been deleted`,
                      showConfirmButton: false,
                      timer: 1500
                    });
              }
         
          }
        });
  
    }
    return (
        <div>
            <h1 className="text-2xl flex justify-center">Manage Members</h1>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Title</th>
        <th>Floor</th>
        <th>BlocK No</th>
        <th>Rent</th>
        <th>size</th>
        <th>Remove</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        agreement.map((item, index)=><tr key={item._id}>
            <th>
         {index +1 }
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              {/* <div className="font-bold">Hart Hagerty</div> */}
              <div className="text-sm opacity-50"></div>
            </div>
          </div>
        </td>
        <td>
        {item.title}
          
        </td>
        <td>{item.floor}</td>
        <td>{item.Block}</td>
        <th>
          {item.rent}
        </th>
        <th>
          {item.size}
        </th>
        <th>
        <button 
              onClick={()=>handelDelate(item._id)}
              className="btn btn-ghost btn-lg">
            <MdDelete className='text-red-600'/>

              </button>
        </th>
        
          </tr>
          
          
          )
      }
      
      
  
      
    </tbody>
    
    
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageMembers;