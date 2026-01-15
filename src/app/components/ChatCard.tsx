import React from "react";
import Image, { StaticImageData } from "next/image";

export interface ChatCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  alt: string;
}

const ChatCard: React.FC<ChatCardProps> = ({ title, description, image, alt }) => {
  return (
   <article className="relative flex h-full flex-col rounded-3xl border border-[#234c8a] bg-[#1A2956]/90 overflow-hidden  text-white shadow-[0_0_30px_rgba(0,0,0,0.55)]">
  <div className="p-5">
    <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
  <p className="mt-3 text-xs md:text-base leading-relaxed text-white">
    {description}
  </p>
  </div>

 <div className="mt-6 w-full flex justify-center">
  <Image
    src={image}
    alt={alt}
    width={300} 
    height={120} 
    className="w-full max-w-full object-contain"
  />
  </div>
</article>

  );
};

export default ChatCard;
