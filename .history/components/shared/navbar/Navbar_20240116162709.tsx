import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 shadow-light-300 fixed z-50 w-full gap-5 p-6 sm:px-12 dark:shadow-none ">
      <Link href="/" className="flex items-center gap-1">
        <Image
          width={23}
          height={23}
          src="/assets/images/site-logo.svg"
          alt="DevFlow"
        />

        <p>
          Dev <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
