import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./layouts/Navbar";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </>
  );
}
