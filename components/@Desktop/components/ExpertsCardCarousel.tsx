"use client"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { MentorProfile } from "@/types/mentors"
import ExpertCardDesktop from "./ExpertCard"
import { Suspense } from "react"
import ExpertsCardSkeleton from "@/components/Home/layout/experts-card-skeleton"

const ExpertsCardCarousel = ({ mentors }: { mentors: MentorProfile[] }) => {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="w-full"
		>
			<CarouselContent>
				{mentors.map(mentor => (
					<CarouselItem key={mentor.id} className="2xl:basis-1/6 xl:basis-1/4 lg:basis-1/3 md:basis-1/3 sm:basis-1/2 basis-1 flex flex-row gap-4 overflow-x-auto scrollbar-hide">
						<Suspense key={mentor.id} fallback={<ExpertsCardSkeleton />}>
							<ExpertCardDesktop mentor={mentor} />
						</Suspense>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
export default ExpertsCardCarousel