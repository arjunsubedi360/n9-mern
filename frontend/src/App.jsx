import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./layouts/Sidebar";

export default function App() {
  return (
    <Router>
      <Sidebar />
      <AppRoutes />
    </Router>
  );
}
