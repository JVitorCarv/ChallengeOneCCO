import { TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { PREFIX_PATH } from "../helper/constants";
import { ButtonSecondary, StyledViewData } from "../styles";
import Electric from "./Electric";
import Mechanical from "./Mechanical";
import Unidentified from "./Unidentified";

function ViewData() {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  const backToTable = () => {
    navigate(`${PREFIX_PATH}/`);
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
    <StyledViewData>
      <TextField label="Ativo" value={state.ativo} disabled multiline />
      <TextField
        label="Descrição do ativo"
        value={state.ativo_description}
        disabled
        multiline
      />
      <TextField label="ID Alpha" value={state.id_alpha} disabled multiline />
      <TextField label="Serial" value={state.serial} disabled multiline />
      <TextField
        label="Fabricante"
        value={state.fabricante}
        disabled
        multiline
      />
      <TextField label="Site" value={state.site} disabled multiline />
      <TextField label="Posição" value={state.posicao} disabled multiline />
      <TextField label="Status" value={state.status} disabled multiline />
      <TextField
        label="Tombamento"
        value={state.tombamento}
        disabled
        multiline
      />
      <TextField label="Condição" value={state.condicao} disabled multiline />

      <RenderNature nature={state.nature} natureForm={state.natureForm} />
      <ButtonSecondary onClick={backToTable}>Voltar</ButtonSecondary>
    </StyledViewData>
  );
}

export default ViewData;
