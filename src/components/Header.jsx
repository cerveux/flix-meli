import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';


function Header(props) {

    const [buscador, setBuscador] = useState("")



  return (

    

    
    <header className="App-header">
        <div className="nav-header">
            <div className="parent">
            <div className="logodiv">


                <a className="logo"/>

        
        

            </div>
            <div>
            <form onSubmit={(event)=>event.preventDefault()} >
            <input onChange={(event)=>{
                const valor = event.target.value;
                setBuscador(valor);                

            }} name="title" placeholder="Buscar productos" value={buscador} />
          <button onClick={()=>props.boton(buscador)} className="nav-icon-search" ><SearchIcon /></button>
      </form>
      </div>



      
      </div>
      </div>
    </header>
    
  );
}

export default Header;