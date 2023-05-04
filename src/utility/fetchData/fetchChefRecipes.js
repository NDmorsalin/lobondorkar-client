const fetchChefRecipes = async ({ params }) => {
    const response = await fetch(`http://localhost:5000/api/chefRecipes/${params.id}`);
    const data = await response.json();
    console.log(data);
    return data
};

export default fetchChefRecipes;