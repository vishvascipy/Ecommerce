import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Add logic to handle adding items to the cart
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      // Add logic to handle removing items from the cart
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    case "MOVE_TO_SAVED_ITEMS":
      console.log('Moving to saved items:', action.payload);
      const itemToMove = state.cartItems.find((item) => item.id === action.payload);
      console.log('Item to move:', itemToMove);
      return {
        ...state,
        savedItems: [...state.savedItems, itemToMove],
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "REMOVE_FROM_SAVED_ITEMS":
      return {
        ...state,
        savedItems: state.savedItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  // const [cartItems, dispatch] = useReducer(cartReducer, []);
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [], savedItems: [] });

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };
  const moveToSavedItems = (productId) => {
    dispatch({ type: "MOVE_TO_SAVED_ITEMS", payload: productId });
  };
  const removeFromSavedItems = (productId) => {
    dispatch({ type: "REMOVE_FROM_SAVED_ITEMS", payload: productId });
  };
  const contextValue = {
    cartItems: cartState.cartItems,
    addToCart,
    removeFromCart,
    moveToSavedItems,
    removeFromSavedItems,
    savedItems: cartState.savedItems,
  };
  console.log('cartState Value:', cartState);

  return (
    // <CartContext.Provider value={{ cartItems, addToCart }}>
    //   {children}
    // </CartContext.Provider>
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
