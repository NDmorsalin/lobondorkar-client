import { useLoaderData, useNavigation } from "react-router-dom";
import Banner from "../../components/Recipe/Banner/Banner";
import Loading from "../../Shared/Loading/Loading";
import "@smastrom/react-rating/style.css";
import RecipeCard from "./RecipeCard";
import {
  addToCartOnLocalStorage,
  deleteShoppingCart,
} from "../../utility/fakedb";
import { useState } from "react";

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
    deleteShoppingCart();
  };

  return (
    <div className="container mx-auto py-6 sm:py-8 sm:px-8 rounded-lg space-y-8">
      <Banner chef={data} />
      <div className="grid sm:grid-cols-2  gap-4">
        {
          // ! change color
          data.recipes.map((recipe) => (
            <RecipeCard
              handleAddToCart={handleAddToCart}
              key={recipe.recipe_id}
              recipe={recipe}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Recipe;
