import { BrowserRouter as Router, Routes } from "react-router-dom"
import { generateRoutes, registeredPages } from "./pages";
import { AppBaseComponent, GameConsoleComponent } from "components";



function App() {
  
  const appRoutes = generateRoutes(registeredPages)


  return (
    <Router basename="/client-duckys-revenge-3d/">
      <AppBaseComponent registeredPages={registeredPages}>
        <GameConsoleComponent>
        <Routes>
          {appRoutes}
        </Routes>
        </GameConsoleComponent>
      </AppBaseComponent>
    </Router>
  );
}

export default App;
