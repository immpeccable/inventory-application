import { useState } from 'react';
import './App.css';



function App() {


  const [apiresponse, setapiResponse] = useState("");
  
  async function fetchApi(){

    let response = await fetch("http://localhost:3000/list/category");
    console.log(response);


  }
  
  fetchApi();
  return (
    
    <div>
      hello world 
    </div>
  );
}

export default App;
