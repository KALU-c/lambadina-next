import { ChevronLeft } from "lucide-react"
import { Link } from "react-router"
import MenuSheet from "@/components/menu-sheet"

const DetailsNavbar = () => {
  return (
    <div className="h-16 flex flex-row items-center justify-between">
      <Link to={"/"}>
        <div className="flex flex-row gap-1 items-center">
          <ChevronLeft size={28} strokeWidth={3} />
          <img
            src="/logo.png"
            alt="lambadina logo"
            className="h-6"
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
