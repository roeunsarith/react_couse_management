 import "../styles/CategoryCreatePage.css"
 import axios from "axios"
 import  { useState, useEffect} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate, useParams} from "react-router-dom"
import Loading from "../components/loading/Loading";
import { fetchData } from "../helper";
 const CategoryEditPage =()=>{
    const navigate = useNavigate()
    const params = useParams()
    const [name, setName] = useState("")
    const [image,setImage] = useState("")
    const [sort_order,setOrder] =useState("")
    const [parent,setParent] =useState("")
    const [status, setStatus] =useState("")
    const [loading, setLoading] =useState(false)
    
    // const [list, setList] = useState([])

    // useEffect(()=>{
    //     getCategoryById()
    // },[]);
    useEffect(()=>{
        getCategoryById();
    } , [ ])
    // const getCategoryById = () =>{
    //     setLoading(true)
    //     axios({
    //         url : "https://demo-intern.cleverapps.io/api/category"+params.id,
    //         method : "GET"
    //     }).then(res=>{
    //         setLoading(false)
    //         if(res.data.list && res.data.list.length>0){
    //             var item = res.data.list[0]; 
    //             setName(item.name)
    //             setImage(item.image)
    //             setOrder(item.sort_order)
    //             setParent(item.parent)
    //             setStatus(item.status)
    //             alert(item.name)
    //         }
    //     }).catch(err=>{
    //         console.log(err)
    //         alert("error")
    //         setLoading(false)
    //     })
    // }
    const getCategoryById = () =>{
        setLoading(true)
        // var url = "api/category/"+params.id
        fetchData("api/category/"+params.id,"GET",{}).then(res=>{
            setLoading(false)
            if(res.list && res.list.length > 0){
                var item = res.list[0];
                setName(item.name);
                setParent(item.parent);
                setImage(item.image);
                setOrder(item.sort_order);
                setStatus(item.status);
            }
        })
    //     axios({
    //     url : "https://demo-intern.cleverapps.io/api/category/"+params.id,
    //     method : "GET",
    //     // data : {}
    // }).then(res=>{
    //     setLoading(false)
    //     console.log(res.data.list)

    //     if(res.data.list && res.data.list.length > 0){
    //         var item = res.data.list[0];
    //         setName(item.name);
    //         setParent(item.parent);
    //         setImage(item.image);
    //         setOrder(item.sort_order);
    //         setStatus(item.status);
    //     }
    //     }).catch(err=>{
    //     console.log(err)
    //     alert("error")
    //     setLoading(false)
    // })
}
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
    const handleUpdate=()=>{
        setLoading(true)
        var data = {
                "category_id": params.id,
                "name": name,
                "parent": parent,
                "image": image,
                "sort_order": sort_order,
                "status": status
        }
        fetchData("api/category","PUT",data).then(res=>{
            navigate('/category')
        })
        // axios({
        //     url : "https://demo-intern.cleverapps.io/api/category",
        //     method : "PUT",
        //     data : {
        //         "category_id": params.id,
        //         "name": name,
        //         "parent": parent,
        //         "image": image,
        //         "sort_order": sort_order,
        //         "status": status
        //     }
        // }).then(res=>{
        //     // setLoading(false)
        //     navigate('/category')
        // }).catch(err=>{
        //     console.log(err)
        //     setLoading(false)
        // })
    }
    return(
        <div className="create">
            <h1>New Category</h1>
            {/* <h1>{name}</h1> */}
            <h3>{params.id}</h3>
            <h3>{name}</h3>
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
                    onClick={handleUpdate}
                    >UPDATE</Button>
                </div>
            </div>
        </div>
    )
 }

 export default CategoryEditPage