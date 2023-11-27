import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAuth/useAxiosPublic";


const agreementCart = () => {
  // const axiosSecure = useAxiosSecure();
  const axiosSecure = useAxiosSecure();
  const {user,loading} = useContext(AuthContext);
  console.log(user,loading);
  const { refetch, data: agreements = []} = useQuery({
    enabled:!loading,
    queryKey: [ user?.email,'agreements'],
    queryFn: async()=>{
      
      const res = await useAxiosPublic.get(`/agreements/${user?.email}`);
      
      return res.data
    }
  })
  return [refetch,agreements]
  
};

export default agreementCart;