import React from "react";

const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
      <div className="relative">
        <div className="px-2 absolute top-0 left-0 w-full h-full bg-black/40 text-white flex flex-col justify-center rounded-xl">
          <h1 className="text-3xl font-bold">sun's out BOGGO'S out</h1>
          <p className="text-xl mb-2">through 28/6</p>
          <button className="bg-white text-black border-black rounded-full w-[fit-content] p-2">order now </button>
        </div>
        <img
          src="https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
          className="w-full h-[200px] object-cover rounded-xl"
        />
      </div>
      <div className="relative">
      <div className="px-2 absolute top-0 left-0 w-full h-full bg-black/40 text-white flex flex-col justify-center rounded-xl">
        <h1 className="text-3xl font-bold">We deliverd desert two</h1>
        <p className="text-xl mb-2">tasty treats</p>
        <button className="bg-white text-black border-black rounded-full w-[fit-content] p-2">order now </button>
      </div>
      <img
       src="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="/"
        className="w-full h-[200px] object-cover rounded-xl"
      />
    </div>
    <div className="relative">
    <div className="px-2 absolute top-0 left-0 w-full h-full bg-black/40 text-white flex flex-col justify-center rounded-xl">
      <h1 className="text-3xl font-bold">New resturant </h1>
      <p className="text-xl mb-2">added daily</p>
      <button className="bg-white text-black border-black rounded-full w-[fit-content] p-2">order now </button>
    </div>
    <img
      src="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="/"
      className="w-full h-[200px] object-cover rounded-xl"
    />
  </div>
      </div>
    </div>
  );
};

export default Cards;
