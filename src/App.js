import logo from './logo.svg';
import'./App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'

function App(){
    //creating IP state
    const [ip,setIP] = useState('');
    
    //creating function to load ip address from the API
    const getData = async()=>{
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data.IPv4)
    }
    
    useEffect(()=>{
        //passing getData method to the lifecycle method
        getData()
    },[])
    return(
        // <div className = "App">
        //     <h2>Your IP Address is</h2>
        //     <h4>{ip}</h4>
        // </div>
      
    <div className="App">
      
      <header className="App-header">
        <h2>Your IP Address is</h2>
            <h4>{ip}</h4>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React app deployed on IPFS through fleek.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

export default App;

// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           React app deployed on IPFS through fleek.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
