import { createContext, useEffect, useState } from "react";
import { Product } from "../components/Products.types";

type CartContextProviderProps = {
    children: React.ReactNode
}

type CartContextType = {
    UserCart: Product[],
    addProduct: (id: number) => void,
    removeProduct: (id: number) => void,
    removeAll: () => void,
    shop: Product[]
}

export const CartContext = createContext({} as CartContextType)


const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [UserCart, setUserCart] = useState<Product[]>([])
    const [shop, setShop] = useState<Product[]>([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then((data) => setShop(data))
    }, [])

    const addProduct = (id: number) => {
        setUserCart(pervProducts => {
            const mainProductInCart = UserCart.find(product => product.id === id)
            if (mainProductInCart) {
                return pervProducts.map(product => {
                    if (product.id === id) {
                        return { ...product, count: product.count + 1 }
                    } else {
                        return product
                    }
                })
            } else {
                const mainProductInShop = shop.find(product => product.id === id) as Product
                return [...pervProducts, {...mainProductInShop, count: 1}]
            }
            return []
        })
    }

    const removeProduct = (id: number) => {
        setUserCart(prevProducts => prevProducts.filter((product) => product.id !== id))
    }

    const removeAll = () => setUserCart([])

    return (
        <CartContext.Provider value={{
            addProduct,
            removeProduct,
            removeAll,
            shop,
            UserCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider