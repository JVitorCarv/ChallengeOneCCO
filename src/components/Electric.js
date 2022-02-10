import { Checkbox, FormControlLabel } from "@mui/material";

function Electric({ natureForm }) {
  return (
    <div className="view-data">
      <p>
        O problema em questão é elétrico. <br />Checklist observada
        pelo operador:
      </p>

      <FormControlLabel
        control={
          <Checkbox
            checked={natureForm.faltaEnergia}
            disabled
            name="faltaEnergia"
          />
        }
        label="Há falta de energia na vizinhança"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={natureForm.chaveFusivel}
            disabled
            name="chaveFusivel"
          />
        }
        label="Chave fusível (canela, banana) aberta"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={natureForm.tensaoNormal}
            disabled
            name="tensaoNormal"
          />
        }
        label="Tensão da unidade normal"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={natureForm.cheiroQueimado}
            disabled
            name="cheiroQueimado"
          />
        }
        label="Cheiro de queimado"
      />
    </div>
  );
}
export default Electric;
