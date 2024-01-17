import React from "react";
import { dummyRigthSidebarData } from "@/constants";
import Image from "next/image";

const RightSidebar = () => {
  return (
    <div className="custom-scrollbar fixed right-0 top-0 flex w-fit flex-col overflow-y-auto  pt-36">
      <div>
        <span className="mx-2 my-8 text-xl font-bold">Top Questions</span>
        <div>
          {dummyRigthSidebarData.map((item) => {
            return (
              <div
                key={item}
                className="mx-2 my-8 flex w-[325px] justify-between gap-4"
              >
                {item}
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
