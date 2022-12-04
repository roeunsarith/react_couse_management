import 'antd/dist/antd.css';
import './App.css';
// import {useState} from 'react'
import { Progress } from 'antd';
function App() {
  // const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
          <Progress percent={50} />
          <Progress percent={50} type='circle'/>
          <Progress percent={50} type='line' strokeColor='red' status='success' />  
          <Progress percent={50} type='line' strokeColor='blue' strokeWidth={20} status='active' />  
          <Progress percent={50} type='circle'  strokeColor='green' status='success' />
          <Progress percent={50} type='circle'  strokeColor='green' status='exception' />
          <Progress percent={33} type='line' steps={3} />  
      </header>
    </div>
  );
}

export default App;
