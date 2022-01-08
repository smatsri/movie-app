import React, { useEffect } from 'react';

import './App.css';
import axios from "axios";

function App() {
  useEffect(() => {
    const run = async () => {

      const res = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=9b7900cd166d37a6bbdefb32326ad272&query=big%20leb')
      console.log(res.data);
      
    };
    run();
    
  }, []);

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
