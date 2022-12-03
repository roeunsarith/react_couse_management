import "./loading.css"
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
            
            {/* {props.loading && <div><CircularProgress /></div>} */}
        </div>
    )
}

export default Loading