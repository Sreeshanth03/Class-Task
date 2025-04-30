import "./Product.css"
const Product=(prop)=>{
    console.log(prop)
return(
    <div>
       {prop.nani.map((item)=>{
        return(
           <div className="nani4">
           <h1 className="nani1"> {item.id}</h1>
         <h1 className="nani2">   {item.name}</h1>
       <h1 className="nani3">     {item.cost}</h1>
       </div>
        )
       })}
    </div>
)
}
export default Product;