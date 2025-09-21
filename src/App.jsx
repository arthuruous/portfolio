import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <div className="w-full h-screen">
      <Navbar />
      {routesElement}
    </div>
  );
}

export default App;
