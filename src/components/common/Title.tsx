const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={[
        "font-medium text-[#101014] text-5xl leading-[1.2] flex flex-col gap-1",
        className,
      ].join(" ")}
    >
      {children}
    </h2>
  );
};

export default Title;
