import gsap from "gsap";
import Image from "next/image";
import SpotLight from "./SpotLight";

type IconButtonProps = {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
};

const IconButton = ({
  children,
  variant = "light",
  className,
}: IconButtonProps) => {
  const handleMouseEnter = () => {
    gsap.fromTo(
      ".icon-hover-slide",
      { x: 0, y: 0, opacity: 1 },
      {
        x: 12,
        y: -12,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.fromTo(
            ".icon-hover-slide",
            { x: -12, y: 12 },
            { x: 0, y: 0, duration: 0.3, ease: "power2.out" }
          );
        },
      }
    );
  };

  return (
    <SpotLight className="rounded-full">
      <button
        onMouseEnter={handleMouseEnter}
        className={[
          "relative inline-flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-4 py-3 font-medium text-base leading-5 text-white  cursor-pointer group",
          className,
        ].join(" ")}
      >
        {children}
        {/* Icon */}
        <div
          className={[
            "rounded-full flex items-center justify-center p-1 overflow-hidden",
            variant === "light" ? "bg-white" : "bg-[#101014]",
          ].join(" ")}
        >
          <Image
            src="/assets/icons/ic-arrow.svg"
            width={24}
            height={24}
            alt="arrow"
            className={["icon-hover-slide", variant === "dark" ? "invert" : ""].join(" ")}
          />
        </div>
      </button>
    </SpotLight>
  );
};

export default IconButton;
