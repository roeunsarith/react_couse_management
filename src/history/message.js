
import './App.css';
import { Button, Form, message } from 'antd';
import Input from 'rc-input';

function App() {
  // const [data, setData] = useState([])
  const onFinish =(e)=>{
    // console.log(e)
    // setData(e)
    setTimeout(() => {
      message.success("Login Success")
      // message.error("Login Error")
      // message.warning("Login fail")


    }, 2000);
  }
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>{data.password}</p> */}
        <Form 
            onFinish={onFinish} 
            layout="vertical"
            onFinishFailed={onFinishFailed}
            autoComplete="off"
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
