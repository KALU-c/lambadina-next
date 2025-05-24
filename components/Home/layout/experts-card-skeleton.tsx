import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

const ExpertsCardSkeleton = () => {
  return (
    <Card className="max-w-[210px] flex-shrink-0 shadow-none pt-0 border-none">
      <CardContent className="p-0 flex flex-col gap-3">
        <div className="relative w-[210px] min-h-[240px]">
          <Skeleton className="w-[210px] h-[240px] rounded-[8px]" />
        </div>
        <div>
          <Skeleton className="h-6 w-32 mb-1" />
          <Skeleton className="h-5 w-36 mb-2" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-full" />
        </div>
      </CardContent>
    </Card>
  )
}

export default ExpertsCardSkeleton
