import { cn } from "@/lib/utils"
import type { CtaCardProps } from "@/components/Home/layout/cta-card"
import CtaCardDesktop from "./CtaCardDesktop"

const CTA_DATA: CtaCardProps[] = [
	{
		src: "/icons/search.png",
		title: "cta_find_expert_title",
		description: "cta_find_expert_desc"
	},
	{
		src: "/icons/calendar.png",
		title: "cta_book_call_title",
		description: "cta_book_call_desc"
	},
	{
		src: "/icons/camera.png",
		title: "cta_virtual_consultation_title",
		description: "cta_virtual_consultation_desc"
	}
]

const CtaDesktop = ({ className }: { className?: string }) => {
	return (
		<div className={cn("flex flex-row gap-6 py-2", className)}>
			{CTA_DATA.map(item => (
				<CtaCardDesktop
					key={item.title}
					src={item.src}
					title={item.title}
					description={item.description}
				/>
			))}
		</div>
	)
}

export default CtaDesktop
