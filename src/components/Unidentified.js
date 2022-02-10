import { TextField } from "@mui/material";

function Unidentified({ natureForm }) {
  return (
    <div className="view-data">
      <h1>A natureza do problema não foi identificada pelo operador.</h1>

      {natureForm.description && (
        <TextField
          label="Descrição adicional"
          value={natureForm.description}
          disabled
          multiline
        />
      )}
    </div>
  );
}
export default Unidentified;
