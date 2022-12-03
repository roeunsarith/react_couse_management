import { useState } from "react";
import {MyComponent,MyComponent1} from "../components/demo/MyComponent";
import Animal from "../components/demo/Animal";
// import {useState} from "react"
function AboutPage () {
    let product = [];
    const[code,setCode] = useState("");
    const[name,setName] = useState("");
    const[price,setPrice] = useState("");
    const[arrProduct,setProduct] = useState(product);

    const onClickAdd = () => {
        let obj = {
            Pro_code: code,
            Pro_name: name,
            Pro_price: price
        }
        let data = arrProduct.concat(obj)
        setProduct(data)
        onClickClear();
    }
    const onChangeCode = (event) => {
        console.log(event.target.value)
        setCode(event.target.value)
    }
    const onChangeName = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }
    const onChangePrice = (event) => {
        console.log(event.target.value)
        setPrice(event.target.value)
    }

    const onClickRemove = (item,index) => {
            arrProduct.splice(index, 1);
            setProduct([...arrProduct])
    }
    
    const onClickClear = () =>{
        setCode("")
        setName("")
        setPrice("")
    }

    // const MyComponent = ()=>{
    //     return(
    //         <h1 style={{backgroundColor : "red", padding: 10}}>Product Lists</h1>
    //     )
    // }
    return(
        <div className="about">
            {/* <h1>Product List</h1> */}
            <MyComponent />
            <MyComponent1 />
            <Animal/>
            <Animal name="Cat" age ={12}/>
            <Animal/>
            <Animal/>
            <input  placeholder="code" value={code} onChange={onChangeCode}/>
            <input  placeholder="Name" value={name} onChange={onChangeName}/>
            <input  placeholder="Price" value={price} onChange={onChangePrice}/>
            <button onClick={onClickAdd}>Add</button>
            <button onClick={onClickClear}>Clear</button>

            <h3>List Categroy</h3>
            {arrProduct.map((item,index)=>{
                return (
                    <div key={index} style={{padding : 20, backgroundColor : "#e2e2e2", width : 250, height : 100,
                            margin : 10 }} >
                                
                        <div>{item.Pro_code}</div> 
                        <div>
                            {item.Pro_name}$
                            {item.Pro_price}$
                        </div> 
                        <button onClick={()=>onClickRemove(item,index)}>Remove</button>
                    </div>
                )
            })}
            
        </div>
    );
}

export default AboutPage