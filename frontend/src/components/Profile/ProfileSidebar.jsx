import React from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlinePassword,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div

      className="w-full h-[90vh] bg-cyan shadow-sm  sticky top-0 left-0 z-10 rounded-[10px] p-4 pt-8 "

      style={{
        background: "linear-gradient(to right,rgb(0, 17, 34),rgb(1, 16, 24))",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="flex items-center cursor-pointer w-full mb-8 text-cyan"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "cyan" : "white"} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[cyan]" : "text-[white]"
          } 800px:block hidden`}
        >
          Profile
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "cyan" : "white"} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[cyan]" : "text-[white]"
          } 800px:block hidden`}
        >
          Orders
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "cyan" : "white"} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[cyan]" : "text-[white]"
          } 800px:block hidden`}
        >
          Refunds
        </span>
      </div>


      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "cyan" : "white"} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[cyan]" : "text-[white]"
          } 800px:block hidden`}
        >
          Track Order
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6)}
      >
        <RiLockPasswordLine size={20} color={active === 6 ? "cyan" : "white"} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[cyan]" : "text-[white]"
          } 800px:block hidden`}
        >
          Change Password
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "cyan" : "white"} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[cyan]" : "text-[white]"
          } 800px:block hidden`}
        >
          Address
        </span>
      </div>

      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={20}
              color={active === 8 ? "red" : "white"}
            />
            <span
              className={`pl-3 ${
                active === 8 ? "text-[red]" : "text-[white]"
              } 800px:block hidden`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}
      <div
        className="single_item flex items-center cursor-pointer w-full mb-8"
        onClick={logoutHandler}
      >
        <AiOutlineLogin size={20} color={active === 8 ? "red" : "red"} />
        <span
          className={`pl-3 ${
            active === 8 ? "text-[cyan]" : "text-[red]"
          } 800px:block hidden`}
        >
          Log out
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
