import "./App.css";
import 'leaflet/dist/leaflet.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);
export default App;