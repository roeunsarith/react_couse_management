
import ProductList from '../components/list/ProductList';
import "../styles/HomePage.css"
function HomePage () {
    
    const arrProducts= [
            {
            img : "1658513761.jpg",
            product_name : "Men Jean",
            full_price : 10,
            discount : 50,
            price : 5
        },
        {
            img : "1658514473.jpg",
            product_name : "Men TShirt",
            full_price : 10,
            discount : 50,
            price : 5
        },
        {
            img : "1658596121.jpg",
            product_name : "Wonen Shoes",
            full_price : 10,
            discount : 50,
            price : 5
        },
        {
            img : "1660923625.jpg",
            product_name : "Wonen Shoes",
            full_price : 10,
            discount : 50,
            price : 5
        },
        {
            img : "1660924872.jpg",
            product_name : "Wonen Shoes",
            full_price : 10,
            discount : 50,
            price : 5
        }
    ]
   
    return (
        <div className='home' style={{padding : 10}}> 
            <h1>List Product</h1>
            <ProductList  data={arrProducts}/>
            <ProductList  data={arrProducts}/>  
        </div>
    )
}
export default HomePage;