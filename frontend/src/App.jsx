import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'react';

// function App() {
//   const [data, setData] = useState(null);
//   const addData = () => {
//     setData("data added Successfully");
//   }
//   return (
//     <>
//       <label>Id : </label>
//       <input type = "text"></input><br></br><br></br>
//       <label>Username : </label>
//       <input type="text"></input><br></br><br></br>
//       <label>Password : </label>
//       <input type = "password"></input><br></br><br></br>
//       <button onClick = {addData}>Submit</button>
//     </>
//   )
// }

function App() {
  const [data, setData] = useState(null);
  const FormData = async(req, res) => {
      try {
        const result = await axios.post("http://localhost:9000/uploads"+ImagePath);
      }
      catch(err) {
        console.log(err);
      }
  }

  return(
    <>
      <input type = "file" onChange={(event) => data = event.target.files[0]}/>
    </>
  )
}



export default App


