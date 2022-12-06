
import { Radio,Space } from 'antd';
import { Input, Spacer, Button } from "@nextui-org/react";
import TextArea from 'antd/lib/input/TextArea';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {fetchData} from '../../helper'
const CourseCreatePage =()=>{
    const [name,setName] = useState("")
    const [cate, setCate] = useState("")
    const [status, setStatus] = useState("")
    const [price, setPrice] = useState("")
    const [listCate, setListCate] = useState()
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const handleChangeName =(event)=>{
        setName(event.target.value)
    }
    const handleChangeCate =(event)=>{
        setCate(event.target.value)
        console.log(event.target.value)
    }
    const handleChangePrice =(event)=>{
        setPrice(event.target.value)
    }
    const handleChangeStatus =(event)=>{
        setStatus(event.target.value)
    }
    const handleCancel =()=>{
        navigate('/course')
    }

    useEffect(()=>{
        getCate();
    },[])

    const getCate =()=>{
        fetchData("api/course","GET",{}).then(res=>{
            setListCate(res.category);
        })
    }
    const handleSave =()=>{
        if(name==""){
            setError(true)
            return
        }else if(price==""){
            setError(true)
            return
        }else{
        var data = {
            "name" : name,
            "category_id" : cate,
            "full_price" : price,
            "status" : status,
            "desciption" : ""
        }
        fetchData("api/course","POST",data).then(res=>{
            navigate('/course')
        })
        }
    }
    return(
        <>
            <div className="title">Create New Course</div>
            <div className="frm">
                <div className="header">
                    <h3>Course</h3>
                </div>
                <div className="body">
                        <div className='frm-control'>
                           
                            <Spacer y={0.5} />
                            <Input 
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
                            <select placeholder='Category' value={cate} className="frm-in"
                                onChange={handleChangeCate}
                                helperText={error && "Please select Category"}
                            >
                                <option value={0}>Select Category</option>

                                {listCate && listCate.map((item, index)=>{
                                    return(
                                        <option value={item.category_id}>{item.name}</option>
                                    )
                                })
                                    
                                }
                            </select>
                        </div>
                        <div className='frm-control'>
                            <TextArea rows={3} 
                                type="desciption"
                                placeholder="Description"
                                helperText={error && "Please click status"}
                            />
                        </div>
                        <div className='frm-control'>
                            <Radio.Group onChange={handleChangeStatus} value={status}>
                                <Radio value={1}> Active </Radio>
                                <Radio value={2}> Disable </Radio>
                            </Radio.Group>
                        </div>                  
                    {/* </Form> */}
                </div>
                <div className="footer">
                   <Space size={'large'}>
                        <Button shadow color="primary" onClick={handleSave} auto>
                            Save
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

export default CourseCreatePage