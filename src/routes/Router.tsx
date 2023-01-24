import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../app/view/Dashboard/Dashboard";
import UsefulContactsProject from "../app/view/Code/CodeList";

/****Layouts*****/
const FullLayout = lazy(() => import("../app/view/Layout/FullLayout"));
/****End Layouts*****/

/*****Pages******/


/*****Tables******/
const UsefulContacts = lazy(() => import("../app/pages/AddUserContact"));




/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="dashboards/dashboard1" /> },
      { path: "dashboards/dashboard1", exact: true, element: <UsefulContactsProject /> },
      { path: "tables/basic-table", element: <UsefulContactsProject /> },
      { path: "tables/basic-table/edit", element: <UsefulContactsProject /> },
      { path: "/form-layouts/form-layouts", element: <UsefulContactsProject /> },
      { path: "/form-elements/autocomplete", element: <UsefulContactsProject /> },
      { path: "/form-elements/button", element: <UsefulContactsProject /> },
      { path: "/form-elements/checkbox", element: <UsefulContactsProject /> },
      { path: "/form-elements/radio", element: <UsefulContactsProject /> },
      { path: "/form-elements/slider", element: <UsefulContactsProject /> },
      { path: "/form-elements/switch", element: <UsefulContactsProject /> },
    ],
  },
];

export default ThemeRoutes;