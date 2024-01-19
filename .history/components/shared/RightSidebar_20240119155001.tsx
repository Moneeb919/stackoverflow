import React from "react";
import { dummyRigthSidebarData, dummyRightSideTag } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
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

      <div className="text-dark300_light900 mb-0 mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {dummyRightSideTag.map((item) => (
            <RenderTag
              key={item._id}
              _id={item._id}
              name={item.tag}
              totalQuestions={item.num}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
