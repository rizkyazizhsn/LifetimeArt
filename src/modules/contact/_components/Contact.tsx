import Badge from "@/components/common/Badge";
import Subtitle from "@/components/common/Subtitle";
import Title from "@/components/common/Title";
import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = () => {
  const socialMedia: { name: string; link: string; icon: string }[] = [
    {
      name: "Instagram",
      link: "#",
      icon: "/assets/icons/ic-instagram.svg",
    },
    {
      name: "Tiktok",
      link: "#",
      icon: "/assets/icons/ic-tiktok.svg",
    },
    {
      name: "X",
      link: "#",
      icon: "/assets/icons/ic-x.svg",
    }
  ]
  return (
    <div className="bg-white pb-4">
      <div className="container rounded-xl bg-[#101014] p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px]">
          {/* Left Content */}
          <div className="flex flex-col justify-between">
            {/* Heading */}
            <div className="flex flex-col gap-y-5">
              <Badge title="Contact" />
              <Title>Get in touch</Title>
              <Subtitle>
                For any inquiries or to explore your vision further, we invite you
                to contact our professional team using the details provided below.
              </Subtitle>
            </div>
            {/* Contact */}
            <div className="flex flex-col gap-y-4 border-b border-[#D0D1DB1A] pb-7">
              <p className="text-[#D0D1DB] font-light text-lg">
                <span className="font-semibold text-white leading-[170%] me-3">Office</span>
                150 Old Park Ln, London W1K 1QZ
              </p>
              <p className="text-[#D0D1DB] font-light text-lg">
                <span className="font-semibold text-white leading-[170%] me-3">Email</span>
                hello@refit.com
              </p>
              <p className="text-[#D0D1DB] font-light text-lg">
                <span className="font-semibold text-white leading-[170%] me-3">Telephone</span>
                07716 534984
              </p>
            </div>
            {/* Social Media */}
            <div className="mt-12">
              <p className="font-semibold text-lg leading-[170%] text-white">Follow us</p>
              <div className="flex items-center gap-x-5 mt-4">
                {socialMedia.map((item, index) => (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image src={item.icon} alt={item.name} width={24} height={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Right Content */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
