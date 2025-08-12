const Button = ({ children }: { children: React.ReactNode; }) => {
  return (
    <button className="inline-flex items-center gap-6 bg-white/10">
      {children}
    </button>
  );
};

export default Button;
