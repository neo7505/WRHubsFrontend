import { Routes, Route } from "react-router-dom";

import ProjectStatus from "./pages/ProjectStatus";
import Layout from "./Layout";
import OverallStatus from "./pages/OverallStatus";



function App() {
  return (
    <Routes>
     
      <Route path="/" element={<Layout />}>
        <Route path="/projectstatus/project" element={<ProjectStatus />} />
        <Route path="/projectstatus/overallstatus" element={<OverallStatus />} />
       
      </Route>
    </Routes>
  );
}

export default App;
