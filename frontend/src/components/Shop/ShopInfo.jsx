import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../../server";
import styles from "../../styles/styles";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";

const ShopInfo = ({ isOwner }) => {
  const [data,setData] = useState({});
  const {products} = useSelector((state) => state.products);
  const [isLoading,setIsLoading] = useState(false);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    setIsLoading(true);
    axios.get(`${server}/shop/get-shop-info/${id}`).then((res) => {
     setData(res.data.shop);
     setIsLoading(false);
    }).catch((error) => {
      console.log(error);
      setIsLoading(false);
    })
  }, [])
  

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`,{
      withCredentials: true,
    });
    window.location.reload();
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings = products && products.reduce((acc,product) => acc + product.reviews.reduce((sum,review) => sum + review.rating, 0),0);

  const averageRating = totalRatings / totalReviewsLength || 0;

  return (
   <>
   {
    isLoading  ? (
      <Loader />
    ) : (
    <div style={{
      background: "linear-gradient(to right, #001F3F, #003F5F)",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }}>
      <div className="w-full py-5">
        <div className="w-full flex item-center justify-center">
          <img
            src={`${data.avatar?.url}`}
            alt=""
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
        </div>
        <h3 className="text-center py-2 text-[20px] text-cyan-50">{data.name}</h3>
        <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
          {data.description}
        </p>
      </div>
      <div className="p-3">
        <h5 className="font-[600] text-[#00FFFF]">Address</h5>
        <h4 className="text-[#FFFFFF]">{data.address}</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600] text-[#00FFFF]">Phone Number</h5>
        <h4 className="text-[#FFFFFF]">{data.phoneNumber}</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600] text-[#00FFFF]">Total Products</h5>
        <h4 className="text-[#FFFFFF]">{products && products.length}</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600] text-[#00FFFF]">Shop Ratings</h5>
        <h4 className="text-[#FFFFFF]">{averageRating}/5</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600] text-[#00FFFF]">Joined On</h5>
        <h4 className="text-[#FFFFFF]">{data?.createdAt?.slice(0, 10)}</h4>
      </div>
      {isOwner && (
        <div className="py-3 px-4">
           <Link to="/settings">
           <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
            <span className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700">Edit Shop</span>
          </div>
           </Link>
          <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
          onClick={logoutHandler}
          >
            <span className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700">Log Out</span>
          </div>
        </div>
      )}
    </div>
    )
   }
   </>
  );
};

export default ShopInfo;
