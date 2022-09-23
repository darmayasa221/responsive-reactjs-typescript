import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
])

export default Routers