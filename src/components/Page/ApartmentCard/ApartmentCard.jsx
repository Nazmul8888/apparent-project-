import { useEffect, useState } from "react";
import ApartmentItem from "../ApartmentItem/ApartmentItem";



const ApartmentCard = () => {
    const [apartment, setApartment] = useState([]);

    useEffect(()=>{

        fetch('https://b8a12-server-side-nazmul8888.vercel.app/apartment')
        .then(res=> res.json())
        .then(data=> setApartment(data))

    },[])
    return (
        <div>
            <h1 className='font-bold text-red-600 text-4xl text-center'>WE MAKE THE ORDINARY...EXTRAORDINARY !</h1>
        <div className="grid grid-cols-3 gap-5">
            {
                apartment.map(item=> <ApartmentItem key={apartment._id} item={item}></ApartmentItem>)
            }
        </div>
        
        </div>
    );
};

export default ApartmentCard;