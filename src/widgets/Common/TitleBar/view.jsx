import React from "react";

export default function TitleBar({title}) {
  return (
    <div className="flex w-full items-center gap-2">
      {/* <div className="w-1.5 bg-primary h-9"></div>
      <div className="w-1.5 bg-primary h-9"></div> */}
      <span className="text-2xl font-semibold text-primary lg:text-4xl md:text-4xl">|| {title}</span>
    </div>
  );
}
