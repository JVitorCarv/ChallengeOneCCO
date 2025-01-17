import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { PREFIX_PATH } from "../helper/constants";
import { ButtonPrimary, TableDashboard } from "../styles";

//################################# START Firebase Settings ####################################
//quando depois eu explico para vocês como configura o firebase, por hora podem usar o meu
const firebaseConfig = {
  apiKey:
    "AAAAplipsUI:APA91bGQbCDPCuHA-XQRVNJRvYysIqzPqJ4JXk4d9iowYwHgCel81VZCQYqgdqEQaVX2qGWmwyLjGrnkpKtAs56LhlFZaCdRHZMpn9XVLcxtEc7c5GeiD-uMuibIkDFAQVpfV7mtFduP",
  authDomain: "summerjob-9c9bf.firebaseapp.com",
  databaseURL: "https://summerjob-9c9bf-default-rtdb.firebaseio.com/",
};
const app = initializeApp(firebaseConfig);

const natureObj = {
  1: "Eletrico",
  2: "Mecânico",
  3: "Não Identificado",
};

// Get a reference to the database service
const database = getDatabase(app);
//################################# END Firebase Settings ####################################

//################################# APP ####################################
function DashboardTable() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);

  // função apenas para manipular a lista de dados que vem do firebase
  // transforma um objeto em um array
  function createData(response) {
    if (response) {
      const mapped = Object.entries(response).map(([key, val]) => ({
        ...val,
        nature: natureObj[val.nature],
        key,
      }));

      console.log(mapped);
      setRows(mapped);
    } else {
      setRows([]);
    }
  }

  function handleClick(data) {
    if (data) {
      navigate(`${PREFIX_PATH}/viewdata`, { state: data });
    }
  }

  // Para entender um pouco mais como funciona o useEffect
  // https://pt-br.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    const reference = ref(database, "ativos");
    // se inscreve nos eventos do path "ativos", ou seja, qualquer alteração
    // que ocorrer em "ativos" esse trecho do codigo irá receber os dados atualizados
    onValue(reference, (snapshot) => {
      const data = snapshot.val();

      createData(data);
    });

    return () => {};
  }, []);

  return (
    <TableDashboard>
      <TableContainer>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Ativo</TableCell>
              <TableCell align="right">ID Alpha</TableCell>
              <TableCell align="right">Unidade</TableCell>
              <TableCell align="right">Posição</TableCell>
              <TableCell align="right">Natureza</TableCell>
              <TableCell align="right">Mais detalhes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.ativo}
                </TableCell>
                <TableCell align="right">{row.tombamento}</TableCell>
                <TableCell align="right">{row.unidadeOperacional}</TableCell>
                <TableCell align="right">{row.posicao}</TableCell>
                <TableCell align="right">{row.nature}</TableCell>
                <TableCell align="right">
                  <ButtonPrimary onClick={() => handleClick(row)}>
                    Visualizar
                  </ButtonPrimary>{" "}
                  {/* mudar isso aqui pra ir pra o resto das informacoes do PM. Vai ter que mexer com rota */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableDashboard>
  );
}

export default DashboardTable;
