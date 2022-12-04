import "./home.css"
import {  HomeOutlined, FolderAddOutlined,ReconciliationOutlined} from '@ant-design/icons';
import { Button  } from 'antd';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../helper";
import Loading from "../../components/loading/Loading";
const HomePage =()=>{
    const navigate = useNavigate()
    const [loading, setLoading] = useState()
    const [cate, setCate] = useState([])
    const [course, setCourse] = useState([])
    const handleCategory  =()=>{
        navigate('/category')
    }

    const handleCourse  =()=>{
        navigate('/course')
    }
    useEffect(()=>{
        getList();
    },[])
    const getList =()=>{
            setLoading(true)
            fetchData("api/course","GET",{}).then(res=>{
                setLoading(false)
                setCate(res.category)
                var data = res.list
                setCourse(data)
            })
        }
    return(
        <>
            <Loading loading={loading} />
            <div className="barTop">
                <div className="titles">Category</div>
            </div>
            <div className="cards">
                <div className="card" style={{backgroundColor:"#f44336"}}>
                    <div className="name">
                        HOME
                    </div>
                    <div className="profile">
                        <div className="box">
                            <HomeOutlined />
                        </div>
                        <div className="num">
                                <h2>0</h2>
                                <Button type="primary">View All</Button>
                        </div>
                    </div>
                    
                </div>
                <div className="card">
                    <div className="name">
                        CATEGORY
                    </div>
                    <div className="profile">
                        <div className="box">
                            <FolderAddOutlined />
                        </div>
                        <div className="num">
                            <h2>{cate && cate.length}</h2>
                            <Button type="primary" onClick={handleCategory}>View All</Button>
                        </div>
                    </div>
                    
                </div>
                <div className="card" style={{backgroundColor:"#9c27b0"}}>
                    <div className="name">
                        SUB-CATEGORY
                    </div>
                    <div className="profile">
                        <div className="box">
                            <FolderAddOutlined />
                        </div>
                        <div className="num">
                            <h2>0</h2>
                            <Button type="primary" >View All</Button>
                        </div>
                    </div>
                    
                </div>
                <div className="card" style={{backgroundColor:"#3f51b5"}}>
                    <div className="name">
                        COURSES
                    </div>
                    <div className="profile">
                        <div className="box">
                            <ReconciliationOutlined />
                        </div>
                        <div className="num">
                            <h2>{course && course.length}</h2>
                            <Button type="primary" onClick={handleCourse}>View All</Button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default HomePage