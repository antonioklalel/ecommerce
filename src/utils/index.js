/**
 * esta funcion calcula el precio total de una lista de precios
 * @param{products} array de objetos
 * @returns{number} precio total
 */
export const totalPrice=(products)=>{
    return products.reduce((sum,product)=> sum+product.price,0)
}