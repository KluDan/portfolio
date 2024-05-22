import { gridItems } from "@/data";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const AboutGrid = () => {
  return (
    <section id="about" className="py-10 md:py-20">
      <BentoGrid className="w-full">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default AboutGrid;
