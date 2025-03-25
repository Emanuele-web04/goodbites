import React from "react";
import Image from "next/image";
const DownloadCTA = () => {
  return (
    <div className="flex p-6 sm:px-12 w-full">
      <div className="w-full text-center flex gap-y-5 flex-col items-center justify-center bg-black text-white px-12 py-10 rounded-3xl">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-3xl font-bold font-bricolage">
            Join lots of people
          </h1>
          <p className="font-inter text-gray-300">
            Download the App and start you cooking journey!
          </p>
        </div>
        <Image src={"/download.svg"} width={140} height={40} alt="" />
      </div>
    </div>
  );
};

export default DownloadCTA;
