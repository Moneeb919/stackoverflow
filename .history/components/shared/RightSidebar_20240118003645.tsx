import React from "react";
import { dummyRigthSidebarData } from "@/constants";

const RightSidebar = () => {
  return (
    <div className="custom-scrollbar sticky right-0 top-0">
      <div>
        <span>Top Questions</span>
        <div>
          {dummyRigthSidebarData.map((item) => {
            return (
              <div key={item} className="m-2 flex justify-between ">
                {item}
                <img
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
