import { Outlet } from "react-router-dom";
import "./App.css";
// import LoginView from "./views/LoginView";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
