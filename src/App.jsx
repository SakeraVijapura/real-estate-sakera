import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Lib/Home/Home";
import AboutUs from "./Lib/aboutUs/AboutUs";
import Properties from "./Lib/properties/Properties";
import Services from "./Lib/Services/Services";



const App = () => {

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
  )
}

export default App


