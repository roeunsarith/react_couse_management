import './App.css';
import {Form, Input, Button, Alert} from 'antd'
import { useState } from 'react';
function App() {
  const [alert, setAlert] = useState(false)

 const onFinish =(e)=>{
    console.log(e)
    setTimeout(()=>{
      setAlert(true)
    }, 2000);
    
 }
  return (
    <div className="App">
      <header className="App-header">
        {alert && <Alert 
          type='error'
          message='Error'
          description='There was on error on login'
          closable
        />}
        <Form 
            onFinish={onFinish} 
            layout="vertical"
            >
            <Form.Item label="Username" name="username" >
              <Input placeholder='Username'></Input>
            </Form.Item>
            
            <Form.Item label="Password" name="password">
              <Input placeholder='Password'></Input>
            </Form.Item>
            <Form.Item>
                <Button block type='primary' htmlType='submit'>Log In</Button>
            </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;
