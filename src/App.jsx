import Home from "./pages/Home";
import { useRoutes } from "react-router-dom";

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
    <div className='w-full h-screen'>{routesElement}</div>
  );
}

export default App;