import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import Footer from './components/footer';
import Main from './components/mainpage';
import RouteController from './components/RouterControl';


function App() {


  
  return (
    
    <div>
      <Header></Header>
      <RouteController></RouteController>
      <Footer></Footer>
      
    </div>
    
    
  );
}

export default App;
