import { useEffect, useState } from "react";
import Chef from "./Chef";

const ChefsSections = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    const fetchChefs = async () => {
      const response = await fetch("http://localhost:5000/api/chefs");
      const data = await response.json();
      setChefs(data);
    };
    fetchChefs();
  }, []);

  console.log(chefs);
  return (
    <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
      {chefs.map((chef) => (
        <Chef chef={chef} key={chef.chef_id} />
      ))}
    </div>
  );
};

export default ChefsSections;
