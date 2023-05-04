import { useLoaderData, useNavigation } from "react-router-dom";
import Banner from "../../components/Recipe/Banner/Banner";
import Loading from "../../Shared/Loading/Loading";
import "@smastrom/react-rating/style.css";
import { toast } from "react-hot-toast";
import RecipeCard from "./RecipeCard";
import { addToCartOnLocalStorage, deleteShoppingCart, getShoppingCart } from "../../utility/fakedb";
import { useState } from "react";

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
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading />;
  }

  
  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find((pd) => pd.recipe_id === product.recipe_id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      product.quantity = exists.quantity + 1;
      const exceptCurrentProduct = cart.filter((pd) => pd.id !== product.id);
      newCart = [...exceptCurrentProduct, product];
    }
    setCart(newCart);
    addToCartOnLocalStorage(product.recipe_id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart()
  };

  return (
    <div className="container mx-auto py-6 sm:py-8 sm:px-8 rounded-lg space-y-8">
      <Banner chef={data} />
      <div className="grid sm:grid-cols-2  gap-4">
        {
          // ! change color
          data.recipes.map((recipe) => (
            <RecipeCard handleAddToCart={handleAddToCart} key={recipe.recipe_id} recipe={recipe} />
          ))
        }
      </div>
    </div>
  );
};

export default Recipe;
