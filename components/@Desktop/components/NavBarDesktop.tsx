import { Lightbulb } from "lucide-react"
import { Button } from "../../ui/button"
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"

const NavBarDesktop = ({ isDarkBg }: { isDarkBg?: boolean }) => {
	const { isAuthenticated, user, logout } = useAuth();

	return (
		<nav className="flex-between py-4">
			<Link href={"/"}>
				<h1 className="text-2xl flex items-center gap-2 cursor-pointer">
					<Lightbulb color="#FFB000" />
					Lambadina
				</h1>
			</Link>
			<div className="flex-center gap-4">
				<Button variant={"link"} className={isDarkBg ? "text-white" : "text-black"}>Become a mentor</Button>
				<Button variant={"link"} className={isDarkBg ? "text-white" : "text-black"}>Contact us</Button>
				{!isAuthenticated ? (
					<>
						<Link href={"/login"}>
							<Button variant={"ghost"}>Login</Button>
						</Link>
						<Link href={"/register"}>
							<Button>Sign Up</Button>
						</Link>
					</>
				) : (
					<>
						{user?.user_type === "mentor" ? (
							<Button variant={'outline'}>Dashboard</Button>
						) : (
							<Button variant={"outline"}>Profile</Button>
						)}
						<Button variant={'ghost'} onClick={logout}>Logout</Button>
					</>
				)}
			</div>
		</nav>
	)
}

export default NavBarDesktop
