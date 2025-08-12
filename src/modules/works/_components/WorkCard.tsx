import Badge from "@/components/common/Badge";
import Image from "next/image";

export type WorkCardProps = {
  title: string;
  description: string;
  image: string;
  badge: string[];
  quote: string;
  citation_image: string;
  name: string;
  variant?: "light" | "dark";
};
const WorkCard = ({ items } : {items: WorkCardProps[]}) => {
  return (
    <>
    {items.map((data, index) => (
      <div key={index} className="rounded-xl p-8 bg-[#E9ECF2]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <Image
            src={"/assets/img/works/image-1.png"}
            width={648}
            height={500}
            alt="works"
            className="h-full object-cover rounded-[10px]"
          />
          <div className="flex flex-col gap-6">
            <div className="space-y-3.5">
              <h2 className="font-medium text-[#101014] text-[40px]">{data.title}</h2>
              <p className="font-normal text-base leading-[170%] text-[#3D3D47]">
                {data.description}
              </p>
            </div>
            <div className="flex items-center gap-3.5">
              {data.badge.map((item, index) => (
                <Badge key={index} title={item} />
              ))}
            </div>
            <div className="flex items-start gap-2">
              <Image
                src={"/assets/icons/ic-quote.svg"}
                width={24}
                height={24}
                alt="quote"
              />
              <div className="space-y-6">
                <p className="text-[#3D3D47] text-lg font-normal leading-[170%]">
                  LifetimeArt completely transformed our kitchen, making it both
                  beautiful and highly functional. The craftsmanship was
                  outstanding, and the team was professional and communicative
                  throughout. We couldn’t be happier with the result!
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={data.citation_image}
                    alt="citation"
                    width={50}
                    height={50}
                    className="rounded-full size-10 object-cover border border-[#DBDAD9]"
                  />
                  <p className="text-[#101014] text-base leading-5">
                    Rachel Morgan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
    </>
  );
};

export default WorkCard;
