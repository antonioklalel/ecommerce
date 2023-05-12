import {useRoutes, BrowserRouter, Form} from "react-router-dom"

import {ShoppingCartProvider} from "../../Context"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import NavBar from "../../Components/NavBar"
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"
import "./App.css"


const AppRoutes=()=>{
    let routes = useRoutes([
        {path:"/",element:<Home/>},
        {path:"/clothes",element:<Home/>},
        {path:"/electronics",element:<Home/>},
        {path:"/furnitures",element:<Home/>},
        {path:"/toys",element:<Home/>},
        {path:"/others",element:<Home/>},
        {path:"/my-account", element:<MyAccount/>},
        {path:"/my-order", element:<MyOrder/>},
        {path:"/my-orders", element:<MyOrders/>},
        {path:"/my-orders/last", element:<MyOrder/>},
        {path:"/my-orders/:id", element:<MyOrder/>},
        {path:"/sign-in", element:<SignIn/>},
        {path:"/*", element:<NotFound/>}
    ])
    return routes
}

const App= () => {
    
    return(
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes/>
                <NavBar/>
                <CheckoutSideMenu/>
            </BrowserRouter>
        </ShoppingCartProvider>
       
    )
}
export default App
/* componente padre, contiene la funcion AppRoutes que contiene las rutas, contiene la navegacion NavBar y el componenete CheckoutSideMenu que
muestra la informacion de cada producto, se pone en el componente padre porque queremos que apareza en la pagina principal
  */