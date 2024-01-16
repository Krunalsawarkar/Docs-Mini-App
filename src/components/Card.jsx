import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      className="relative w-60 h-72 rounded-[50px] bg-zinc-900/80 text-white py-10 px-8 overflow-hidden flex-shrink-0">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.info}</p>
      <div className="footer absolute bottom-0 w-full   left-0">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{data.fileSize}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <AiOutlineDownload size="0.7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-3 ${
              data.tag.tagColor === "blue" ? "bg-blue-300" : "bg-green-500"
            } flex items-center justify-center`}>
            <h3 className="text-md flex text-center justify-center ">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
