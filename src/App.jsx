import './App.css';
import { useState, useEffect } from 'react';
import Students from './Components/Students'



function App() {

const [students, setStudents] = useState([])
const loggedIn = true
const firstName = "Steve"
useEffect(()=> {
fetch('http://localhost:2344/students').then(res=> res.json()).then(data=>{
  setStudents(data)
})
},[])

  return (
    <>
    {loggedIn? "Welcome User":"Login"}
    {/* {loggedIn && "Welcome User"} */}
    {firstName || " Anonymous"}
    <h2 className='header'> Students </h2>
    <Students allStudents={students}/>
    </>
  );
}

export default App;
