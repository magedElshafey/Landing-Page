import React from "react";

const Hero = () => {
  return (
    <div className="max-w[1640px] mx-auto px-4 py-8">
      <div className="relative">
        <div className=" absolute top-0 left-0 w-full h-full bg-black/70 text-white flex flex-col justify-center">
            <h1 className="text-3xl px-4">The <span className="text-orange-600">best</span></h1>
            <h1 className="text-orange-600 text-3xl px-4">food <span className="text-white" >Deliverd</span></h1>
        </div>
        <img
            src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
          className=" w-full h-[400px] object-cover "
        />
      </div>
    </div>
  );
};

export default Hero;
