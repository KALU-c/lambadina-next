import { Skeleton } from "@/components/ui/skeleton"
import { Avatar } from "@/components/ui/avatar"

const ExpertsCarouselSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 py-2">
      <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
        <Avatar className="h-[96px] w-[96px]">
          <Skeleton className="w-full h-full rounded-full" />
        </Avatar>

        <Avatar className="h-[96px] w-[96px]">
          <Skeleton className="w-full h-full rounded-full" />
        </Avatar>

        <Avatar className="h-[96px] w-[96px]">
          <Skeleton className="w-full h-full rounded-full" />
        </Avatar>

        <Avatar className="h-[96px] w-[96px]">
          <Skeleton className="w-full h-full rounded-full" />
        </Avatar>
      </div>
    </div>
  )
}

export default ExpertsCarouselSkeleton
