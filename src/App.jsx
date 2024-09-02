import { Grid, Grid2, Typography } from "@mui/material";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [valorCambio, setValorCambio] = useState(null);

  useEffect(() => {
    const llamaApiCambio = async () => {
      try {
        const respuesta = await fetch("https://dolarapi.com/v1/dolares");
        const datos = await respuesta.json();
        console.log(datos);
        setValorCambio(
          datos?.map((user) => (
            <li key={user.id}>
              {user.moneda} {user.nombre} {user.compra} {user.venta}{" "}
            </li>
          ))
        );
      } catch (error) {
        console.error("Error al acceder a la api : ", error);
      }
    };
    llamaApiCambio();
  }, []);
  return (
    <>
      <div>
        <h1>HOla Mundo</h1>
      </div>
      <Grid
        container
        spacing={2}
        minHeight={60}
      >
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size="grow"
        >
          {valorCambio}
        </Grid>
      </Grid>

      <Typography
        variant="h6"
        color="blue"
      >
        <Grid2 container>
          <Grid2
            item
            p={2}
            xs={6}
          >
            {valorCambio}
          </Grid2>
        </Grid2>
      </Typography>
    </>
  );
}

export default App;
