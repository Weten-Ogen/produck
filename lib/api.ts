export async function fetchAllProduct(){
    return await fetch('https://fakestoreapi.com/products')
    
}

export async function fetchProduct(id:number){
    return await fetch(`https://fakestoreapi.com/products/${id}`)
}

