import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      info: "If the font is still not applied, check for any errors in the console and verify.",
      fileSize: "0.1mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "blue" },
    },
    {
      info: "If the font is still not applied, check for any errors in the console and verify.",
      fileSize: "0.1mb",
      close: true,
      tag: { isOpen: false, tagTitle: null, tagColor: null },
    },
    {
      info: "If the font is still not applied, check for any errors in the console and verify.",
      fileSize: "0.1mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
  ];

  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-screen flex gap-5 flex-wrap">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
