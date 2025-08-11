const Badge = ({ title }: { title: string }) => {
  return (
    <div className="rounded-full w-fit py-2 px-3 bg-[#28282C]">
      <span className="font-semibold text-base leading-3.5 tracking-normal">
        {title}
      </span>
    </div>
  );
};

export default Badge;
