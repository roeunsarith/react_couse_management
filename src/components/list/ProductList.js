 import "./product.css"
 const ProductList =(props)=>{
    const color = ["red","green","blue","yellow"]
    return(
        <div className="containers">
        {props.data.map((item,index)=>{
            return(
                <div className="products">
                    <div className="img-box">
                        {/* <img src={require("../../assets/img/1658513761.jpg")} alt="" /> */}
                        <img src={require("../../assets/img/"+ item.img) } alt="" />
                    </div>
                    <div>
                        {/* <span>{item.id}</span> */}
                        <h3 className="title">{item.product_name}</h3>
                        <div className="price">
                            <div className="full">USD {item.full_price}$</div>
                            <div className="dis">USD {item.price}$</div>
                        </div>
                        
                        <div className="colors">
                            {color.map((item,index)=>{
                                return(
                                    <div key={index} className="color" style={{backgroundColor: item}}></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
        
    )
 }

 export default ProductList