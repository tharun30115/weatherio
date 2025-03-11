import { useRoutes } from "react-router";
import routes from "./routers";

const App = () => {
	const element = useRoutes(routes);
	return <>{element}</>;
};

export default App;
