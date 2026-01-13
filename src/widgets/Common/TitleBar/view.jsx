import React from "react";

export default function TitleBar({title}) {
  return (
    <div className="flex w-full items-center gap-2">
      <span className="text-xl font-semibold text-primary sm:text-2xl md:text-3xl lg:text-4xl">|| {title}</span>
    </div>
  );
}
