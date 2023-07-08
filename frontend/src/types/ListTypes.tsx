import { ReactNode } from 'react';

export interface ProductDataType {
    id: number,
    title: string,
    price: number,
    img: string,
    img2: string,
    img3: string,
    category: string,
    popular?: string,
    desc: string
}

export interface CartItemTypes {
    id: number,
    name?: string,
    img: string,
    price: number,
    quantity: number,
    totalPrice: number,
    title: string
}

export interface FeaturedData {
    title: string,
    imgUrl: string,
    desc: string,
}

export interface TypeAuthSlice {
    user: ReactNode,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string | unknown
}

export interface TypeCartSlice {
    cartItems: CartItemTypes[],
    totalQuantity: number,
    totalAmount: number 
}

export interface RootState {
    cart?: any,
    cartUI?: any,
    isOn: boolean
}