
import './App.css';
import { Table } from 'antd';

function App() {
  const data = [
    {
      name: 'Sai',
      age: 10,
      address : 'kampong thom',
      key : '1'
    },
    {
      name: 'Sait',
      age: 11,
      address : 'kampong thom',
      key : '2'
    },
    {
      name: 'Saith',
      age: 12,
      address : 'kampong thom',
      key : '3'
    }

  ]


  const column =[
    {
      title : "Name",
      dataIndex : "name",
      key: 'key',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title : "Age",
      dataIndex : "age",
      key: 'key',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title : "Address",
      dataIndex : "address",
      key: 'key'
    },
    {
      title : "Status",
      key : 'key',
      render: payload =>{
        return <p>{payload.age >10?'true':'false'}</p>
      }
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
        <Table 
          dataSource={data}
          columns={column}
          pagination={{
          pageSize: 1,
          }}
        >

        </Table>
      </header>
    </div>
  );
}

export default App;
