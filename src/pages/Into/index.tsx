import { useNavigate } from "react-router";
import thunder from "../../assets/images/thunder.png";
import BottomBox from "../../components/Bottombox";
import ClipText from "../../components/ClipText";

const Intro = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className="flex flex-col items-center justify-center w-full h-full">
				<img
					src={thunder}
					alt="intro-icon"
					className="scale-[1.1]"
				/>
			</div>
			<BottomBox>
				<>
					<span className="text-title font-semibold text-[24px] text-center max-w-[80%]">
						Monitoring Weather became Eassier
					</span>
					<p className="text-center text-description max-w-[80%] leading-7 font-sans">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore.
					</p>
					<button
						onClick={() => navigate("/weather")}
						className="outline-none mb-8 w-full rounded-full bg-bgDark h-[60px] font-extrabold mt-3 font-sans text-2xl text-white relative overflow-hidden"
					>
						<ClipText content="Get Started" />
					</button>
				</>
			</BottomBox>
		</>
	);
};

export default Intro;
