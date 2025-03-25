import React from "react";
import { features } from "@/lib/features";
const Features = () => {
  return (
    <div className="py-6 min-h-screen flex flex-col items-center justify-center px-6 sm:px-12" id="features">
    <h2 className="font-bold w-full text-3xl font-bricolage pb-6">Features</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="p-4 bg-neutral-200/50 rounded-lg flex items-start gap-3"
          >
            <feature.icon className="text-2xl text-(--strong-blue) mt-1" />
            <div className="flex text flex-col gap-2">
              <h3 className="font-semibold font-bricolage">{feature.title}</h3>
              <p className="text-sm font-inter text-gray-600">{feature.description}</p>
              <p className="text-xs mt-1 font-inter">
                {feature.isFree ? "Free ✅" : "Paid ⭐️"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
