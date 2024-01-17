import React from "react";
import { dummyRigthSidebarData } from "@/constants";
import Image from "next/image";

const RightSidebar = () => {
  return (
    <div className="custom-scrollbar text-dark300_light900 fixed right-0 top-0 flex w-fit flex-col overflow-y-auto pt-36">
      <div>
        <span className="mx-2 my-8 text-xl font-bold">Top Questions</span>
        <div>
          {dummyRigthSidebarData.map((item) => {
            return (
              <div
                key={item}
                className="text-dark300_light900 mx-2 my-8 flex w-[300px] justify-between gap-x-6"
              >
                <p className="text-sm">{item}</p>
                <Image
                  className="invert-colors"
                  src="/assets/icons/chevron-right.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
