import useAxiosPublic from "../useAuth/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";



const useAgreement = () => { 
const axiosPublic = useAxiosPublic();
    const {data: apartment = [], isPending: loading, } =  useQuery({
        queryKey: ['apartment'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/apartment');
            return res.data;
        }
    })


    return [apartment, loading]
}

export default useAgreement;