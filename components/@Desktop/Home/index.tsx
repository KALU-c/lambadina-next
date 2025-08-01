import FooterDesktop from "../components/Footer"
import CategoriesDesktop from "./Categories"
import Hero from "./Hero"

const HomeDesktop = () => {
	return (
		<main className="flex flex-col space-y-6">
			<Hero />
			<CategoriesDesktop />
			<FooterDesktop />
		</main>
	)
}

export default HomeDesktop
