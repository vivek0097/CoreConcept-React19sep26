
//prefer this one
export const Product = ({title, price, inStock, categories}) => {

    return (
        <div className="border-4 border-indigo-500/75 mt-4 p-4">
            <h1>{title}</h1>
            <p>Price: ${price}</p>
            <p>In Stock: ${inStock? "Yes":"No"}</p>
            <p>Categories: {categories.join(", ")}</p>
        </div>
    )   
}



// export const Product = (props) => {

//     return (
//         <div className="border-4 border-indigo-500/75 mt-4 p-4">
//             <h1>{props.title}</h1>
//             <p>Price: ${props.price}</p>
//             <p>In Stock: ${props.inStock? "Yes":"No"}</p>
//             <p>Categories: {props.categories.join(", ")}</p>
//         </div>
//     )   
// }