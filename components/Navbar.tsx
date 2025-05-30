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
          className="h-6 w-full object-contain"
          width={50}
          height={20}
          unoptimized
          priority
        />
      </Link>

      <MenuSheet />
    </div>
  )
}

export default Navbar
