import Link from "next/link"
import MenuSheet from "./menu-sheet"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="h-16 flex flex-row items-center justify-between">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="lambadina logo"
          className="h-7"
        />
      </Link>

      <MenuSheet />
    </div>
  )
}

export default Navbar
