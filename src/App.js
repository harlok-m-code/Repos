import axios from 'axios';
import React from 'react';
import Data from './components/Data';
import Table from './components/Table';
import logo from './logo.svg';

function App() {

  const [data,setData] = React.useState([]);
  const [check,setChek] = React.useState(true);
  const [rowItem,setRowItem] = React.useState('');

  const sortData = (items) => {



    if(check){
      const sorte = data.sort((a,b)=> {
        return a[items] > b[items] ? 1 : -1
      });
      setData(sorte);
      setChek(!check);
    }else{
      const sorte = data.reverse((a,b)=> {
        return a[items] > b[items] ? 1 : -1
      });
      setData(sorte);
      setChek(!check);
    }
  }

  React.useEffect(()=>{
    axios.get('http://localhost:3001/db.json').then(
      ({data})=> {
        setData(data);
      }
    )
  },[])

  const del =13;


  const detRow = (row) => {
    setRowItem(row);
  }



  return (
    <div className="container">
      <Table data={data} sortData={sortData} detRow={detRow}></Table>
      <Data rowItem={rowItem}></Data>
    </div>
  );
}

export default App;

axios.get().then(({data})=>{
  
})