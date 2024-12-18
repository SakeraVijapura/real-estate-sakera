import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Lib/Home";
import Layout from "./components/Layout/Layout";
import Properties from "./Lib/properties/Properties";
import Services from "./Lib/Services";
import AboutUs from "./Lib/AboutUs/AboutUs";


function App() {
  const routers = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/properties",
          element: <Properties />,
        },
        {
          path: "/services",
          element: <Services />,
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
