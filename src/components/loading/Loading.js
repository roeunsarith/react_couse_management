import "./loading.css"
// import { LoadingOutlined } from '@ant-design/icons';
// import { Spin } from 'antd';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
const Loading =(props)=>{
    return(
        <div className="loading">
             
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={props.loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            
            {/* {props.loading && <div><Spin><LoadingOutlined /></Spin></div>} */}
        </div>
    )
}

export default Loading