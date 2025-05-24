import { ChevronLeft } from "lucide-react"
import MenuSheet from "@/components/menu-sheet"
import Link from "next/link"
import Image from "next/image"

const DetailsNavbar = () => {
  return (
    <div className="h-16 flex flex-row items-center justify-between">
      <Link href={"/"}>
        <div className="flex flex-row gap-1 items-center">
          <ChevronLeft size={28} strokeWidth={3} />
          <Image
            src="/logo.png"
            alt="lambadina logo"
            className="h-6"
            height={24}
            width={40}
          />
        </div>
      </Link>

      <div className="flex flex-row gap-6">
        <MenuSheet />
      </div>
    </div>
  )
}

export default DetailsNavbar
