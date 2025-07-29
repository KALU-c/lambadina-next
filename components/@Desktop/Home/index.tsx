import NavBarDesktop from "../NavBarDesktop"
import CategoriesDesktop from "./Categories"
import Hero from "./Hero"

const HomeDesktop = () => {
	return (
		<main>
			<Hero />
			<CategoriesDesktop />
			<div className="min-h-dvh border border-t-red-500" />
		</main>
	)
}

export default HomeDesktop
