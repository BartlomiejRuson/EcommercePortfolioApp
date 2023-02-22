import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../interfaces'
type ProductArray = Array<Product>

const initialState  = {
  items:[],
  totalPrice:0
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
state.items=[...state.items,action.payload];
state.totalPrice=state.totalPrice + action.payload.price;
    },
    removeFromBasket:(state,action)=>{

        const itemId = state.items.findIndex(item=>item.id===action.payload.id)
        let newState = [...state.items]
        if (itemId > -1) { 
           newState.splice(itemId, 1); 
          state.totalPrice= state.totalPrice - action.payload.price
        } else {
          console.log("cant find a product to remove")
        }
        state.items=newState;
    }
  }
})

export const { addToBasket,removeFromBasket } = basketSlice.actions
export const selectItems = (state) => state.basket.items;
export const selectTotalPrice = (state) => state.basket.totalPrice;
export default basketSlice.reducer