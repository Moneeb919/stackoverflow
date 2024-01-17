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
            <Link
              href="/"
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
            </Link>
          );
        })}
      </div>

      <div className="text-dark300_light900 mb-0">
        <p className="m-8 text-xl font-bold">Popular Tags</p>
        <div className="mt-6 space-y-4">
          {dummyRightSideTag.map((item) => {
            return (
              <div key={item.tag}>
                <Link
                  href="/"
                  className="mx-8 my-4 flex cursor-pointer justify-between"
                >
                  <div className="rounded-md bg-gray-100 px-4 py-2 text-xs text-gray-700 shadow-md">
                    {item.tag}
                  </div>
                  <div className="text-sm">{item.num}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
