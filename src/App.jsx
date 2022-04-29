import React, { useEffect, useState, Component } from "react";
import './App.css';
import Header from "./components/Header";
import Items from "./components/Items";
import Axios from "axios";

function App() {
  const url = "https://api.mercadolibre.com/sites/MLA/search?q=";
  const [items, setItems] = useState([]);

  

  async function get(value){   

    Axios.get(url+value).then(response=>{
      console.log(response.data);
      const {results} = response.data;
      setItems(results.slice(0, 4));

    })


  }

  
    return (
      
      <div className="App">
        <Header boton={get} />
        holo


        <Items  items={items} />
        

          


          
    </div>
    );
  }



export default App;




