import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import ViewData from "./components/ViewData";
import DashboardTable from "./components/DashboardTable";
import { Container } from "@mui/material";
import { PREFIX_PATH } from "./helper/constants";
import Header from "./components/Header";

//################################# APP ####################################
function App() {
  return (
    <Container>
        <Header />
        <Routes>
          <Route path={`${PREFIX_PATH}/`} element={<DashboardTable />} />
          <Route path={`${PREFIX_PATH}/viewdata`} element={<ViewData />} />
        </Routes>
    </Container>
  );
}

export default App;
