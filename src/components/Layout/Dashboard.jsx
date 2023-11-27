import { NavLink, Outlet, useAsyncError } from "react-router-dom";
import { FaGripVertical } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import useAgreementCart from "../Page/AgreementCart/AgreementCart";

const Dashboard = () => {
    const [agreement] = useAgreementCart();
    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-green-500">
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
                    <div className="divider divider-horizontal"></div>


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