import { ArrowRight } from "lucide-react"

type SectionIndicatorDesktopProps = {
	title: string
	description: string
}

const SectionIndicatorDesktop = () => {
	return (
		<div className="flex flex-row items-end justify-between">
			<div className="flex flex-col gap-1">
				<h1 className="text-2xl bg-zinc-200 px-3 py-2 rounded-md w-fit">Top Experts.</h1>
				<p className="text-xl text-muted-foreground tracking-tight">Access to the best experts has never been easier</p>
			</div>

			<div className="flex items-center gap-2">
				<span className="text-muted-foreground text-lg">See All</span>
				<ArrowRight size={16} />
			</div>
		</div>
	)
}

export default SectionIndicatorDesktop
