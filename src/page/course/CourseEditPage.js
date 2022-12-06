
import { Space, Radio } from 'antd'; //Select
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Input, Spacer, Button } from "@nextui-org/react";
import { fetchData } from '../../helper';
import Loading from '../../components/loading/Loading'

const CourseEditPage =()=>{
    const navigate = useNavigate()
        const params = useParams()
        const [name, setName] = useState("")
        // const [cate_name,setCate] = useState("")
        const [cate_id,setCateId] = useState("")
        const [price,setPrice] =useState("")
        const [status, setStatus] =useState("")
        const [loading, setLoading] =useState(false)
        const [list, setList] = useState()
        const [error, setError] = useState(false)

        useEffect(()=>{
            getCourseById();
            getList()
        } , [ ])
        const getCourseById = () =>{
            setLoading(true)
            fetchData("api/course/"+params.id,"GET",{}).then(res=>{
                setLoading(false)
                if(res.list && res.list.length > 0){
                    var item = res.list[0];
                    setName(item.name);
                    setPrice(item.full_price);
                    setCateId(item.category_id);
                    setStatus(item.status);
                }
            })
        }
        const getList =()=>{
            fetchData("api/course/","GET",{}).then(res=>{
                    setList(res.category)
            })
        }
        const handleChangeName =(event)=>{
            setName(event.target.value)
        }
        const handleChangePrice =(event)=>{
            setPrice(event.target.value)
        }
        const handleChangeCategory =(event)=>{
            setCateId(event.target.value)
            console.log(event.target.value)
        }
        const handleChangeStatus =(event)=>{
            setStatus(event.target.value)
        }
        const handleUpdate=()=>{
            // setLoading(true)
            if(name==""){
                setError(true)
                return
            }else if(price==""){
                setError(true)
                // alert("Please input price");
                return
            }
            else{
                var data = {
                        "course_id": params.id,
                        "name": name,
                        "category_id": cate_id,
                        "full_price": price,
                        "status": status
                }
                fetchData("api/course","PUT",data).then(res=>{
                    navigate('/course')
                })
            }
        }
    const handleCancel =()=>{
        navigate('/course')
    }
    return(
        <>
            <Loading loading={loading} />
            <div className="title">Edit Course</div>
            <div className="frm">
               <div className="header">
                   <h3>COURSE</h3>
               </div>
               <div className="body">
                   <div className="frm-control">
                        <Spacer y={0.5} />
                            <Input 
                                type="name"
                                size="md" 
                                width="100%"
                                value={name}
                                placeholder="Enter course name" 
                                helperText={error && "Please input Course"}
                                onChange={handleChangeName}
                            />
                   </div>
                   <div className='frm-control'>
                        <Spacer y={0.5} />
                            <Input 
                                type="price"
                                size="md" 
                                width="100%"
                                placeholder="Enter price" 
                                value={price}
                                helperText={error && "Please input Price"}
                                onChange={handleChangePrice}
                            />
                   </div>
                   <div className='frm-control'>
                    <Spacer y={0.5} />
                    <select placeholder='Category' value={cate_id} className="frm-in"
                    onChange={handleChangeCategory}
                    >
                        {list && list.map((item, index)=>{
                            return(
                                <option value={item.category_id}>{item.name}</option>
                            )
                        })
                            
                        }
                    </select>
                   </div>
                   <div className='frm-control'>
                        <Spacer y={0.5} />
                        <Radio.Group value={status }
                            onChange={handleChangeStatus}>
                                <Radio value={1}> Active </Radio>
                                <Radio value={0}> Disable </Radio>
                        </Radio.Group>
                   </div>
               </div>
               <div className="footer">
               <Spacer y={0.5} />
                   <Space size={'large'}>
                        <Button shadow color="primary" onClick={handleUpdate} auto>
                            UPDATE
                        </Button>
                        <Button shadow bordered onClick={handleCancel} auto>
                            Cencel
                        </Button>
                   </Space>
               </div>
           </div>
        </>
    )
}

export default CourseEditPage