/* eslint-disable react/prop-types */
import {IoIosRestaurant} from "react-icons/io";
import {AiFillLike} from "react-icons/ai";

const Banner = ({ chef }) => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-8 md:py-16 bg-gradient-to-br from-slate-500 to-pink-500 via-cyan-500 rounded-lg">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={chef.chef.chef_picture}
            alt="Chef"
            className="rounded-full w-64 h-64 mx-auto md:mx-0 md:ml-8"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Chef
          </h2>
          <h3 className="text-xl md:text-2xl text-white mb-4">{chef.chef.chef_name}</h3>
          <p className="text-lg md:text-xl text-white mb-4">
            {chef.chef.bio}
          </p>
          <div className="flex justify-center md:justify-start mb-4">
            <div className="flex items-center mr-8">
              <AiFillLike className="text-white text-3xl"/>
              <p className="text-lg md:text-xl text-white ms-2">{chef.chef.likes}</p>
            </div>
            <div className="flex items-center">
              <IoIosRestaurant className="text-white text-3xl" />
              <p className="text-lg md:text-xl text-white">{chef.chef.num_of_recipes} </p>
            </div>
          </div>
          <p className="text-lg md:text-xl text-white">
            Years of Experience: {chef.chef.years_of_experience} years
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
