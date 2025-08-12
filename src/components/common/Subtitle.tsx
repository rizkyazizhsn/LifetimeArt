import React from "react";

const Subtitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={[
        "font-normal text-xl leading-[170%] text-[#3D3D47] tracking-[-0.3px]",
        className,
      ].join(" ")}
    >
      {children}
    </p>
  );
};

export default Subtitle;
