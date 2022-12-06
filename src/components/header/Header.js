
import { Link, useLocation } from "react-router-dom"
import "./header.css"
import { MenuOutlined, HomeOutlined, FolderAddOutlined,ReconciliationOutlined} from '@ant-design/icons';
import { Space} from 'antd';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Popover, Button, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
const Header =(props)=>{

    const loaction = useLocation()
    const pathname = loaction.pathname;
    const navigate = useNavigate()
    const handleSignIn =()=>{
        navigate('/signin')
    }

    const handleSignUp =()=>{
        navigate('/signup')
    }
    return(
        <>
            <div className="topBar">
                <div style={{fontSize:20}}><MenuOutlined /></div>
                {/* <ul>
                    <li>
                        <Link to={'/signup'} className={pathname === '/signup' && 'active'}>Sign Up</Link>
                    </li>
                    <li >
                        <Link to={'/signin'} className={pathname === '/signin' && 'active'}>Sign In</Link>
                    </li>
                    <li> */}
                    {/* <Avatar
                        // sx={{ bgcolor: deepOrange[500] }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                    /> */}
                    <Space size='large'>
                    {/* </li> */}
                    
                    <IconButton aria-label="100">
                        {/* <Badge badgeContent={100} color="secondary"> */}
                            <DarkModeIcon />
                        {/* </Badge> */}
                    </IconButton>
                    <IconButton aria-label="100">
                        <Badge badgeContent={100} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    
                    <Popover isBordered disableShadow>
                        <Popover.Trigger>
                            <IconButton aria-label="100">
                                <Avatar src="/broken-image.jpg" sx={{ width: 30, height: 30 }} />
                            </IconButton>
                        </Popover.Trigger>
                        <Popover.Content>
                            {/* <Text css={{ p: "$10" }}>This is the content of the popover.</Text> */}
                            <div className="button">
                                <Button shadow size="sm" auto onClick={handleSignIn}>SIGN IN</Button>
                                <Button shadow size="sm" auto onClick={handleSignUp}>SIGN UP</Button>
                            </div>
                         
                        </Popover.Content>
                    </Popover>
                    </Space>
                    
                {/* </ul> */}
            </div>
            <div className="leftMenu">
                <div className="logo">
                    CRONO
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <Link to={'/'} className={pathname === '/' && 'active'}>
                                <Space size={"large"}>
                                    <HomeOutlined /> <span>Home</span>
                                </Space>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/category'} className={(pathname === "/category" || pathname === "/category/create") && "active"}>
                                <Space size={"large"}>
                                    <FolderAddOutlined /> <span>Category</span>
                                </Space>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/course'} className={(pathname === '/course'|| pathname==='/course/create') && 'active'}>
                                <Space size={"large"}>
                                <ReconciliationOutlined /> <span>Course</span>
                                </Space>
                            </Link>
                        </li>
                    </ul>  
                </div>
            </div>
            <div className="containBody">
                {props.children}
            </div>
        </>
    )
}

export default Header