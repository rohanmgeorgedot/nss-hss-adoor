import { NssLogo } from "@icons/NssLogo/NssLogo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PreLoader() {
  return (
    <div className="fixed inset-0 z-[1000] bg-white flex items-center justify-center">
      <div className="">
        <div className="flex items-center justify-center flex-col gap-2 px-5vw">
          <Link href="/" className="">
            <div className="flex flex-col sm:flex-1 lg:flex-1 p-0 items-center gap-2">
              <Image
                src={"/images/nssOrangeLogo.webp"}
                height={1000}
                width={1000}
                priority={true}
                className="w-7 md:w-20 lg:20"
                alt="nsshssadoor"
              />
              <div className="flex flex-col items-center justify-center">
                <span className="text-[0.9rem] font-semibold md:text-xl lg:text-xl">
                  NSS HSS{" "}
                </span>
                <span className="text-xs md:text-base lg:text-base">
                  Adoor, Alappuzha{" "}
                </span>
              </div>
            </div>
          </Link>
          <span className="loader"></span>
        </div>
      </div>
    </div>
  );
}
