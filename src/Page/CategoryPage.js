import {useState,useEffect} from "react"
import axios from "axios"
import "../styles/CategoryPage.css"
import {Link, useNavigate} from "react-router-dom"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Loading from "../components/loading/Loading";
import CancelIcon from '@mui/icons-material/Cancel';
import { fetchData } from "../helper";
function Category (props){
    const [list, setList] = useState([])
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        getList();
    },[])
    const getList = () => {
        setLoading(true)
        fetchData("api/category","GET",{}).then(res=>{
            setLoading(false)
            setList(res.list)
            // alert(res)
        })
        // axios({
        //     url : "https://demo-intern.cleverapps.io/api/category",
        //     method : "GET"
        // }).then(res=>{
        //     if(res.data && res.data.list){
        //         setList(res.data.list)
        //         setLoading(false)
        //     }
        // }).catch(err=>{
        //     console.log(err)
        //     alert("error")
        //     setLoading(false)
        // })
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
        // axios({
        //     url : "https://demo-intern.cleverapps.io/api/category",
        //     method : "DELETE",
        //     data:{
        //         "category_id": item.category_id
        //     }
        // }).then(res=>{
        //     console.log(res)
        //     getList();
        //     setLoading(false)
        // }).catch(err=>{
        //     console.log(err)
        //     setLoading(false)
        // })
    }

    const handleCreate =()=>{
       navigate("/category/create");
    }
    const handleEdit =(item)=>{

        navigate("/category/edit/"+item.category_id);
     }
    return(
        
        <div className="category">
            <Loading loading={loading} />
            <h1 style={{textAlign:"center"}}>Category</h1>
            {/* <Link to="/category/create" ><button >New</button></Link> */}
            <Button variant="contained"  onClick={handleCreate} style={{
                float:"left",
            }}>New</Button>
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
                    
                    <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="right">Parent&nbsp;(g)</TableCell>
                        <TableCell align="right">Image&nbsp;(g)</TableCell>
                        <TableCell align="right">Sort-Order&nbsp;(g)</TableCell>
                        <TableCell align="right">Status&nbsp;(g)</TableCell>
                        <TableCell align="right">Action&nbsp;(g)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {list && list.map((item,index) => (
                        <TableRow
                        key={item.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {index+1}
                        </TableCell>
                        <TableCell align="center">{item.name}</TableCell>
                        <TableCell align="right">{item.parent}</TableCell>
                        <TableCell align="right">{item.image}</TableCell>
                        <TableCell align="right">{item.sort_order}</TableCell>
                        <TableCell align="right">{item.status===1 ? <CheckCircleIcon color='success' /> : <CancelIcon color="error"/>}</TableCell>
                        <TableCell align="right">

                            <Button variant="contained" size="small" onClick={()=>handleEdit(item)}>Edit</Button>
                            {/* <Button variant="contained" size="small" style={{backgroundColor:"red"}} onClick={()=>handleDelete(item)} >DELETE</Button> */}
                            <IconButton aria-label="delete" size="medium" onClick={()=>handleDelete(item)}>
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        
    );
}

export default Category
