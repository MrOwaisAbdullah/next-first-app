import Link from "next/link";

export default function career() {
    return (
      <>
    <ul className="flex flex-row space-x-4 place-content-center pt-2">
      <Link href="/"><li>Home</li></Link>
      <Link href="/career"><li>Career</li></Link>
      <Link href="/contact"><li>Contact</li></Link>
      <Link href="/about"><li>About</li></Link>
    </ul>
      <h1 className="text-4xl pt-6 text-red-500 font-bold text-center">Career Page</h1></>
    );
  }
  