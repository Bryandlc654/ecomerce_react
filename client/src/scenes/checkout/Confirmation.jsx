import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Transacción completada</AlertTitle>
        Ha realizado un pedido con éxito —{" "}
        <strong>Felicidades por hacer tu compra</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;