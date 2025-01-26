import React from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const DashboardSideBar = ({ active }) => {
  return (
    <div
      className="w-full rounded-[10px] p-4 pt-8"
      style={{
        background: "linear-gradient(to left, #001F3F,rgb(0, 25, 37))",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="w-full h-[90vh] bg-cyan shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
        {/* single item */}
        <div className="w-full flex items-center p-4">
          <Link to="/dashboard" className="w-full flex items-center">
            <RxDashboard
              size={30}
              color={`${active === 1 ? "cyan" : "white"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                active === 1 ? "text-[cyan]" : "text-[#FFFFFF]"
              }`}
            >
              Dashboard
            </h5>
          </Link>
        </div>
  
        <div className="w-full flex items-center p-4">
          <Link to="/dashboard-orders" className="w-full flex items-center">
            <FiShoppingBag
              size={30}
              color={`${active === 2 ? "cyan" : "#FFFFFF"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                active === 2 ? "text-[cyan]" : "text-[#FFFFFF]"
              }`}
            >
              All Orders
            </h5>
          </Link>
        </div>
  
        <div className="w-full flex items-center p-4">
          <Link to="/dashboard-products" className="w-full flex items-center">
            <FiPackage size={30} color={`${active === 3 ? "cyan" : "#FFFFFF"}`} />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                active === 3 ? "text-[cyan]" : "text-[#FFFFFF]"
              }`}
            >
              All Products
            </h5>
          </Link>
        </div>
  
        <div className="w-full flex items-center p-4">
          <Link
            to="/dashboard-create-product"
            className="w-full flex items-center"
          >
            <AiOutlineFolderAdd
              size={30}
              color={`${active === 4 ? "cyan" : "#FFFFFF"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                active === 4 ? "text-[cyan]" : "text-[#FFFFFF]"
              }`}
            >
              Create Product
            </h5>
          </Link>
        </div>
  
        <div className="w-full flex items-center p-4">
          <Link to="/dashboard-events" className="w-full flex items-center">
            <MdOutlineLocalOffer
              size={30}
              color={`${active === 5 ? "cyan" : "#FFFFFF"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                active === 5 ? "text-[cyan]" : "text-[#FFFFFF]"
              }`}
            >
              All Events
            </h5>
          </Link>
        </div>
  
        <div className="w-full flex items-center p-4">
          <Link to="/dashboard-create-event" className="w-full flex items-center">
            <VscNewFile
              size={30}
              color={`${active === 6 ? "cyan" : "#FFFFFF"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                active === 6 ? "text-[cyan]" : "text-[#FFFFFF]"
              }`}
            >
              Create Event
            </h5>
          </Link>
        </div>
  
        <div className="w-full flex items-center p-4">
          <Link
            to="/dashboard-withdraw-money"
            className="w-full flex items-center"
          >
            <CiMoneyBill
              size={30}
              color={`${active === 7 ? "cyan" : "#FFFFFF"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                active === 7 ? "text-[cyan]" : "text-[#FFFFFF]"
              }`}
            >
              Withdraw Money
            </h5>
          </Link>
        </div>
  
        <div className="w-full flex items-center p-4">
          <Link to="/dashboard-coupouns" className="w-full flex items-center">
            <AiOutlineGift
              size={30}
              color={`${active === 9 ? "cyan" : "#FFFFFF"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                active === 9 ? "text-[cyan]" : "text-[#FFFFFF]"
              }`}
            >
              Discount Codes
            </h5>
          </Link>
        </div>
  
        <div className="w-full flex items-center p-4">
          <Link to="/dashboard-refunds" className="w-full flex items-center">
            <HiOutlineReceiptRefund
              size={30}
              color={`${active === 10 ? "cyan" : "#FFFFFF"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                active === 10 ? "text-[cyan]" : "text-[#FFFFFF]"
              }`}
            >
              Refunds
            </h5>
          </Link>
        </div>
  
        <div className="w-full flex items-center p-4">
          <Link to="/settings" className="w-full flex items-center">
            <CiSettings
              size={30}
              color={`${active === 11 ? "cyan" : "#FFFFFF"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                active === 11 ? "text-[cyan]" : "text-[#FFFFFF]"
              }`}
            >
              Settings
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};  

export default DashboardSideBar;
