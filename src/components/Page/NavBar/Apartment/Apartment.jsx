import {useEffect,  useState } from "react";
import ApartmentDetails from "./ApartmentDetails";


const Apartment = () => {
    const [newApartment, setNewApartment] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/apartment')
        .then(res=> res.json())
        .then(data=> setNewApartment(data))
        
    },[])
    return (
        <div>
        <div className="grid grid-cols-3 gap-5">
         {
                newApartment.map(item=> <ApartmentDetails key={newApartment._id} item={item}></ApartmentDetails>)
            }
        </div>
       
        </div>

    );
};

export default Apartment;