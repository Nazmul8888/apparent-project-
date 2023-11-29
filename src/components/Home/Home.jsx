import MakeAnnouncement from "../Dashboard/MakeAnnouncement";
import Map from "../Map/Map";
import ApartmentCard from "../Page/ApartmentCard/ApartmentCard";
import Banner from "./Banner/Banner";
import Green from "./Green/Green";


const Home = () => {
    return (
        <div >
            <MakeAnnouncement></MakeAnnouncement>
           <Banner></Banner>
           <ApartmentCard></ApartmentCard>
           <Green></Green>
           <Map></Map>
           
        </div>
    );
};

export default Home;