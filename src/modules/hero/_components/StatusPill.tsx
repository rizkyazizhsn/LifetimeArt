import SpotLight from "@/components/common/SpotLight";

const StatusPill = ({ title }: { title: string }) => {
  return (
    <SpotLight className="rounded-full">
      <div className="status-pill flex items-center justify-center w-fit bg-[#28282C] px-3 py-2 rounded-full text-sm font-normal gap-1.5">
        <div className="flex items-center justify-center bg-white/50 rounded-full size-[18px]">
          <div className="flex items-center justify-center bg-white/10 rounded-full size-[10px]">
            <div className="flex items-center justify-center bg-white rounded-full size-2" />
          </div>
        </div>
        <span className="text-[#D0D1DB]">{title}</span>
      </div>
    </SpotLight>
  );
};

export default StatusPill;
