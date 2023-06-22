import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import citasVeterinaria from "../assets/citas veterinaria.png"
import controlDeGastos from "../assets/control de gastos.png"
import cotizadorDeMonedas from "../assets/cotizador de monedas.png"
import { FaGithub } from "react-icons/fa";
import "../styles/Work.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%', display:"flex",justifyContent:"center", marginTop:"5%", marginBottom:"5%"}}>
      <Grid  className= "conteine-card-work" container  columnSpacing={{ sm: 10, md:4}}>
        <Grid sx={{padding:"1rem 5rem"}} xs={12}>
          <Item className='iten-work'>
            <div >
              <img style={{padding:"5px"}} src={citasVeterinaria} alt="" width="100%" height="100%"/>
            </div>
            <div style={{padding:"10px"}}>
              <h1 style={{color:"white"}}>Citas Veterinaria</h1>
            <p className='text-card-work'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis obcaecati qui corporis aliquid recusandae laudantium ipsum, sunt officiis cumque, temporibus nesciunt. Hic, doloremque odio omnis similique nemo sed a repellat?</p>
            <div className="conteiner-links-works">
               <a className='enlace-work' href="https://citas-veterianria.netlify.app/" target="_blank">Link</a>
            <a className='enlace-github-work' href="https://github.com/cristian-23/cistas_veterinaria_react" target="_blank"><FaGithub style={{marginRight:"2px"}}/> GitHub</a>
            </div>
           
            </div>         
          </Item>
        </Grid>
        <Grid sx={{padding:"1rem 5rem"}} xs={12}>
        <Item className='iten-work'>
            <div>
              <img style={{padding:"5px"}} src={controlDeGastos} alt="" width="100%" height="100%"/>
            </div>
            <div style={{padding:"10px"}}>
              <h1 style={{color:"white"}}>Control De Gastos</h1>
            <p className='text-card-work'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis obcaecati qui corporis aliquid recusandae laudantium ipsum, sunt officiis cumque, temporibus nesciunt. Hic, doloremque odio omnis similique nemo sed a repellat?</p>
            <div className="conteiner-links-works">
               <a className='enlace-work' href="https://planificador-de-gasto.netlify.app/" target="_blank">Link</a>
            <a className='enlace-github-work' href="https://github.com/cristian-23/Planificador-De-Gastos" target="_blank"><FaGithub style={{marginRight:"2px"}}/> GitHub</a>
            </div>
            </div>
            
          </Item>
        </Grid>
        <Grid sx={{padding:"1rem 5rem"}}  xs={12}>
        <Item className='iten-work'>
            <div>
              <img style={{padding:"5px"}} src={cotizadorDeMonedas} alt="" width="100%" height="100%"/>
            </div>
            <div style={{padding:"10px"}}>
              <h1 style={{color:"white"}}>Cotizador De Monedas</h1>
            <p className='text-card-work'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis obcaecati qui corporis aliquid recusandae laudantium ipsum, sunt officiis cumque, temporibus nesciunt. Hic, doloremque odio omnis similique nemo sed a repellat?</p>
             <div className="conteiner-links-works">
               <a className='enlace-work' href="https://criptos-react-03.netlify.app/" target="_blank">Link</a>
            <a className='enlace-github-work' href="https://github.com/cristian-23/Criptos-React" target="_blank"><FaGithub style={{marginRight:"2px"}}/> GitHub</a>
            </div>
            </div>
            
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
