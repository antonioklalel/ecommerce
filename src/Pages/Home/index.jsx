import { useEffect, useState } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"


function Home (){
    const[items,setItems]=useState(null)
    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data=> setItems(data))
    },[])
    return(
        <Layout>
           Home
           <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
             {
                items?.map((item)=>(
                 <Card key={item.id} data={item}/> 
                ))
             }
           </div>
            <ProductDetail/>

        </Layout>                                         
    )
}
export default Home
/*  en el componente home hacemos un llmado a la API con el hook useEffect, quiere decir que cada vez que el componente se renderice se ehjecute
 useEffect, setItems recibe data que viene ser la informacion rescibida de la API.
 hace un map de cada elemento del estado y muesta Card que viene a ser el componente hijo de Home
*/