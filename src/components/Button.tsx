import Link from "next/link";
import React from "react";

function Button({ classname ,text, link }: { text: string; link: string; classname: string }) {
  return (
    <Link className={classname} href={link}>
      {text}
    </Link>
  );
}

export default Button;
