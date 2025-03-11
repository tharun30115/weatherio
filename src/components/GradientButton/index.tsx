interface GradientButtonProps {
  text: string;
  className?: string;
}

const GradientButton = ({ text, className }: GradientButtonProps) => {
  return (
    <button
      className={`w-[243px] h-[78px] font-semibold text-[20px] bg-gradient-to-r from-btn-gradient-start to-btn-gradient-end rounded-full border border-white cursor-pointer ${className}`}>
      {text}
    </button>
  );
};

export default GradientButton;
