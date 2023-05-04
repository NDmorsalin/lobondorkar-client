const fetchChefRecipes = async ({ params }) => {
    const response = await fetch(`https://chef-recipe-hunter-server.vercel.app/api/chefRecipes/${params.id}`);
    const data = await response.json();
    console.log(data);
    return data
};

export default fetchChefRecipes;