import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            items: [],
        },
        reducers: {
            addedItems: (state, action) => {
                state.items.push(action.payload)

            },
            removeItems: (state) => {
                state.items.pop()
            },
            clearItems: (state) => {
                state.items.length = 0;
            }
        }
    }
)

export const { addedItems, clearItems, removeItems } = cartSlice.actions;

export default cartSlice.reducer