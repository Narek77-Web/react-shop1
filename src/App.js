import { useState, useEffect } from "react";
import { ProductList } from "./ProductList";

export function App(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            setProducts(json);
            console.log(json);
        })

    }, []);


    return <div className="App container mx-auto">
       <ProductList products={products} />
    </div>
}


