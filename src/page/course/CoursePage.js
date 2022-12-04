import {  Space } from 'antd';
import { Button ,Input } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import {DeleteOutlined, EditOutlined, CloseCircleOutlined, CheckCircleOutlined, SearchOutlined} from  '@ant-design/icons';
import { Table } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import Loading from '../../components/loading/Loading';
import {fetchData} from '../../helper';
import './course.css'

const CoursePage =()=>{
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [cate, setCate] = useState()
    const [cateId, setCateId] = useState()
    const [list, setList] = useState([])
    const [search, setSearch] = useState()
    const [count, setCount] = useState(7)
    const handleNew =()=>{
        navigate('/course/create');
    }

    const handleEedit =(item)=>{
        navigate('/course/edit/'+item.course_id);
    }
    
    useEffect(()=>{
        getList();
    },[])
     const handleChange =(event)=>{
        setCateId(event.target.value)
        setCount(7)
    }
    const getList =()=>{
            setLoading(true)
            fetchData("api/course","GET",{}).then(res=>{
                setLoading(false)
                setCate(res.category)
                var data = res.list
                setList(data)
            })
        }

    const handleDelete = (item) =>{
        setLoading(true)
        var data = {
                    "course_id": item.course_id
                }
        fetchData("api/course","DELETE",data).then(res=>{
            setLoading(false)
            getList();
        })
    }
    const onKeyUp =(e)=>{
        setSearch(e.target.value)
        setCount(7)
    }
    const byCategory = (list, cateId) => {
        if (cateId) {
          return list.category_id == cateId;
        } else return list;
      };
      const bySearch = (list, search) => {
        if (search) {
          return list.name.toLowerCase().includes(search.toLowerCase());
        } else return list;
      };
    
      const filteredList = (list, cateId, search) => {
        return list
          .filter(list => byCategory(list, cateId))
          .filter(list => bySearch(list, search));
      };
    const handleCount =(e)=>{
        setCount(e.target.value)
    }
    return(
        <>
            <Loading loading={loading} />
            <div className="barTop">
                <Button shadow color="primary" onClick={handleNew} auto>
                    New Course
                </Button>
                <Space>  
                    <select placeholder='Category' value={cateId} className="search"
                        onChange={handleChange}>
                            <option value="">All Category</option>
                            {cate && cate.map((item, index)=>{
                                return(
                                    <option value={item.category_id}>{item.name}</option>
                                )
                            })
                        }
                    </select>
                    <Input 
                    onChange={onKeyUp} value={search} enterButton
                    labelRight={<SearchOutlined style={{cursor: 'pointer'}}/>} 
                    placeholder="Seacrh here" 
                    />
                </Space>
                <select  value={count} className="search" style={{width:100}}
                        onChange={handleCount}>
                        <option value="7">7</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                </select>       
            </div>
            <div className='tbData'>
                <Table
                    bordered
                    shadow={false}
                    color="secondary"
                    aria-label="Example pagination  table"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                    selectionMode="single"
                    >
                    <Table.Header>
                    <Table.Column>#</Table.Column>
                        <Table.Column>NAME</Table.Column>
                        <Table.Column>PRICE</Table.Column>
                        <Table.Column>CATEGORY</Table.Column>
                        <Table.Column>DESCIPTION</Table.Column>
                        <Table.Column>STATUS</Table.Column>
                        <Table.Column width="100">ACTION</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {list && filteredList(list, cateId, search).map((item,i)=>{
                            return(
                                <Table.Row key={i+1}>
                                    <Table.Cell>{i+1}</Table.Cell>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>{item.full_price}</Table.Cell>
                                    <Table.Cell>{item.category_name}</Table.Cell>
                                    <Table.Cell>DES</Table.Cell>
                                    <Table.Cell> {item.status===1 ? <CheckCircleOutlined style={{fontSize:20,color:"green"}} /> : <CloseCircleOutlined style={{fontSize:20,color:"red"}} />}</Table.Cell>
                                    <Table.Cell>
                                        <Space size={'small'}>
                                            <Button  shadow color="primary" auto size='sm' onClick={()=>handleEedit(item)}><EditOutlined />Edit</Button>
                                            <Button shadow color="error" auto size='sm' onClick={()=>handleDelete(item)}><DeleteOutlined />Delete</Button>
                                        </Space>
                                    </Table.Cell>
                                </Table.Row>
                                )
                        })}
                        
                    </Table.Body>
                    <Table.Pagination
                        shadow
                        noMargin
                        align="center"
                        total={Math.ceil(filteredList(list, cateId, search).length/count)}
                        rowsPerPage={count}
                        onPageChange={(page) => console.log({ page })}
                    />
                </Table>
            </div>    
        </>
    )
}

export default CoursePage
