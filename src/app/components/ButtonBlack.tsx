import Link from "next/link";
import React from "react";
import "../../style/components/_button.scss";

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
    <button className="btn black">
      <Link
        href={link}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener" : undefined}
      >
        <span>{text}</span>
        <span>{text}</span>
      </Link>
    </button>
  );
}
