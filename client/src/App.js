// import React from 'react';
import './App.css';
import { useState, useEffect} from "react"

function App() {
  const [data, setData] = useState(null) //this makes a variable called data and sets value to the string
  //This is how to udate the DOM once you get a response

  useEffect(() => {
    fetch('/users/42')
      .then((res) => res.json())
      .then((data) => {
      console.log(data);
      setData(data);
      });
    }, []);


  return (
    <div className="App">
      <h1>{!data ? 'Loading...' : data.firstName}</h1>
      <h2>{!data ? 'Loading...' : data.lastName}</h2>
      <h4>{!data ? 'Loading...' : data.age}</h4>
      <h4>{!data ? 'Loading...' : data.favColor}</h4>
    </div>
  );
}

export default App;
