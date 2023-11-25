
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Map = () => {
    const defaultProps = {
        center: {
          lat: 23.707310,
          lng: 90.415482
        },
        zoom: 11
      };
    return (
     <div className='py-10 flex justify-between'>
      <div>
        <h1 className='text-2xl text-red-400 font-bold text-center'>Footprints</h1>
        <p className='text-1xl font-medium  text-black'>Credence Housing Limited has an illustrious <br /> history of delivering exceptional property developments throughout Dhaka. <br /> From the prestigious neighborhoods of Banani, Gulshan, Dhanmondi, and Lalmatia <br /> to the vibrant locales of Kalabagan, Khilgaon, Shyamoli, Uttara and Mohammadpur,<br /> our portfolio spans across the citys most sought-after <br /> areas, including Adabor, Green Road, North Road, Humayun Road, Babar <br /> Road, Tejgaon, Badda, Siddheswari, and Mirpur.</p>
      </div>
           
    <div style={{ height: '40vh', width: '70%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key:"" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      />
    </GoogleMapReact>
  </div>
     </div>
);
}

export default Map;