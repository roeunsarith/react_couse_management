import { LockOutlined, UserOutlined} from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import "./signIn.css"
import { fetchData } from '../../helper';
import { useNavigate } from 'react-router-dom';
const SignInPage =()=>{
    const  navigate = useNavigate()
    const [user,setUser] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState(false)
    const[success, setSuccess] = useState(false)
    const [message,setMessage] = useState("")


    const login =()=>{
        if(user==""){
            setError(true)
            setMessage("Please Input Username")
        }else if(pass==""){
            setError(true)
            setMessage("Please Input Password")
        }
        
        else{
        var data = {
            "username" : user,
            "password" : pass
        }
        fetchData("api/auth/login","POST",data).then(res=>{
            if(res.error){     
                setError(res.error)
                setMessage(res.message)
            }else{    
                setMessage(res.message)
                setSuccess(true)
                setTimeout(() => {
                    navigate('/')
                }, 3000);

                
            }
        })
        }
    }
    const onChangeUser =(e)=>{
        setUser(e.target.value)
        console.log(e.target.value)
    }
    const onChangePass =(e)=>{
        setPass(e.target.value)
    }
    return(
        <>
            {success && <Alert variant="outlined" severity="success" onClose={() => {setSuccess(false)}}>
                    {message}
                </Alert>
            }
            {error && <Alert variant="outlined" severity="error" onClose={() => {setError(false)}}>
                {message}
            </Alert>
            }
            <div className="title">Sign In</div>
            <div className="frm">
                <div className="header">
                    <h3>SIGN IN</h3>
                </div>
                <div className="body">
                    <Form>
                        <FormItem
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" 
                            onChange={onChangeUser}
                            value={user}
                        />
                        </FormItem>     
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            value={pass}
                            onChange={onChangePass}
                            />
                        </Form.Item>
                        <Form.Item name="forgot password">
                            <a>forgot password</a> | <a href="/signin">Sign Up now!</a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="signin-form-button"
                                onClick={login}
                            >
                                Sign Ip
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default SignInPage