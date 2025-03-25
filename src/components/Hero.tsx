import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="p-6 sm:px-12 h-screen m-auto flex gap-6 text-center md:text-left flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col items-center md:items-start gap-6">
        <h1 className="font-bold text-4xl flex flex-col font-bricolage tracking-tight">
          <span className="relative">Forgetting recipes?</span>
          <span className="relative whitespace-nowrap">
            <span className="relative whitespace-nowrap text-(--strong-yellow) text-stroke">Not Anymore!</span>
          </span>
        </h1>
        <p className="max-w-[350px] md:max-w-xl lg:max-w-2xl font-inter">
          Effortlessly organize and store all your favorite recipes in one place
          with GoodBites. Share your culinary creations directly to Instagram
          with a single tap. Navigate the web to discover new dishes and add
          them to your collection seamlessly.
        </p>
        <a href="#features" className="bg-(--basilico) ring-1 ring-black ring-inset max-w-[200px] px-6 py-2 rounded-lg">
            <p className="font-inter font-medium">Find out the features!</p>
        </a>
      </div>
      <Image
        width={400}
        height={300}
        src={"/homeimage.png"}
        alt={""}
        className="w-auto h-[60%] md:h-[70%]"
      />
    </div>
  );
};

export default Hero;
