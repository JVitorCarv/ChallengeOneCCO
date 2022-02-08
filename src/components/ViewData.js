import { Button, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Electric from "./Electric";
import Mechanical from "./Mechanical";
import Unidentified from "./Unidentified";

function ViewData() {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  console.log(state.nature);

  const backToTable = () => {
    navigate("/");
  };

  const RenderNature = ({ nature, natureForm }) => {
    switch (nature) {
      case "Eletrico":
        return <Electric natureForm={natureForm} />;
      case "Mecânico":
        return <Mechanical natureForm={natureForm} />;
      default:
        return <Unidentified natureForm={natureForm} />;
    }
  };

  return (
    <div className="view-data">
      <TextField
        label="Ativo"
        value={state.ativo}
        disabled
        variant="standard"
      />
      <TextField
        label="Id Alpha"
        value={state.tombamento}
        disabled
        variant="standard"
      />
      <TextField
        label="Nome do Operador"
        value={state.operatorName}
        disabled
        variant="standard"
      />
      <TextField
        label="Telefone do Operador"
        value={state.operatorPhone}
        disabled
        variant="standard"
      />
      <TextField
        label="Descrição do Problema"
        value={state.problemDescription}
        disabled
        variant="standard"
      />
      <TextField
        label="Setor"
        value={state.setor}
        disabled
        variant="standard"
      />
      <TextField
        label="Unidade"
        value={state.unidade}
        disabled
        variant="standard"
      />

      <RenderNature nature={state.nature} natureForm={state.natureForm} />
      <Button onClick={backToTable}>Voltar</Button>
    </div>
  );
}



export default ViewData;
