"use client";

import Accordion from "@/components/common/Accordion";
import Badge from "@/components/common/Badge";
import Image from "next/image";
import { useState } from "react";
import { useServiceAnimation } from "./service.animation";

const Service = () => {
  const { serviceRef } = useServiceAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordionData = [
    {
      icon: "/assets/icons/ic-kitchens.svg",
      title: "Kitchens",
      content:
        "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you're after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.",
    },
    {
      icon: "/assets/icons/ic-loft-conversions.svg",
      title: "Loft Conversions",
      content:
        "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you're after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.",
    },
    {
      icon: "/assets/icons/ic-bathrooms.svg",
      title: "Bathrooms",
      content:
        "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you're after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.",
    },
    {
      icon: "/assets/icons/ic-extensions.svg",
      title: "Extensions",
      content:
        "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you're after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.",
    },
    {
      icon: "/assets/icons/ic-restorations.svg",
      title: "Restorations",
      content:
        "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you're after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.",
    },
    {
      icon: "/assets/icons/ic-external-works.svg",
      title: "External Works",
      content:
        "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you're after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.",
    },
  ];
  return (
    <div ref={serviceRef} className="bg-[#FAFAFA] py-[120px]">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div className="service-badge">
            <Badge title="Services" />
          </div>
          <h2 className="service-title text-[#101014] font-medium text-5xl mt-2">
            What we do
          </h2>
          <p className="service-paragraph text-xl text-[#3D3D47] mt-4">
            Find out which one of our services fit the needs of your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={"/assets/img/services/image-1.jpg"}
              width={700}
              height={685}
              alt="Services image"
              className={[
                "rounded-xl object-cover transition duration-500",
                openIndex !== null ? "scale-105" : "scale-100",
              ].join(" ")}
            />
          </div>
          {/* Accordion items */}
          <div>
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                icon={item.icon}
                title={item.title}
                isOpen={openIndex === index}
                onToggle={(open) => setOpenIndex(open ? index : null)}
              >
                {item.content}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
