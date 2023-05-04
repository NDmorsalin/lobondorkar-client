import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Banner from "../../components/Recipe/Banner/Banner";
import Loading from "../../Shared/Loading/Loading";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Star = (
  <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
);
const myStyles = {
  itemShapes: Star,
  boxBorderWidth: 1,

  activeFillColor: ["#FEE2E2", "#FFEDD5", "#FEF9C3", "#ECFCCB", "#D1FAE5"],
  activeBoxColor: ["#da1600", "#db711a", "#dcb000", "#61bb00", "#009664"],
  activeBoxBorderColor: ["#c41400", "#d05e00", "#cca300", "#498d00", "#00724c"],

  inactiveFillColor: "white",
  inactiveBoxColor: "#dddddd",
  inactiveBoxBorderColor: "#a8a8a8",
};

const Recipe = () => {
  const data = useLoaderData();

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading />;
  }
  console.log(data.recipes);
  return (
    <div className="container mx-auto py-6 sm:py-8 sm:px-8 rounded-lg space-y-8">
      <Banner chef={data} />
      <div className="grid sm:grid-cols-2  gap-4">
        {
          // ! change color
          data.recipes.map((recipe) => (
            <div key={recipe.recipe_id} className="">
              <div className="grid grid-cols-6 gap-2 bg-green-100 rounded-lg">
                <div className="card  shadow-xl text-black col-span-3 p-4">
                  <figure className="px-2 pt-4 mx-auto  rounded-full overflow-hidden ">
                    <img
                      src={recipe?.recipe_img}
                      alt="Shoes"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </figure>
                  <div className="card-body items-center text-center p-2 py-4">
                    <h2 className="card-title text-2xl mt-0">
                      {recipe.recipe_name}
                    </h2>
                    <div className="">
                      <h2 className="card-title text-xl mt-0"> ingredients</h2>

                      <div className="flex gap-3 items-center flex-wrap">
                        {recipe.ingredients.map((ingredient) => (
                          <div
                            key={ingredient}
                            className="flex items-center gap-2"
                          >
                            <div className="badge badge-accent">
                              {ingredient}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <Rating
                        style={{ maxWidth: 400 }}
                        value={recipe.rating}
                        itemStyles={myStyles}
                        readOnly
                        radius="large"
                        className="gap-2"
                        halfFillMode="box"
                      />
                      <div className="w-8 mx-auto h-8 flex items-center justify-center font-bold  border-2 border-base-200 rounded-full">
                        {recipe.rating}
                      </div>
                    </div>
                    <div className="card-actions w-full">
                      <Link
                to={`/recipe/${recipe.recipe_id}`}
                className="btn btn-info w-full"
              >
                Add to Favorite
              </Link>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 p-4">
                  <h4 className="text-lg font-bold">Cooking Method</h4>
                  <p className="">{recipe.cooking_method}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Recipe;
