import React from "react";
import { dummyRigthSidebarData, dummyRightSideTag } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[266px]">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {dummyRigthSidebarData.map((item) => {
            return (
              <Link
                href="/"
                key={item._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">
                  {item.title}
                </p>
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
