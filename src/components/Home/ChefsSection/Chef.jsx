import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Chef = ({ chef }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 mx-auto  rounded-full overflow-hidden ">
        <img
          src={chef?.chef_picture}
          alt="Shoes"
          className="w-40 h-40 rounded-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-4xl">{chef.chef_name}</h2>
        
        <div className="my-4 flex items-center justify-center  gap-4 flex-wrap">
            <div className="">
                <div className="w-12 mx-auto h-12 flex items-center justify-center font-bold text-xl border-2 rounded-full">{chef.years_of_experience}</div>
                <p className="text-sm mt-2">Experience</p>

            </div>
            <div className="">
                <div className="w-12 mx-auto h-12 flex items-center justify-center font-bold text-xl border-2 rounded-full">{chef.num_of_recipes}</div>
                <p className="text-sm mt-2"> Recipes </p>

            </div>
            <div className="">
                <div className="w-12 mx-auto h-12 flex items-center justify-center font-bold text-xl border-2 rounded-full">{chef.likes}</div>
                <p className="text-sm mt-2"> Likes </p>

            </div>
        </div>
        <div className="card-actions w-full">
          <Link to={`/recipe/${chef.chef_id}`} className="btn btn-info w-full">View Recipe</Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
