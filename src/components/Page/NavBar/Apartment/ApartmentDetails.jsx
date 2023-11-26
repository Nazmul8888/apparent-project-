import { Link } from "react-router-dom";


const ApartmentDetails = ({item}) => {
    const {image,title,Block,floor, size,rent,_id} = item;
    return (
        <div>
            
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
       
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Block: {Block}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Floor: {floor}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Size: {size}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rent: {rent}</p>
{/* 
        <Link to={`/details/${title}`}>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Agreement
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        </Link> */}
        <Link to={`/apartment/${title}`}>
           <button className=" btn btn-outline border-0 border-b-4 mt-4">Agreement</button>
           </Link>
        
        
    </div>
        </a>
        
        </div>
    );
};

export default ApartmentDetails;