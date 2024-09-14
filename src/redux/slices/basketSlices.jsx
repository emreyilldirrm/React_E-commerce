import { createSlice } from '@reduxjs/toolkit'


const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"))
    } else {
        return []
    }
}

const initialState = {
    products: getBasketFromStorage(),
    drawer: false,
    totalAmount: 0
}

const writeFromBasketStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}



export const basketSlices = createSlice({
    name: 'name',
    initialState,
    reducers: {
        removeToBasket: (state, action) => {
            // action.payload, kaldırılacak ürünün id'sini içermelidir
            const productId = action.payload;

            // Ürünleri filtreleyerek, kaldırılacak ürünü çıkar
            state.products = state.products.filter(product => product.id !== productId);

            // Değişiklikleri yerel depolamaya yaz
            writeFromBasketStorage(state.products);
        },
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id == action.payload.id)
            if (findProduct) {
                const extractedProduct = state.products.filter((product) => product.id != action.payload.id)
                findProduct.count += action.payload.count
                state.products = [...extractedProduct, findProduct]
                writeFromBasketStorage(state.products)
            } else {
                state.products = [...state.products, action.payload]
                writeFromBasketStorage(state.products)
            }
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer
        },
        calculateBasket: (state) => {
            state.totalAmount = 0
            state.products && state.products.map((product) => {
                state.totalAmount += product.price * product.count
            })
        }
    }
})

export const { addToBasket, setDrawer, calculateBasket, removeToBasket } = basketSlices.actions

export default basketSlices.reducer