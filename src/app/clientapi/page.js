'use client'
import { useEffect, useState } from "react"

export default function page (){

    const [product , setProduct] = useState([]);
useEffect(()=>{

    const fetchData = async() => {
        let data = await fetch('https://dummyjson.com/products')
        data = await data.json();
        setProduct(data.products)
        
    }
    fetchData();
},[]);




    return(
        <div>
            <h1>Product list</h1>
            {
                product.map((item, index)=>(
                    <h1 key={index}>{item.title}</h1>
                ))
            }
        </div>
    )
}
