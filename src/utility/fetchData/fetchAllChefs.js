const fetchAllChefs = async () => {
    const response = await fetch(`https://chef-recipe-hunter-server.vercel.app/api/chefs`);
    const data = await response.json();
    
    return data
};

export default fetchAllChefs;