import { TextField } from "@mui/material";

function Unidentified({ natureForm }) {
  return (
    <div className="view-data">
      <p>A natureza do problema não foi identificada pelo operador.</p>

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
