const fetchAllChefs = async () => {
    const response = await fetch(`http://localhost:5000/api/chefs`);
    const data = await response.json();
    
    return data
};

export default fetchAllChefs;