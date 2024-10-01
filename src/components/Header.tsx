import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <ul className="flex flex-row gap-4 place-content-center pt-2">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/career">
          <li>Career</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
    </>
  );
}

export default Header;
