import Link from "next/dist/client/link"

export const Logo = () => {
  return <a href={"/" }className="logo hover:text-white text-black md:text-white text-4xl font-extrabold">
    Best<span className="text-red-500 font-black"> Books</span>
  </a>
}
