import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import Alert from '@mui/material/Alert';
import { useState, } from 'react';
import "./signUp.css"
import { fetchData } from '../../helper';
const SignUpPage =()=>{
    const [user,setUser] = useState("")
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [cpass, setCpass] = useState("")
    const [error, setError] = useState(false)
    const[success, setSuccess] = useState(false)
    const [message,setMessage] = useState("")

    const onChangeUser =(e)=>{
        setUser(e.target.value)
    }
    const onChangeMail =(e)=>{
        setMail(e.target.value)
    }
    const onChangePass =(e)=>{
        setPass(e.target.value)
    }
    const onChangeCpass = (e)=>{
        setCpass(e.target.value)
    }
    const CreateUser =()=>{

        if(pass !== cpass){
            setError(true)
            setMessage("Password not match")
            return
        }else if(user==""){
            setError(true)
            setMessage("Please input username")
        }else if(mail==""){
            setError(true)
            setMessage("Please input E-mail")
        }else if(pass==""){
            setError(true)
            setMessage("Please input password")
        }else if(cpass==""){
            setError(true)
            setMessage("Please input confirm password")
        }
        else{ 
            var data = {
                "username" : user,
                "email" : mail,
                "password" : pass,
                "confirm_password" : cpass
            }
            fetchData("api/auth/createUser","POST",data).then(res=>{
                if(res.error){
                    
                    setError(res.error)
                    setMessage(res.message)
                    if(res.message.password){
                        setMessage(res.message.password)
                    }
                }else{    
                    setMessage(res.message)
                    setSuccess(true)
                }
                handleClear()
            })
        }
    }
    const handleClear =()=>{
        setUser("")
        setMail("")
        setPass("")
        setCpass("")
    }
    return(

        <div className='signUp'>
            {error && <Alert variant="outlined" severity="error" onClose={() => {setError(false)}}>
                {message}
            </Alert>
            }

            {success && <Alert variant="outlined" severity="success" onClose={() => {setSuccess(false)}}>
                {message}
                </Alert>
            }
            <div className="title">Sign Up</div>
            <div className="frm">
                <div className="header">
                    <h3>SIGN UP</h3>
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
                        <Input 
                            value={user}
                            prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"    
                            onChange={onChangeUser}
                        />
                        </FormItem>
                
                        <Form.Item name="email"
                            rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                            ]}>
                            <Input
                                value={mail}
                                prefix={<MailOutlined  className="site-form-item-icon" />}
                                type="E-mail"
                                onChange={onChangeMail}
                                placeholder="E-mail"
                            />  
                        </Form.Item>
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
                                value={pass}
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                onChange={onChangePass}
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="confirm password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                                value={cpass}
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                onChange={onChangeCpass}
                                placeholder="Confirm Password"
                            />
                        </Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button"
                            onClick={CreateUser}
                        >
                        Sign Up
                        </Button>
                        Or <a href="/signin">Sign In now!</a>
                    </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage