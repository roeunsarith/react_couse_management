import {useState} from "react"
function Login(){
    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [price,setPrice] = useState(0)
    const [des,setDes] = useState("")
    const [idEdit,setIdEdit] = useState(null)
    const [product,setProduct] = useState([])

    const onChangeId = (event) => {
        setId(event.target.value)
    }
    const onChangeName = (event) => {   
        setName(event.target.value)
    }
    const onChangePrice = (event) => {
        setPrice(event.target.value)
    }
    const onChangeDes = (event) => {
        setDes(event.target.value)
    }
    const onClickAdd =() =>{
        var item =  {
            "id" : id,
            "name" : name,
            "price" : price,
            "des" : des,
        }
        if(idEdit == null){
            var productTmp = [...product,item]
            setProduct(productTmp)
            onClickClear();
        }else{
            productTmp = product;
            productTmp[idEdit].id = id
            productTmp[idEdit].name = name
            productTmp[idEdit].price = price
            productTmp[idEdit].des = des
            setProduct([...productTmp])
            onClickClear();
        }
    }
    const onClickClear =()=>{
        setId("")
        setName("")
        setPrice("")
        setDes("")
        setIdEdit(null)
    }
    const onClickDelete = (item,index) => {
        var productTmp = product.filter((item,i)=> i !== index)
        setProduct(productTmp)
    }
    const onClickEdit = (item,index) => {
        setId(item.id)
        setName(item.name)
        setPrice(item.price)
        setDes(item.des)
        setIdEdit(index)
    }
    return(
        <div className="product">
            <h1 style={{textAlign:"center"}}>Product Page</h1>
            <div className="bar1 flex">
                <div className="add">
                    <span>ADD</span>
                </div>
                <div className="search">
                    <input placeholder="Search here" />
                    {/* <div className="btn-search">
                        font-aersome
                    </div> */}
                </div>
                {/* <div className="action">
                    <div className="setShow">
                        <section>
                            <option value={1}>5</option>
                            <option value={2}>10</option>
                            <option value={3}>15</option>
                            <option value={4}>20</option>
                        </section>
                    </div>
                    <div className="count">

                    </div>
                </div> */}
            </div>
            <div className="content">
                <div className="frm">
                    <input placeholder="ID" value={id} onChange={onChangeId} className="frm-control"/>
                    <input placeholder="Name" value={name} onChange={onChangeName} className="frm-control"/>
                    <input placeholder="Price" value={price} onChange={onChangePrice} className="frm-control"/>
                    <textarea placeholder="Description" value={des} onChange={onChangeDes} className="frm-control"/>
                    <div className="btn flex">
                        <div className="Add">
                            <span onClick={onClickAdd}>{idEdit == null ? "ADD" : "EDIT"}</span>
                        </div>
                        <div className="Clear">
                            <span onClick={onClickClear}>CLEAR</span>
                        </div>
                    </div>
                </div>
                <table className="tbl">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    {product.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.id}</td >
                                <td>{item.name}</td>
                                <td>{item.price}$</td>
                                <td>{item.des}</td>
                                <td>
                                    <button onClick={()=>onClickDelete(item,index)} style={{backgroundColor:'red'}} >DELETE</button>
                                     <button onClick={()=>onClickEdit(item,index)} style={{backgroundColor:'green'}}>EDIT</button>
                                </td>
                            </tr>
                        )
                    })}
                        
                        
                    
                </table>
            </div>
            
        </div>
        
        );
}

export default Login;
