import { Checkbox, FormControlLabel } from "@mui/material";

function Mechanical({ natureForm }) {
  return (
    <div>
      <h1>O problema em questão é Mecânico</h1>
      <p>Checklist observada pelo operador:</p>

      <FormControlLabel
        control={
          <Checkbox
            checked={natureForm.nivelSuccao}
            disabled
            name="nivelSuccao"
          />
        }
        label="O nível de succção está normal"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={natureForm.valvulaSuccao}
            disabled
            name="nivelSuccao"
          />
        }
        label="A válvula de succção está aberta"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={natureForm.valvulaRecalque}
            disabled
            name="valvulaRecalque"
          />
        }
        label="A válvula de recalque está aberta"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={natureForm.vibracaoAnormal}
            disabled
            name="vibracaoAnormal"
          />
        }
        label="A vibração está anormal"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={natureForm.bombaTravada}
            disabled
            name="bombaTravada"
          />
        }
        label="A bomba está travada"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={natureForm.barulhoAnormal}
            disabled
            name="barulhoAnormal"
          />
        }
        label="Há um barulho anormal"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={natureForm.gaxetaVazamento}
            disabled
            name="gaxetaVazamento"
          />
        }
        label="A gaxeta está com vazamento"
      />
    </div>
  );
}
export default Mechanical;
