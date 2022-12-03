 import "../styles/CategoryCreatePage.css"
 import axios from "axios"
 import React, { useState } from "react"
 import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"
import Loading from "../components/loading/Loading";
import { fetchData } from "../helper";
 const CategoryCreatePage =()=>{
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [image,setImage] = useState("")
    const [sort_order,setOrder] =useState("")
    const [parent,setParent] =useState("")
    const [status, setStatus] =useState("")
    const [loading, setLoading] =useState(false)
    const handleChangeName =(event)=>{
        setName(event.target.value)
    }
    const handleChangeImage =(event)=>{
        setImage(event.target.value)
    }
    const handleChangeSortOrder =(event)=>{
        setOrder(event.target.value)
    }
    const handleChangeParent =(event)=>{
        setParent(event.target.value)
    }
    const handleChangeStatus =(event)=>{
        setStatus(event.target.value)
    }
    // const [list, setList] = useState([])

    React.useEffect(()=>{

    },[])
    const handleSave=()=>{
            if(name!=null){
            setLoading(true)
            var data = {
                "name": name,
                "parent": parent,
                "image": image,
                "sort_order": sort_order,
                "status": status
            }
            fetchData("api/category","POST",data).then(res=>{
                setLoading(false)
                alert(res.message);//message
                navigate('/category')
            })
        
            }
        // axios({
        //     url : "https://demo-intern.cleverapps.io/api/category",
        //     method : "POST",
        //     data : {
        //         "name": name,
        //         "parent": parent,
        //         "image": image,
        //         "sort_order": sort_order,
        //         "status": status
        //     }
        // }).then(res=>{
        //     // if(res.data && res.data.list){
        //         // setList(res.data.list)
        //     // }
        //     setLoading(false)
        //     navigate('/category')
        // }).catch(err=>{
        //     console.log(err)
        //     // alert("error")
        //     setLoading(false)
        // })
    }
    return(
        <div className="create">
            <h1>New Category</h1>
            {/* <h1>{name}</h1> */}
            <Loading loading={loading} />
            <div className="frm">
                <div className="header">
                    <h3>CATEGORY</h3>
                </div>
                <div className="body">
                    <TextField
                        id="outlined-name"
                        label="Category Name"
                        size="small"
                        className="frm-control"
                        value={name}
                        onChange={handleChangeName}
                    />
                    <TextField
                        id="outlined-name"
                        label="Image Url"
                        size="small"
                        className="frm-control"
                        value={image}
                        onChange={handleChangeImage}
                    />
                    <TextField
                        id="outlined-name"
                        label="Sort Order"
                        size="small"
                        className="frm-control"
                        value={sort_order}
                        onChange={handleChangeSortOrder}
                    />
                    <TextField
                        id="outlined-name"
                        label="Parent"
                        size="small"
                        className="frm-control"
                        value={parent}
                        onChange={handleChangeParent}
                    />
                    <TextField
                        id="outlined-name"
                        label="Status"
                        size="small"
                        className="frm-control"
                        value={status}
                        onChange={handleChangeStatus}
                    />
                </div>
                <div className="footer">
                    <Button variant="contained" size="small" style={{float:"right"}}
                    onClick={handleSave}
                    >SAVE</Button>
                </div>
            </div>
        </div>
    )
 }

 export default CategoryCreatePage