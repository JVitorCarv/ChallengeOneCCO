import "./App.css";
import { Routes, Route } from "react-router-dom";
import ViewData from "./components/ViewData";
import DashboardTable from "./components/DashboardTable";
import { Container } from "@mui/material";
import { PREFIX_PATH } from "./helper/constants";

//################################# APP ####################################
function App() {
  return (
    <div className="App">
      {/* Componentes do UI material https://mui.com/pt/components/tables/#dense-table */}
      <Container>
        <Routes>
          <Route path={`${PREFIX_PATH}/`} element={<DashboardTable />} />
          <Route path={`${PREFIX_PATH}/viewdata`} element={<ViewData />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
