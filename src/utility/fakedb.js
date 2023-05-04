
const addToCartOnLocalStorage = (id) => {
    let shoppingCart = getShoppingCart()

    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1
        shoppingCart[id] = newQuantity
    } else {
        shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const removeFromCart = (id) => {
    let shoppingCart = getShoppingCart()
    delete shoppingCart[id]
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    // console.log(id, shoppingCart);
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}

const getShoppingCart = () => {
    let shoppingCart = {}
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart

}

export {
    addToCartOnLocalStorage,
    removeFromCart,
    deleteShoppingCart,
    getShoppingCart
}