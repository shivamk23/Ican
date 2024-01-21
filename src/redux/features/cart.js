import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  cartLength: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartData: (state, action) => {

      const newItem = action.payload;
      console.log({newItem})
      const existingItemIndex6 = state.cartData.findIndex(item => item.selectedPack.selectedPack === newItem.selectedPack.selectedPack);
      const existingItemIndex24 = state.cartData.findIndex(item => item.selectedPack.selectedPack === newItem.selectedPack.selectedPack);

      if (existingItemIndex6 !== -1) {
        state.cartData[existingItemIndex6] = newItem;
      }
      else if
        (existingItemIndex24 !== -1) {
        state.cartData[existingItemIndex24] = newItem;

      }
      else {
        state.cartData.push(newItem);
      }
    },
    setCartLength: (state, action) => {
      console.log(action.payload);
      state.cartLength = action.payload;
    },
  },
});

export const { setCartData, setCartLength } = cartSlice.actions;
export default cartSlice.reducer;
