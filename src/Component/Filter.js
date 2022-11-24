import React from "react";
import { useState } from "react";
import { data } from "../Data/Data";
const Filter = () => {
      const [food, setFood] = useState(data);
      const filterType = (category) => {
            setFood(
                  data.filter ((item) => item.category === category)
            )
      }
      const filterPrice = (price) => {
            setFood(
                  data.filter((item) => item.price === price)
            )
      }
  return (
    <div className="max-w[1640px] mx-auto px-4 py-3">
      <h1 className="text-orange-600 text-3xl mb-4 text-center">
        top rated menu
      </h1>
      {/**filter */}
      <div className="flex flex-col md:flex-row justify-between ">
        {/**filter type */}
        <div>
          <p className="text-xl mb-2">filter type</p>
          <div className="">
            <button onClick={() => setFood(data)}  className="border-orange-600 p-2 mr-1 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button onClick= {() =>filterType('burger') } className="border-orange-600 p-2 mr-1 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white">
              burger
            </button>
            <button onClick= {() =>filterType('pizza') } className="border-orange-600 p-2 mr-1 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white">
              pizza
            </button>
            <button onClick= {() =>filterType('salad') } className="border-orange-600 p-2 mr-1 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white">
              salad
            </button>
            <button onClick= {() =>filterType('chicken') } className="border-orange-600 p-2 mr-1 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white">
              chicken
            </button>
          </div>
        </div>
        {/**filter price */}
        <div>
          <p className="text-xl mb-2">filter price</p>
          <div>
            <button onClick={() => filterPrice('$') } className="border-orange-600 p-2 mr-1 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button onClick={() => filterPrice('$$') } className="border-orange-600 p-2 mr-1 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button onClick={() => filterPrice('$$$') } className="border-orange-600 p-2 mr-1 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button onClick={() => filterPrice('$$$$') } className="border-orange-600 p-2 mr-1 text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {food.map((item) => (
          <div key={item.id} className =' shadiw-lg rounded-xl py-3 duration-300 hover:scale-105'>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] lg:h-[300px] object-cover rounded-xl"
            />
            <div className="px-2 flex justify-between items-center mt-4">
              <p>{item.name}</p>
              <span className="bg-orange-600 text-white p-2 rounded-xl">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
