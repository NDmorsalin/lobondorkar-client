import { useLoaderData, useNavigation } from "react-router-dom";
import Banner from "../../components/Recipe/Banner/Banner";
import Loading from "../../Shared/Loading/Loading";

const Recipe = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading />;
  }
  return (
    <div className="container mx-auto py-6 sm:py-8 sm:px-8 rounded-lg space-y-8">
      <Banner chef={data} />
      <div className="">
        
      </div>
    </div>
  );
};

export default Recipe;
