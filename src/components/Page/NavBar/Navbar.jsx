import { Link } from 'react-router-dom';
import logoImg from '../../../assets/banner/logo.jpeg'
// import { useContext } from '../../Providers/AuthProvider';
// import { AuthContext } from '../../Providers/AuthProvider';
import useAuth from '../../Hooks/useAuth/useAuth';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const {user,logOut} = useAuth();

    const handelLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))

    }
    const navLinks = <>
        <li><Link className='font-extrabold text-purple-700 text-1xl' to='/'>CREDENCE</Link></li>
        <li><Link className='font-extrabold text-green-700 text-1xl' 
        to='/apartment'>APARTMENT</Link></li>
       

    </>
    const dropLinks = <>

        <li><Link to='profile'>Profile</Link></li>
        <li><Link to='dashboard'>Dashboard</Link></li>
        
        <li><Link to='signUp'>Sign Up</Link></li>
        <li>
            <Link to='/dashboard/profile'>
            <button className="btn">
                <FaShoppingCart className="mr-2"></FaShoppingCart>
                <div className="badge badge-secondary"></div>
                </button>
            </Link>
        </li>


        {
            user ? <>
            <button onClick={handelLogOut} className="btn btn-ghost">Log Out</button>
            </> :  <>
            <li><Link to='login'>Login</Link></li>

            </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}

                    </ul>
                </div>
                <img className='w-[85px] h-[85px]' src={logoImg} alt="" />
                <a className="btn btn-ghost font-extrabold text-[#00FFFF] text-2xl">CREDENCE</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/zNchkFn/Whats-App-Image-2023-11-22-at-2-47-13-PM.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {/* <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Dashboard</a></li>
        <li><a>Login</a></li>
        <li><a>Logout</a></li> */}
                    {dropLinks}

                </ul>
            </div>

        </div>
    );
};

export default Navbar;