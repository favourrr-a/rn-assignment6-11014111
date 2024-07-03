import { useState, createContext, useContext } from 'react';

const CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
        setCartTotal((prevTotal) => prevTotal + item.price);
        alert('Item added to cart');
    }

    const removeItemFromCart = (itemToRemove) => {
        const newCart = cartItems.filter((item) => item !== itemToRemove);
        setCartItems(newCart);
        setCartTotal((prevTotal) => prevTotal - itemToRemove.price);
        alert('Item removed from cart');
    }

    const cartContext = {
        cartItems,
        cartTotal,
        addItemToCart,
        removeItemFromCart
    }
    return (
        <CartContext.Provider value = {cartContext}>
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartContext, CartContextProvider }