"use client";

import Accordion from "@/components/common/Accordion";
import Badge from "@/components/common/Badge";
import Image from "next/image";
import { useState } from "react";
import { useServiceAnimation } from "./service.animation";
import { SERVICE_CONTENT, SERVICE_LIST } from "@/constants/service-constant";

const Service = () => {
  const { serviceRef } = useServiceAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div ref={serviceRef} className="bg-[#FAFAFA] py-[120px]">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div className="service-badge">
            <Badge title={SERVICE_CONTENT.badgeTitle} />
          </div>
          <h2 className="service-title text-[#101014] font-medium text-5xl mt-2">
            {SERVICE_CONTENT.title}
          </h2>
          <p className="service-description text-xl text-[#3D3D47] mt-4">
            {SERVICE_CONTENT.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">
          <div className="service-image overflow-hidden rounded-xl">
            <Image
              src={SERVICE_CONTENT.image.src}
              width={SERVICE_CONTENT.image.width}
              height={SERVICE_CONTENT.image.height}
              alt={SERVICE_CONTENT.image.alt}
              className={[
                "rounded-xl object-cover transition duration-500",
                openIndex !== null ? "scale-105" : "scale-100",
              ].join(" ")}
            />
          </div>
          {/* Accordion items */}
          <div>
            {SERVICE_LIST.map((item, index) => (
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
