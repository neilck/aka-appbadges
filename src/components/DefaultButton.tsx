"use client";

interface DefaultButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}
const DefaultButton: React.FC<DefaultButtonProps> = ({
  disabled = false,
  onClick,
  children,
}: DefaultButtonProps) => {
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
