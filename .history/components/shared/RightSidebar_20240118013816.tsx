import React from "react";
import { dummyRigthSidebarData, dummyRightSideTag } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const RightSidebar = () => {
  return (
    <div className="custom-scrollbar text-dark300_light900 fixed right-0 top-0 flex h-screen w-fit flex-col overflow-y-auto pt-36">
      <div>
        <span className="m-8 text-xl font-bold">Top Questions</span>
        {dummyRigthSidebarData.map((item) => {
          return (
            <div
              key={item}
              className="text-dark300_light900 m-8 flex w-[300px] justify-between gap-x-6"
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

      <div className="mx-2">
        <p className="text-2xl font-bold">Popular Tags</p>
        {dummyRightSideTag.map((item) => {
          return (
            <div key={item.tag}>
              <Link href="/" className="flex cursor-pointer justify-between">
                <div className="bg-gray-100 px-4 py-2 text-gray-700">
                  {item.tag}
                </div>
                <div>{item.num}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightSidebar;
