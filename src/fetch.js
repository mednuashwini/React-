import React,{useState,useEffect } from 'react';

 const Fet = ()=>{
  const [data,setData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => setData(json));

    return(
  <div>
    {
      data.map 
      ((item) => <li key={item.id}>{item.title}</li>)
    }
  </div>
 )

 }
 
 export default Fet