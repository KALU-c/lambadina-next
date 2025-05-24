import { cn } from "@/lib/utils"
import i18next from "i18next"

type SectionIndicatorProps = {
  highlightMainText?: boolean
  mainText: string
  text: string
  className?: string
}

const SectionIndicator = ({
  highlightMainText = true,
  mainText,
  text,
  className
}: SectionIndicatorProps) => {
  return (
    <div className={cn("flex flex-col gap-3 py-2", className)}>
      <div className="text-3xl text-muted-foreground">
        {mainText && (
          <span
            className={cn(
              "text-black dark:text-white mr-2",
              highlightMainText && "bg-[#d9d9d9] p-1 px-2 rounded-[8px]"
            )}
          >
            {i18next.t(mainText)}
          </span>
        )}
        {i18next.t(text)}
      </div>
      {/* <div className="flex flex-row gap-2 text-xl items-center">
        See all
        <ArrowRight size={20} />
      </div> */}
    </div>
  )
}

export default SectionIndicator
