import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import './App.css';
import Create from './components/create/Create';
import Read from './components/read/Read';




function App() {
  return (
    <div className='main'>
      <div>
        <h3>React crud operation</h3>        
      </div>
      <div>
        <Create />
      </div> 
      <div style={{marginTop :"20px"}}>
        <Read />
      </div>   
    </div>

  );
}

export default App;
