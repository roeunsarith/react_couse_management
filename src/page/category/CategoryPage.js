
import "./category.css"
import { useNavigate } from 'react-router-dom';
import {DeleteOutlined, EditOutlined,CheckCircleOutlined,CloseCircleOutlined,SearchOutlined } from  '@ant-design/icons';
import {fetchData}  from '../../helper';
import { Table , Button} from "@nextui-org/react";
import { useState, useEffect } from 'react';
import Loading from '../../components/loading/Loading';
import { Input, Space } from 'antd';
const { Search } = Input;
// const { Search } = Input;

const CategoryPage =()=>{
    const [list, setList] = useState([])
    const [loading,setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [count, setCount] = useState(7)

    const navigate =useNavigate()

    const handleNew =()=>{
        navigate('/category/create');
    }

    const handleEedit =(item)=>{
        navigate('/category/edit/'+item.category_id);
    }

    useEffect(()=>{
        getList();
    },[search])

    const getList = () => {
        setLoading(true)
        var params = {}
        
        if(search!=='' && search!==null){
            params.name = search
            
        }
        fetchData("api/category/getCategory","POST",params).then(res=>{
            setLoading(false)
            setList(res.list)
        })
    }

    const handleDelete = (item) =>{
        setLoading(true)
        var data = {
                    "category_id": item.category_id
                }
        fetchData("api/category","DELETE",data).then(res=>{
            setLoading(false)
            getList();
        })
    }
    
     const onSearch = ()=>{
        getList();
    }

    const onChangeSearch =(e)=>{
        setSearch(e.target.value);
    }
    // const onSearch = ()=>{
    //     getList();
    // }
    // const bySearch = (list, search) => {
    //     if (search) {
    //       return list.name.toLowerCase().includes(search.toLowerCase());
    //     } else return list;
    // };
    // const filteredList = (list, search) => {
    // return list
    //     .filter(list => bySearch(list, search));
        
    // };
    // const handleCount =(e)=>{
    //     setCount(e.target.value)
    //     console.log(e.target.value);
    // }
    return(
        <>
            <Loading loading={loading} />
            <div className="barTop">

                <Button  shadow color="primary" auto  onClick={()=>handleNew()}>New Category</Button>
                <Space> <Search placeholder="input search text" allowClear onSearch={onSearch} onChange={onChangeSearch} enterButton /> </Space>
                <select  value={count} className="search" style={{width:100}}>
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
                        <Table.Column>IMAGE</Table.Column>
                        <Table.Column>PARENT</Table.Column>
                        <Table.Column>SORT ORDER</Table.Column>
                        <Table.Column>STATUS</Table.Column>
                        <Table.Column width="100">ACTION</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {list && list.map((item,index)=>{
                            return(
                                <Table.Row key={index+1}>
                                    <Table.Cell>{index+1}</Table.Cell>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>{item.image}</Table.Cell>
                                    <Table.Cell>{item.parent}</Table.Cell>
                                    <Table.Cell>{item.od}</Table.Cell>
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
                        total={Math.ceil(list.length/count)}
                        rowsPerPage={count}
                        onPageChange={(page) => console.log({ page })}
                    />
                </Table>
            </div>
        </>
    )
}

export default CategoryPage;