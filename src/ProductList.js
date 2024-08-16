import { ProductItem } from "./ProductItem";



export function ProductList({products}){


    return <div className="ProductList grid gap-4 sm:grid-cols-2  lg:grid-cols-4">
        {
            products.map(el=> <ProductItem item={el} />)
        }
    </div>
}