import { useEffect, useState } from "react";
import ApartmentItem from "../ApartmentItem/ApartmentItem";
import { Link } from "react-router-dom";


const ApartmentCard = () => {
    const [apartment, setApartment] = useState([]);

    useEffect(()=>{

        fetch('apartment.json')
        .then(res=> res.json())
        .then(data=> setApartment(data))

    },[])
    return (
        <div>
            <h1 className='font-semibold text-purple-700 text-1xl text-center'>WE MAKE THE ORDINARY...EXTRAORDINARY !</h1>
        <div className="grid grid-cols-3 gap-5">
            {
                apartment.map(item=> <ApartmentItem key={apartment._id} item={item}></ApartmentItem>)
            }
        </div>
        
        </div>
    );
};

export default ApartmentCard;