import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (data) => {
    const isItemExists = cart && cart.find((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  return (
    <div
      className={`w-full block bg-black bg-opacity-40 border-2 border-cyan-900 rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-4 relative`}
    >
      {/* Image Section */}
      <div
        className="w-[150px] h-[150px] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mr-6"
        style={{ aspectRatio: "1/1" }}
      >
        <img
          src={`${data.images[0]?.url}`}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col justify-center pr-[20px]">
        <h2 className={`${styles.productTitle}`}>{data.name}</h2>
        <p className="text-gray-400">{data.description}</p>
        <div className="flex py-2 justify-between"></div>
        <CountDown data={data} />
        <br />
      </div>
    </div>
  );
};

export default EventCard;
