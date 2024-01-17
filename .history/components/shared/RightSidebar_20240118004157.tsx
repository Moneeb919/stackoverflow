import React from "react";
import { dummyRigthSidebarData } from "@/constants";
import Image from "next/image";

const RightSidebar = () => {
  return (
    <div className="custom-scrollbar fixed right-0 top-0 flex flex-col overflow-y-auto">
      <div>
        <span>Top Questions</span>
        <div>
          {dummyRigthSidebarData.map((item) => {
            return (
              <div key={item} className="m-2 flex justify-between ">
                {item}
                <Image
                  src="/assets/icons/arrow-right.svg"
                  alt=""
                  width={15}
                  height={15}
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
