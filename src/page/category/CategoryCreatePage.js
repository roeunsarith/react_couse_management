// import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import {  ReconciliationOutlined, PictureOutlined } from '@ant-design/icons';
import { Button, Form, Input ,Radio,Space } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { fetchData } from '../../helper';
import Loading from '../../components/loading/Loading';
const CategoryCreatePage =()=>{
    const navigate = useNavigate()
    const handleCancel =()=>{
        navigate('/category')
    }
    const [name, setName] = useState("")
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
    const handleSave=()=>{
        if(name ==null){
            return
        }else if(image==""){
            return 
        }else if(parent==""){
            return
        }else if(sort_order==""){
            return
        }else if(status==""){
            return
        }else{
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
            // alert(res.message);//message
            navigate('/category')
        })
    
        }
    }
    return(
        <>  <Loading loading={loading} />
            <div className="title">Create New Category</div>
            <div className="frm">
                <div className="header">
                    <h3>Category</h3>
                </div>
                <div className="body">
                    <Form>
                        <FormItem
                            name="category name"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your category name!',
                            },
                            ]}
                        >
                        <Input prefix={<ReconciliationOutlined className="site-form-item-icon" />}             
                            placeholder="Category Name"
                            onChange={handleChangeName}
                            value={name}
                        /> 
                        </FormItem>
                
                        <Form.Item name="image"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Image!',
                            },
                            ]}>
                            <Input
                                prefix={<PictureOutlined    className="site-form-item-icon" />}
                                type="text"
                                placeholder="Image"
                                value={image}
                                onChange={handleChangeImage}

                            />  
                        </Form.Item>
                        <Form.Item name="parent"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Parent!',
                            },
                            ]}>
                            <Input
                                prefix={<PictureOutlined    className="site-form-item-icon" />}
                                type="parent"
                                placeholder="Parent"
                                value={parent}
                                onChange={handleChangeParent}

                            />  
                        </Form.Item>
                        <Form.Item name="sort_order"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Sort Order!',
                            },
                            ]}>
                            <Input
                                prefix={<PictureOutlined    className="site-form-item-icon" />}
                                type="sort"
                                placeholder="Sort Order"
                                onChange={handleChangeSortOrder}

                            />  
                        </Form.Item>
                        <Form.Item name="status" label="Status" 
                            rules={[
                                {
                                    required: true,
                                    message: 'Please click your Status!',
                                },
                                ]}>
                        
                            
                            <Radio.Group onChange={handleChangeStatus} value={status}>
                                <Radio value="1"> Active </Radio>
                                <Radio value="2"> Disable </Radio>
                            </Radio.Group>
                        </Form.Item>
                        
                        <Form.Item>
                            <Space size={'large'}>
                                <Button type="primary" htmlType="submit" className="saveEdit" onClick={handleSave}>
                                    Save
                                </Button>
                                <Button onClick={handleCancel} className="saveEdit">
                                    Cencel
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default CategoryCreatePage