import 'antd/dist/antd.css';
import './App.css';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
function App() {
  const [loading, setLoading] = useState()
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=> response.json())
    .then(data=>{
        setData(data)
    }).catch(err=>{
      console.log(err)
    }).finally(()=>{

    })
  },[])
  const columns =[
    {
      title : "ID",
      dataIndex : "id",
      key: '1'
    },
    {
      title : "User ID",
      dataIndex : "userId",
      key: '2'
    },
    {
      title : "Status",
      dataIndex : "completed",
      key: '3',
      render: (completed) =>{
        return <p>{completed?'complete':'in progress'}</p>
      }
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
         <Table
            columns={columns}
            dataSource={data}
         >

         </Table>
      </header>
    </div>
  );
}

export default App;
