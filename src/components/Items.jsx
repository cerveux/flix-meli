import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Axios from "axios";


function Items(props){

  const [open, setOpen] = React.useState(false);
  const [detalle, setDetalle] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };






    return (
        <ol className="ui-search-layout ui-search-layout--stack">
        {props.items.map(item => (
          <li onClick={()=>{
              
            Axios.get("https://api.mercadolibre.com/items/"+item.id+"/description").then(response=>{
                
                const {plain_text} = response.data;
                setDetalle(plain_text);
                
          
              })

              



              handleOpen()
              }} className="ui-search-layout__item" key={item.id}>
              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {detalle}
          </Typography>
        </Box>
      </Modal>
            <div className="ui-search-result__wrapper">

            <div className="andes-card">
            <div className="ui-search-result__image">
            <img width="160" height="160" className="ui-search-result-image" src={item.thumbnail} alt="Moto E6 Play 32 GB azul 2 GB RAM"/>
            </div>
            <div className="content-wrapper">
            <div className="serched-item-title">

            {item.title}

            </div>
            <div className="bloque-precio" ></div>
            $ {new Intl.NumberFormat("es-ES").format(item.price)}

            </div>
            


              {/* {item.id} */}

            </div>

            </div>

            
          </li>
        ))}
      </ol>
    )

}

export default Items;