import { GiFullPizza } from "react-icons/gi";
import { TbChefHat } from "react-icons/tb";
import { MdFastfood, MdRestaurantMenu } from "react-icons/md";

const service = [
  {
    id: 1,
    name: "TOP CHEFS",
    description:
      "we only hire the top chefs in town who have years of experience and a passion for creating exceptional dishes. ",
    Icon: TbChefHat,
  },
  {
    id: 2,
    name: "FRESH INGREDIENTS",
    description:
      "We believe that fresh ingredients are the key to creating delicious and healthy dishes. That's why we only use the freshest and highest quality ingredients in all of our dishes.",
    Icon: MdFastfood,
  },
  {
    id: 3,
    name: "ATTRACTIVE FLAVORS",
    description:
      "Our attractive and mouth-watering flavors are expertly crafted to provide you with a dining experience like no other.",
    Icon: GiFullPizza,
  },
  {
    id: 4,
    name: "PROFESSIONAL",
    description:
      "Our professional staff provides exceptional service and a warm welcoming environment that ensures you have an enjoyable and memorable dining experience.",
    Icon: MdRestaurantMenu,
  },
];

const ServicesWeProvide = () => {
  return (
    <>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4 ">
        {service.map((item) => (
          <div key={item.id} className="card  shadow-xl group">
            <div className="w-28 h-28 mx-auto rounded-full border-2 group-hover:bg-slate-600 flex items-center justify-center transition-all transform duration-300">
              <item.Icon className="text-6xl" />
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl font-bold"> {item.name} </h2>

              <p className="">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesWeProvide;
