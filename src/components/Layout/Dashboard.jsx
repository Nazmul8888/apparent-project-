import { NavLink, Outlet } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { FaNewspaper } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-green-500">
                <ul className="apartment p-4">
                    <li><NavLink to='/dashboard/profile'>
                        <ImProfile />
                        Profile</NavLink></li>
                    <li><NavLink to='/dashboard/makePayment'>
                    <MdPayments />
                        Make Payment</NavLink></li>
                    <li><NavLink to='/dashboard/paymentHistory'>
                    {/* <MdWorkHistory /> */}
                        Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/announcements'>
                    <FaNewspaper />
                        Announcements</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;