import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "@/redux/shopping-cart/cartSlice"
import cartUiSlice from "@/redux/shopping-cart/cartUiSlice"
import authReducer from "@/redux/user-credential/authSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartSlice.reducer,
        cartUI: cartUiSlice.reducer
    }
})

export default store
export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch