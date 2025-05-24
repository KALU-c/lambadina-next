import { MENTORS } from "@/constants/mentors"
import ExpertsCard from "./layout/experts-card"
import SectionIndicator from "./layout/section-indicator"
import { Suspense } from "react"
import ExpertsCardSkeleton from "./layout/experts-card-skeleton"

const CreativeAndMedia = () => {
  return (
    <>
      <SectionIndicator
        highlightMainText={false}
        mainText="Creative & Media Services"
        text="Your story, beautifully told – visuals & media that sell! and more."
      />

      <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
        {MENTORS.map(mentor => (
          <Suspense fallback={<ExpertsCardSkeleton />}>
            <ExpertsCard mentor={mentor} />
          </Suspense>
        ))}
      </div>
    </>
  )
}

export default CreativeAndMedia
