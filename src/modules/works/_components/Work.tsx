import Badge from "@/components/common/Badge";
import WorkCard, { WorkCardProps } from "./WorkCard";

const Work = () => {
  const works: WorkCardProps[] = [
    {
      title: "Modern kitchen refit",
      description: "This kitchen transformation brought sleek, modern design and enhanced  functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.",
      image: "/assets/img/works/image-1.png",
      badge: ["Kitchen", "4 weeks"],
      quote: "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
      citation_image: "/assets/img/works/image-1.png",
      name: "Rachel Morgan",
    }
  ];
  return (
    <div className="bg-white py-[120px]">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <Badge title="Our work" />
          <h2 className="text-[#101014] font-medium text-5xl mt-2">
            Get inspired by our work
          </h2>
          <p className="text-xl text-[#3D3D47] mt-4 text-center">
            See how we’ve transformed homes with our expert <br /> craftsmanship
            and attention to detail.
          </p>
        </div>

        <div className="my-[230]">
          <WorkCard items={works}  />
        </div>
      </div>
    </div>
  );
};

export default Work;
