/* eslint-disable react/prop-types */
import "@smastrom/react-rating/style.css";
import { toast } from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";
import { useMemo, useState } from "react";
import { getShoppingCart } from "../../utility/fakedb";
import { useAuth } from "../../provider/Auth/AuthProvider";
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

const RecipeCard = ({ recipe, handleAddToCart }) => {
  const { clickAddToFavorite } = useAuth();
  const [isClicked, setIsClicked] = useState(false);
  const dbCard = getShoppingCart();
  const handleAddToFavorite = (recipe) => {
    toast("Added to favorite");
    setIsClicked(true);
    handleAddToCart(recipe);
    clickAddToFavorite();
  };

  const checkDb = useMemo(() => {
    for (const recipeId in dbCard) {
      if (recipe.recipe_id === recipeId) {
        return true;
      }
    }
  }, [dbCard, recipe.recipe_id]);

  return (
    <div className="">
      <div className="flex flex-wrap  bg-green-100 rounded-lg">
        <div className="card  shadow-xl text-black sm:flex-1 p-4">
          <figure className="px-2 pt-4 mx-auto  rounded-full overflow-hidden ">
            <img
              src={recipe?.recipe_img}
              alt="Shoes"
              className="w-24 h-24 rounded-full object-cover"
            />
          </figure>
          <div className="card-body items-center text-center p-2 py-4">
            <h2 className="card-title text-2xl mt-0">{recipe.recipe_name}</h2>
            <div className="">
              <h2 className="card-title text-xl mt-0"> ingredients</h2>

              <div className="flex gap-3 items-center flex-wrap">
                {recipe.ingredients.map((ingredient) => (
                  <div key={ingredient} className="flex items-center gap-2">
                    <div className="badge badge-primary ">{ingredient}</div>
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
              <button
                onClick={() => {
                  handleAddToFavorite(recipe);
                }}
                disabled={isClicked || checkDb}
                className={`btn  w-full ${
                  isClicked ? "btn-secondary" : "btn-info"
                }`}
              >
                Add to Favorite
              </button>
            </div>
          </div>
        </div>
        <div className="sm:flex-1 p-4">
          <h4 className="text-lg font-bold">Cooking Method</h4>
          <p className="">{recipe.cooking_method}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
