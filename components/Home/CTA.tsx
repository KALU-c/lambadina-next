import { cn } from "@/lib/utils"
import type { CtaCardProps } from "./layout/cta-card"
import CtaCard from "./layout/cta-card"

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

const CTA = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col gap-6 py-2", className)}>
      {CTA_DATA.map(item => (
        <CtaCard
          key={item.title}
          src={item.src}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default CTA
