import Map from "../Map/Map";
import ApartmentCard from "../Page/ApartmentCard/ApartmentCard";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ApartmentCard></ApartmentCard>
           <Map></Map>
           
        </div>
    );
};

export default Home;