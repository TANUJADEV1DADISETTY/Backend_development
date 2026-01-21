// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import axios from 'axios';
// import { GenerateToken } from '../../Backend2/controllers/tokenController';

// // function App() {
// //   const [data, setData] = useState(null);
// //   const addData = () => {
// //     setData("data added Successfully");
// //   }
// //   return (
// //     <>
// //       <label>Id : </label>
// //       <input type = "text"></input><br></br><br></br>
// //       <label>Username : </label>
// //       <input type="text"></input><br></br><br></br>
// //       <label>Password : </label>
// //       <input type = "password"></input><br></br><br></br>
// //       <button onClick = {addData}>Submit</button>
// //     </>
// //   )
// // }

// // function App() {
// //   const [data, setData] = useState(null);
// //   const FormData = async(req, res) => {
// //       try {
// //         const result = await axios.post("http://localhost:9000/uploads"+ImagePath);
// //       }
// //       catch(err) {
// //         console.log(err);
// //       }
// //   }

// //   return(
// //     <>
// //       <input type = "file" onChange={(event) => data = event.target.files[0]}/>
// //     </>
// //   )
// // }


// function App() {
//   const GenerateToken = async() => {
//       try{
//           const result = await axios.get("http://localhost:9000/get-token");
//           console.log(result);
//       }
//       catch(err) {
//           console.log(err);
//       }
//   }

//   return(
//     <>
//       <button onClick = {GenerateToken}>Create Token</button>

//     </>
//   )
// }



// export default App


import axios from "axios";

function App() {
  const GenerateToken = async () => {
    try {
      const result = await axios.get("http://localhost:9000/get-token", {
        withCredentials:true
      });
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const Verify = async() => {
    try {
        const result = await axios.get("http://localhost:9000/verify-token", {
          withCredentials:true
        })
        console.log(result);
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <button onClick={GenerateToken}>Create Token</button>
      <button onClick = {Verify}>Verify Token</button>
    </>
  );
}

export default App;
