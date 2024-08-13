import "./App.css";
import { Router } from "react-router-dom";
import Home from "./layout/Home";
import AppRoutes from "./routes/AppRoutes";
import { Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
