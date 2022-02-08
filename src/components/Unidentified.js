import { TextField } from "@mui/material";

function Unidentified({ natureForm }) {
  return (
    <div className="view-data">
      <TextField
        label="Descrição adicional"
        value={natureForm.description}
        disabled
        multiline
      />
    </div>
  );
}
export default Unidentified;
