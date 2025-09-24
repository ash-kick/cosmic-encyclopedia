import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home";
import CosmosDetails from "./pages/content/CosmosDetails";

//layouts
import NavBarLayout from "./layouts/NavBarLayout";

const router = createBrowserRouter(
     createRoutesFromElements(
          <Route element={<NavBarLayout />}>
               <Route
                    index
                    element={<Home />}
               />
               <Route
                    path=":id"
                    element={<CosmosDetails />}
               />
          </Route>
     )
);

function App() {
     return <RouterProvider router={router}></RouterProvider>;
}

export default App;
