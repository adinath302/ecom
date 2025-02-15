import React from "react";
import { FaStar } from "react-icons/fa6";
import img1 from "../../assets/Shirt/img1.png";
import img2 from "../../assets/Shirt/img2.png";
import img3 from "../../assets/Shirt/img3.png";
const TopProducts = ({ handleOrderPopup }) => {
  const ProductsData = [
    {
      id: 1,
      img: img1,
      title: "Casual Wear",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam minus debitis voluptas dicta eius consequatur odit fuga! Explicabo",
    },
    {
      id: 2,
      img: img2,
      title: "Printed shirt",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam minus debitis voluptas dicta eius consequatur odit fuga! Explicabo",
    },
    {
      id: 3,
      img: img3,
      title: "Women shirt",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam minus debitis voluptas dicta eius consequatur odit fuga! Explicabo",
    },
  ];

  return (
    <div>
      <div className="container ">
        {/* Header Seaction */}
        <div className="text-left mb-24 ">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold ">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Ea eveniet
            consequuntur et!
          </p>
        </div>
        {/* Body Seaction */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-400 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-150 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1 ">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text:sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
