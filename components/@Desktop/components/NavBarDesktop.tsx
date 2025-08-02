import { Lightbulb } from "lucide-react"
import { Button } from "../../ui/button"

const NavBarDesktop = () => {
	return (
		<nav className="flex-between py-4">
			<h1 className="text-2xl flex items-center gap-2">
				<Lightbulb color="#FFB000" />
				Lambadina
			</h1>
			<div className="flex-center gap-4">
				<Button variant={"link"}>Become a mentor</Button>
				<Button variant={"link"}>Contact us</Button>
				<Button variant={"ghost"}>Login</Button>
				<Button>Sign Up</Button>
			</div>
		</nav>
	)
}

export default NavBarDesktop
