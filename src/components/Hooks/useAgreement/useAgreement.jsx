import useAxiosPublic from "../useAuth/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
const useAgreement = () => {
    // const axiosPublic = useAxiosPublic();
    // const [agreement, setAgreement] = useState([])
    const axiosPublic = useAxiosPublic();

    // const [ setLoading] = useState(true);
   
    // useEffect(() => {
    //     fetch('http://localhost:5000/apartment')

    //         .then(res => res.json())
    //         .then(data => {
    //             setAgreement(data);
    //             // setLoading(false);
    //         });
    // }, [])

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