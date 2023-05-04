import { useEffect, useState } from "react";
import Chef from "./Chef";
import Loading from "../../../Shared/Loading/Loading";

const ChefsSections = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchChefs = async () => {
      const response = await fetch("https://chef-recipe-hunter-server.vercel.app/api/chefs");
      const data = await response.json();
      setChefs(data);
      setLoading(false);
    };
    fetchChefs();
  }, []);

  if(loading) return <Loading/>;
  return (
    <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
      {chefs.map((chef) => (
        <Chef chef={chef} key={chef.chef_id} />
      ))}
    </div>
  );
};

export default ChefsSections;
