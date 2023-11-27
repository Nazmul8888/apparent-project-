import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const useAgreementCart = () => {
  const axiosSecure = useAxiosSecure();
  
  const {user,loading} = useContext(AuthContext);

  // console.log(user,loading);

  const { refetch, data: agreements = []} = useQuery({
    enabled:!!user?.email,
    queryKey: [ user?.email,'agreements'],
    queryFn: async()=>{
      
      const res = await axiosSecure.get(`/agreements/${user?.email}`);
      
      return res.data
    }
  })
  return [refetch,agreements]
  
};

export default useAgreementCart;