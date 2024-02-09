import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface Props {
  handleTag: (name?: string) => void;
  name?: string;
  tag?: string;
}
function TagName({ name, handleTag, tag }: Props) {
  function handle(e: any) {
    e.stopPropagation();
    handleTag("");
  }
  return (
    <span
      className="hover:scale-110  duration-300 transition-all ease-in-out "
      onClick={() => handleTag!(name)}
    >
      {tag === name ? (
        <Link
          href={`/collections/all`}
          className="border-2 border-gray-400 cursor-pointer   group  bg-[#E5E5E5] inline-block rounded-full px-2 m-1"
          onClick={(e) => handle(e)}
        >
          <Icon
            width={16}
            className="text-gray-500 inline-block"
            icon="charm:cross"
          />

          <span className="p-3 font-mono  capitalize">{name}</span>
        </Link>
      ) : (
        <Link
          href={`/collections/${name}`}
          className="border-2 inline-block border-gray-400 cursor-pointer     bg-[#fffefe] rounded-full px-2 m-1"
        >
          <span className="p-3 font-mono capitalize">{name}</span>
        </Link>
      )}
    </span>
  );
}

export default TagName;
