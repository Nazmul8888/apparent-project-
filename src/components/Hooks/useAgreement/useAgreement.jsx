
import { useEffect, useState } from "react";
const useAgreement = () => {
    // const axiosPublic = useAxiosPublic();
    const [agreement, setAgreement] = useState([])

    const [loading, setLoading] = useState(true);
   console.log(agreement);
    useEffect(() => {
        fetch('http://localhost:5000/apartment')

            .then(res => res.json())
            .then(data => {
                setAgreement(data);
                // setLoading(false);
            });
    }, [])

//     const {data: menu = [], isPending: loading, refetch} = useQuery({
//         queryKey: ['menu'], 
//         queryFn: async() =>{
//             const res = await axiosPublic.get('/menu');
//             return res.data;
//         }
//     })


    return [agreement, loading]
}

export default useAgreement;