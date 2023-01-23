import React from "react";
import Link from "next/link";

type Props = {
  cssClass: string;
};

const Breadcrump = ({ cssClass }: Props) => (
  <div className={cssClass}>
    <Link href="/">Home</Link> / <Link href="/">Adminitration</Link> /{" "}
    <span>Logger search</span>
  </div>
);

export default Breadcrump;
