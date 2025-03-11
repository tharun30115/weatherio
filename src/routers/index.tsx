import { RouteObject } from "react-router";
import Layout from "../layout";
import Intro from "../pages/Into";
import Weather from "../pages/Weather";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "", element: <Intro /> },
			{ path: "weather", element: <Weather /> },
		],
	},
];

export default routes;
