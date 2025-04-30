import Product from "../Product/Product"
const Products=()=>{
    const products=[
        {id:1,name:"laptop",cost:55000},
        {id:2,name:"mobile",cost:15000}
        ]
        
    return(
        <div>
            <Product nani={products} />
        </div>
    )
}
export default Products