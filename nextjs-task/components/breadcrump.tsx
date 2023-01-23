import React from "react";
import Link from "next/link";

type Props = {
  cssClass: string;
};

const Breadcrump = ({ cssClass }: Props) => (
  <div className={cssClass}>
    <Link href="/">Home</Link>
    <i>&gt;</i>
    <Link href="/">Adminitration</Link>
    <i>&gt;</i>
    <span>Logger search</span>
  </div>
);

export default Breadcrump;
