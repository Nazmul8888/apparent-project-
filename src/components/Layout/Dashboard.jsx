import { NavLink, Outlet, useAsyncError } from "react-router-dom";
import { FaGripVertical } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUsersBetweenLines } from "react-icons/fa6";
import useAgreementCart from "../Page/AgreementCart/AgreementCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [agreement] = useAgreementCart();
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-80 h-[800px]  bg-pink-600 font-bold ">
                <ul className="apartment p-4">
                    {
                        isAdmin ? <>
                        <li><NavLink to='/dashboard/adminProfile'>
                        <FaGripVertical />
                        Admin Profile </NavLink>
                    </li>
                    <li><NavLink to='/dashboard/manageMembers'>
                        <MdPayments />
                        Manage Members</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/makeAnnouncement'>
                        <MdWorkHistory />
                        Make Announcement</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/agreementRequest'>
                        <FaNewspaper />
                        Agreement Request</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/users'>
                    <FaUsersBetweenLines />
                       All Users</NavLink>
                    </li>
                        </>
                        :
                        <>
                        <li><NavLink to='/dashboard/agreement'>
                        <FaGripVertical />
                        Agreement</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/makePayment'>
                        <MdPayments />
                        Make Payment</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/paymentHistory'>
                        <MdWorkHistory />
                        Payment History</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/announcements'>
                        <FaNewspaper />
                        Announcements</NavLink>
                    </li>
                        </>
                    }
                    {/* shared nav links */}
                    

                    <div className="divider"></div>
                    <li><NavLink to='/'>
                        <FaHome />
                        CREDENCE</NavLink>
                    </li>

                    <li><NavLink to='/apartment'>
                        <FaSearch />
                        APARTMENT</NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;