import './category.css'
import  { useState, useEffect} from "react"
import TextField from '@mui/material/TextField';
import { Space, Radio } from 'antd';
import Button from '@mui/material/Button';
import {useNavigate, useParams} from "react-router-dom"
import Loading from "../../components/loading/Loading";
import { fetchData } from "../../helper";
const CategoryEditPage =()=>{
   const navigate = useNavigate()
   const params = useParams()
   const [name, setName] = useState("")
   const [image,setImage] = useState("")
   const [sort_order,setOrder] =useState()
   const [parent,setParent] =useState()
   const [status, setStatus] =useState()
   const [loading, setLoading] =useState(false)
   
   useEffect(()=>{
       getCategoryById();
   } , [ ])
   const getCategoryById = () =>{
       setLoading(true)
       fetchData("api/category/getCategory/"+params.id,"GET",{}).then(res=>{
           setLoading(false)
           if(res.result && res.result.length > 0){
               var item = res.result[0];
               setName(item.name);
               setParent(item.parent);
               setImage(item.image);
               setOrder(item.od);
               setStatus(item.status);
           }
       })
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
               "parent": parseInt(parent),
               "image": image,
               "od": parseInt(sort_order),
               "status": parseInt(status)
       }
       fetchData("api/category/updateCategory","POST",data).then(res=>{
           navigate('/category')
       })
   }
   const handleCancel =()=>{
        navigate('/category')
   }
   return(
       <>
            <div className="title">Update Category</div>
            <Loading loading={loading} />
           <div className="frm">
               <div className="header">
                   <h3>CATEGORY</h3>
               </div>
               <div className="body">
                   <div className="frm-control">
                        <TextField
                            id="outlined-name"
                            label="Category Name"
                            size="small"
                            className='frm-in'
                            value={name}
                            onChange={handleChangeName}
                        />
                   </div>
                   <div className='frm-control'>
                        <TextField
                            id="outlined-name"
                            label="Image Url"
                            size="small"
                            className="frm-in"
                            value={image}
                            onChange={handleChangeImage}
                        />
                   </div>
                   <div className='frm-control'>
                        <TextField
                            id="outlined-name"
                            label="Sort Order"
                            size="small"
                            className="frm-in"
                            value={sort_order}
                            onChange={handleChangeSortOrder}
                        />
                   </div>
                   <div className='frm-control'>
                        <TextField
                            id="outlined-name"
                            label="Parent"
                            size="small"
                            className="frm-in"
                            value={parent}
                            onChange={handleChangeParent}
                        />
                   </div>
                   <div className='frm-control'>
                        <Radio.Group value={status }
                            onChange={handleChangeStatus}>
                                <Radio value={1}> Active </Radio>
                                <Radio value={0}> Disable </Radio>
                        </Radio.Group>
                   </div>
               </div>
               <div className="footer">
                   <Space size={'large'}>
                        <Button variant="contained" size="small" onClick={handleUpdate}
                        >UPDATE</Button>
                        <Button variant="outlined" size="small" onClick={handleCancel}
                        >Cencel</Button>
                   </Space>
               </div>
           </div>
       </>
   )
}

export default CategoryEditPage