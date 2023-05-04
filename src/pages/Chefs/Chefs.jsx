import { useLoaderData, useNavigation } from "react-router-dom";
import Chef from "../../components/Home/ChefsSection/Chef";
import Loading from "../../Shared/Loading/Loading";

const Chefs = () => {
  const chefs = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loading />;

  return (
    <div className="container mx-auto py-6 sm:py-8 sm:px-8 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {chefs.map((chef) => (
          <Chef key={chef.chef_id} chef={chef}>
            {chef.bio}
          </Chef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
