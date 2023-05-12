import { createContext, useState } from "react";

export const ShoppingCartContext =createContext()

export const ShoppingCartProvider =({children})=>{
    /* carrito de compras, incremento */
    const[count,setCount]=useState(0)


    /* produc Detail: abrir/cerrar */
    const[isProductDetailOpen, setIsProductDetailOpen]=useState(false)
    const openProductDetail=()=> setIsProductDetailOpen(true)
    const closeProductDetail=()=> setIsProductDetailOpen(false)
    /* add preoduct: abrir/cerrar*/
    const[isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen]=useState(false)
    const openCheckoutSideMenu=()=> setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu=()=> setIsCheckoutSideMenuOpen(false)

    /* prouct Detail: detalles del producto */
    const[productToShow,setProductToShow]=useState({})
    /* agregando productos al carrito */
    const[cartProducts,setCartProducts]=useState([])
    /* chopping cart order */
    const[order,setOrder]=useState([])


    
    return(
        <ShoppingCartContext.Provider value={{
             count,
             setCount,
             openProductDetail,
             closeProductDetail,
             isProductDetailOpen,
             productToShow,
             setProductToShow,
             cartProducts,
             setCartProducts,
             isCheckoutSideMenuOpen,
             openCheckoutSideMenu,
             closeCheckoutSideMenu,
             order,
             setOrder
            }}>
           {children} 
        </ShoppingCartContext.Provider>    
    )
}