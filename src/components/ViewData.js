import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function ViewData() {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  console.log(state.nature);

  const backToTable = () => {
    navigate("/");
  };

  return (
    <span>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Button onClick={backToTable}>Voltar</Button>
    </span>
  );
}
export default ViewData;
