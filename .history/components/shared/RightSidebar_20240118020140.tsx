import React from "react";
import { dummyRigthSidebarData, dummyRightSideTag } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[266px]">
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
                  <div className="text-xs">{item.num}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
