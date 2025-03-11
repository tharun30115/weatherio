import { Outlet } from "react-router";

const Layout = () => {
	return (
		<div className="flex flex-col gap-5 h-screen md:w-[500px] w-screen bg-bgWhite md:rounded-[40px] items-center justify-center">
			<div className="w-full h-full md:rounded-t-[40px] bg-gradient-to-br from-bgLight via-bgDark to-bgDark flex flex-col">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
