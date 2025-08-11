import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

type AccordionProps = {
  icon: string;
  title: string;
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
  children: React.ReactNode;
};

const Accordion = ({
  icon,
  title,
  isOpen,
  onToggle,
  children,
}: AccordionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.to(contentRef.current, {
      height: isOpen ? "auto" : 0,
      opacity: isOpen ? 1 : 0,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(iconRef.current, {
      rotate: isOpen ? 45 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isOpen]);

  return (
    <div className="border-b border-[#DBDAD9]">
      <button
        onClick={() => onToggle(!isOpen)}
        className="flex items-center justify-between w-full text-left py-5 cursor-pointer"
      >
        <div className="flex items-center gap-5">
          <div className="text-xl">
            <Image src={icon} width={40} height={40} alt={title} />
          </div>
          <span className="text-xl font-medium text-[#101014] leading-[120%]">{title}</span>
        </div>
        <div ref={iconRef}>
          <Image src={'/assets/icons/ic-plus.svg'} width={24}  height={24} alt="plus" />
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="text-[#3D3D47] pt-5 pb-8 leading-relaxed text-base">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
