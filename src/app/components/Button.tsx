import Link from "next/link";
import React from "react";

export default function Button({ link, text }: { link: string; text: string }) {
  return (
    <button className="btn">
      <Link href={link} target="_blank" rel="noopener">
        {text}
      </Link>
    </button>
  );
}
