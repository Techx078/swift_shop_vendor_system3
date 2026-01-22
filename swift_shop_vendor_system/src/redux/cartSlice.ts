import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      
      const item = state.items.find((i) => i.id === id);
      if (item && quantity > 0) {
        item.quantity = parseInt(quantity);
      }
      console.log(state)
    },
  },
});

export const { addToCart, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;