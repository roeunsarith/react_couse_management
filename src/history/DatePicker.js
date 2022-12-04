import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <DatePicker  picker='quarter'/>
          <DatePicker.RangePicker />
      </header>
    </div>
  );
}

export default App;
