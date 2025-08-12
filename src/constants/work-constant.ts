import { WorkCardProps } from "@/modules/works/_components/WorkCard";

export const WORK_CONTENT = {
  heading: "Get inspired by our work",
  description:
    "See how we’ve transformed homes with our expert craftsmanship and attention to detail.",
  works: [
    {
      title: "Modern kitchen refit",
      description:
        "This kitchen transformation brought sleek, modern design and enhanced functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.",
      image: "/assets/img/works/image-1.png",
      badge: ["Kitchen", "4 weeks"],
      quote:
        "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
      citation_image: "/assets/img/works/image-1.png",
      name: "Rachel Morgan",
    },
  ] satisfies WorkCardProps[],
};
