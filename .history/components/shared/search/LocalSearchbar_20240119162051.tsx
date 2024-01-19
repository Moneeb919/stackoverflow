"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface LocalSearchbarProps {
  placeholder: string;
  imgSrc: string;
  route: string;
  otherClasses?: string;
  iconPosition: "left" | "right";
}

const LocalSearchbar = ({
  placeholder,
  imgSrc,
  route,
  otherClasses,
  iconPosition,
}: LocalSearchbarProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={`${placeholder}...`}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border border-pink-600 shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchbar;
