import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUsersBetweenLines } from "react-icons/fa6";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/users',{
                    headers:{
                        authorization: `Bearer ${localStorage.getItem('access token')}`
                    }
            });
            return res.data;
        }
    })
    const handelMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
       
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }
    return (
        <div>
           <div className="flex justify-evenly">
            <h1 className="text-3xl">All Users</h1>
            <h1 className="text-3xl">Total Users: {users.length}</h1>
            </div> 
            <div className="overflow-x-auto">
  <table className="table bg-red-500">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index)=><tr key={user._id}>
            <th>{index +1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
            { user.role === 'admin' ? 'Admin' : <button 
              onClick={()=>handelMakeAdmin(user)}
              className="btn  btn-lg  bg-orange-600 ">
            <FaUsersBetweenLines className='text-white text-2xl' /> 

              </button>}
            </td>
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;
