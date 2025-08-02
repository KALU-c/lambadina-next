import { Lightbulb } from "lucide-react"
import { Button } from "../../ui/button"
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"

const NavBarDesktop = () => {
	const { isAuthenticated } = useAuth();

	return (
		<nav className="flex-between py-4">
			<Link href={"/"}>
				<h1 className="text-2xl flex items-center gap-2 cursor-pointer">
					<Lightbulb color="#FFB000" />
					Lambadina
				</h1>
			</Link>
			<div className="flex-center gap-4">
				<Button variant={"link"}>Become a mentor</Button>
				<Button variant={"link"}>Contact us</Button>
				{!isAuthenticated ? (
					<>
						<Link href={"/login"}>
							<Button variant={"ghost"}>Login</Button>
						</Link>
						<Link href={"/register"}>
							<Button>Sign Up</Button>
						</Link>
					</>
				): (
					<Button variant={"outline"}>Dashboard</Button>
				)}
			</div>
		</nav>
	)
}

export default NavBarDesktop
