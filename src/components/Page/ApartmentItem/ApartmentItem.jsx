import { Link } from "react-router-dom";


const ApartmentItem = ({ item }) => {
    const {image, title, _id} = item;

    // const handelDetails = ()=>[
    //     // etc
    // ]
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <Link to={`/apartment/${title}`}>
           <button className=" btn btn-outline border-0 border-b-4 mt-4">Details</button>
           </Link>
            </div>
            </div>
       
    );
};

export default ApartmentItem;