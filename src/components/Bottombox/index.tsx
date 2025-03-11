interface Props {
	children: React.ReactNode;
}

const BottomBox = ({ children }: Props) => {
	return (
		<div className="w-fll flex flex-col items-center justify-center gap-5 p-8 bg-bgWhite rounded-t-[40px] shadow-md">
			{children}
		</div>
	);
};

export default BottomBox;
