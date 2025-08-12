import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <h1 className={["flex items-center text-white font-medium text-[23px] gap-0.5", className].join(" ")}>
      <Image
        src={"/assets/logo.svg"}
        width={32}
        height={32}
        alt="Logo"
        priority
      />
      LifetimeArt
    </h1>
  );
};

export default Logo;
