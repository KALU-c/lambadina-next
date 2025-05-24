import { MENTORS } from "@/constants/mentors"
import ExpertsCard from "./layout/experts-card"
import SectionIndicator from "./layout/section-indicator"
import { Suspense } from "react"
import ExpertsCardSkeleton from "./layout/experts-card-skeleton"

const LegalAndCompliance = () => {
  return (
    <>
      <SectionIndicator
        mainText="Legal & Compliance"
        text="Stay compliant, avoid risks - legal help made simple."
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

export default LegalAndCompliance
