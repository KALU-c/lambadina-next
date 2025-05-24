import { Link } from "react-router"
import MenuSheet from "./menu-sheet"

const Navbar = () => {
  return (
    <div className="h-16 flex flex-row items-center justify-between">
      <Link to={"/"}>
        <img
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
