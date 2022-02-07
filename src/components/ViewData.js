import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { useState } from "react";
import { useLocation } from "react-router-dom";

function ViewData() {
  const { state } = useLocation();
  console.log(state);
  console.log(state.nature);

  const [rows, setRows] = useState();

  function createData(state) {
    if (state) {
      const mapped = Object.entries(state).map(([key, val]) => ({
        ...val,
        key,
      }));

      setRows(mapped);
    } else {
      setRows([]);
    }
  }

  createData(state);

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome do operador</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Descrição</TableCell>
            <TableCell align="right">Natureza</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.operatorName}
              </TableCell>
              <TableCell align="right">{row.operatorPhone}</TableCell>
              <TableCell align="right">{row.problemDescription}</TableCell>
              <TableCell align="right">{row.nature}</TableCell>
              {/* mudar isso aqui pra ir pra o resto das informacoes do PM. Vai ter que mexer com rota */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ViewData;
