import Link from "next/link";
import React from "react";

export default function Button({
  link,
  text,
  newTab,
}: {
  link: string;
  text: string;
  newTab: boolean;
}) {
  return (
    <button className="btn">
      <Link
        href={link}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener" : undefined}
      >
        {text}
      </Link>
    </button>
  );
}
