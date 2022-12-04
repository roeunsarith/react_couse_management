import { Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useState } from 'react';
import './App.css';
function App() {
  const [loading, setLoading] = useState(false)

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  return (
    <div className="App">
      <header className="App-header">
         <Spin spinning={loading}></Spin>
         <Button 
              type='primary' 
              onClick={()=>setLoading(!loading)}
              >
                Toggle spinning
          </Button>
          <Spin spinning={loading} indicator={antIcon}>
              <p>P tag 1</p>
              <p>P tag 2</p>
              <p>P tag 3</p>
          </Spin>
      </header>
    </div>
  );
}

export default App;
