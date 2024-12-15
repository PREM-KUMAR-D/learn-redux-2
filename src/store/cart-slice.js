import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

        },

    }
})

export const sendCartData = (cart) => {
    return async (dispatch) => {

        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'sending..',
            message: 'sending cart data',
        }))
        const sendRequest = async () => {

            const fireBaseUrl = process.env.REACT_APP_FIRE_BASE_URL;
            const response = await fetch(`${fireBaseUrl}/cart-redux.json`, {
                method: 'PUT',
                body: JSON.stringify(cart),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }
        }
        try{

            await sendRequest();
        }
        catch(error){

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'success..',
                message: 'sent cart data succefully',
            }))
        }
    }
}



export const cartActions = cartSlice.actions;

export default cartSlice;