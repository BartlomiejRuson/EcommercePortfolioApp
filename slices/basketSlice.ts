import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../interfaces'
type ProductArray = Array<Product>

const initialState  = {
  items:[]
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
state.items=[...state.items,action.payload]
    },
    removeFromBasket:(state,action)=>{

        const itemId = state.items.findIndex(item=>item.id===action.payload)
        let newState = [...state.items]
        if (itemId > -1) { 
           newState.splice(itemId, 1); 
        } else {
          console.log("cant find a product to remove")
        }
        state.items=newState;
    }
  }
})

export const { addToBasket,removeFromBasket } = basketSlice.actions
export const selectItems = (state) => state.basket.items;
export default basketSlice.reducer