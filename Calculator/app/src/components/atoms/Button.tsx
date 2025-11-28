type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-4 bg-gray-300 rounded hover:bg-gray-400 transition ${className ? className : ""}`}
    >
      {children}
    </button>
  );
}
