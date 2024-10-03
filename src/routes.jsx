import App from "./App";
import Timer from "./Pages/Timer";
import Solves from "./Pages/Solves";
import AlgSets from "./Pages/AlgSets";
import Settings from "./Pages/Settings";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
        {index: true, element: <Timer />},
        {path: '/solves', element: <Solves />},
        {path: '/algset', element: <AlgSets />},
        {path: '/settings', element: <Settings />},
    ]
    // errorElement: <ErrorPage />,
  },
];

export default routes;
