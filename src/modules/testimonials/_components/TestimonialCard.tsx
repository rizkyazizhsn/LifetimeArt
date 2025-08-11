import Image from "next/image";

export type TestimonialCardProps = {
  rate: number;
  review: string;
  citation_image: string;
  name: string;
};

const TestimonialCard = ({ data }: { data: TestimonialCardProps[] }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-[#FAFAFA] w-[347px] h-[315px] border border-[#E6E6E6] rounded-xl p-8"
        >
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: item.rate }, (_, index) => (
                  <Image key={index} src={"/assets/icons/ic-star.svg"} width={24} height={24} alt="ic-star" />
                ))}
              </div>
              <p className="text-base leading-[170%] text-[#3D3D47]">
                {item.review}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={item.citation_image}
                width={50}
                height={50}
                alt=""
                className="size-[50px] rounded-full object-cover"
              />
              <p className="text-base leading-5 text-[#101014]">{item.name}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestimonialCard;
