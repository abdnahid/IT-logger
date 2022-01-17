import './App.css';
import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'

function App() {
  useEffect(()=>{
    //initialize Materialize JS
    M.AutoInit();
  })
  return (
    <div className="App">
      <h1>Hello there</h1>
    </div>
  );
}

export default App;
