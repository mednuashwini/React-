import React,{useState} from 'react';
const Wel = () =>{
  
 
const [name, setName] = useState(
  {
    name : 'bit',
    age: 'reactjs'
  }
);

  return(
    <>
    <h1>name: {name.name} age: {name.age}</h1>
    </>
  )
  }


  


export default Wel
 