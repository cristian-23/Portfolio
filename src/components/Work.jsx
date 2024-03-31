import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import citasVeterinaria from "../assets/citas veterinaria.png";
import controlDeGastos from "../assets/control de gastos.png";
import cotizadorDeMonedas from "../assets/cotizador de monedas.png";
import { FaGithub } from "react-icons/fa";
import "../styles/Work.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "5%",
        marginBottom: "5%",
      }}
    >
      <Grid
        className="conteiner-card-work"
        container
        columnSpacing={{ xs: 12, md: 4 }}
      >
        <Grid
          sx={{
            padding: { md: "1rem 5rem", sx: "0rem" },
            marginBottom: "4rem",
          }}
          xs={12}
        >
          <Item className="iten-work">
            <div>
              <img
                style={{ padding: "5px" }}
                src={citasVeterinaria}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
            <div style={{ width: "100%" }}>
              <h1 style={{ color: "white", fontFamily: "Poppins" }}>
                Citas Veterinaria
              </h1>
              <p className="text-card-work">
                Es una aplicación que ayuda a las clínicas veterinarias a
                mantener un registro fácil y seguro de sus pacientes. Los
                veterinarios y el personal administrativo pueden agregar,
                actualizar y eliminar información de los animales de manera
                rápida y sencilla.
              </p>
              <div className="conteiner-links-works">
                <a
                  className="enlace-work"
                  href="https://citas-veterianria.netlify.app/"
                  target="_blank"
                >
                  Link
                </a>
                <a
                  className="enlace-github-work"
                  href="https://github.com/cristian-23/cistas_veterinaria_react"
                  target="_blank"
                >
                  <FaGithub style={{ marginRight: "8px" }} /> GitHub
                </a>
              </div>
            </div>
          </Item>
        </Grid>
        <Grid
          sx={{
            padding: { md: "1rem 5rem", sx: "0rem" },
            marginBottom: "4rem",
          }}
          xs={12}
        >
          <Item className="iten-work">
            <div>
              <img
                style={{ padding: "5px" }}
                src={controlDeGastos}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
            <div style={{ width: "100%" }}>
              <h1 style={{ color: "white", fontFamily: "Poppins" }}>
                Control De Gastos
              </h1>
              <p className="text-card-work">
                Es una plataforma web diseñada para ayudar a las personas a
                mantener un seguimiento detallado de sus gastos diarios. Los
                usuarios pueden registrar y categorizar sus gastos de manera
                eficiente, lo que les permite tener un mejor control de sus
                finanzas personales directamente desde su navegador web.
              </p>
              <div className="conteiner-links-works">
                <a
                  className="enlace-work"
                  href="https://planificador-de-gasto.netlify.app/"
                  target="_blank"
                >
                  Link
                </a>
                <a
                  className="enlace-github-work"
                  href="https://github.com/cristian-23/Planificador-De-Gastos"
                  target="_blank"
                >
                  <FaGithub style={{ marginRight: "8px" }} /> GitHub
                </a>
              </div>
            </div>
          </Item>
        </Grid>
        <Grid
          sx={{
            padding: { md: "1rem 5rem", sx: "0rem" },
            marginBottom: "4rem",
          }}
          xs={12}
        >
          <Item className="iten-work">
            <div>
              <img
                style={{ padding: "5px" }}
                src={cotizadorDeMonedas}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
            <div style={{ width: "100%" }}>
              <h1 style={{ color: "white", fontFamily: "Poppins" }}>
                Cotizador De Monedas
              </h1>
              <p className="text-card-work">
                Es una plataforma web diseñada para facilitar la conversión de
                diferentes tipos de monedas a monedas digitales como Bitcoin,
                Ethereum, entre otras. Utilizando una API externa, proporciona a
                los usuarios una manera rápida y conveniente de calcular el
                valor equivalente de una moneda tradicional en moneda digital.
              </p>
              <div className="conteiner-links-works">
                <a
                  className="enlace-work"
                  href="https://criptos-react-03.netlify.app/"
                  target="_blank"
                >
                  Link
                </a>
                <a
                  className="enlace-github-work"
                  href="https://github.com/cristian-23/Criptos-React"
                  target="_blank"
                >
                  <FaGithub style={{ marginRight: "8px" }} /> GitHub
                </a>
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
