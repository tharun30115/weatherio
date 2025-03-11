interface ClipTextProps {
	content: string;
}

const ClipText = ({ content }: ClipTextProps) => {
	return (
		<span
			className="bg-clip-text text-transparent"
			style={{
				backgroundImage:
					"linear-gradient(to bottom, rgba(255, 255, 255, 1) 2%, rgba(255, 255, 255, 0.9) 12%, rgba(255, 255, 255, 0.5) 100%)",
			}}
		>
			{content}
		</span>
	);
};

export default ClipText;
