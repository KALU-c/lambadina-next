"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionContentDesktop from "../components/SectionContent"
import { Button } from "@/components/ui/button"
import useMentors from "@/hooks/useMentors"
import useCategories from "@/hooks/useCategories"
import { useTranslation } from "react-i18next"
import { Suspense } from "react"
import { MentorProfile } from "@/types/mentors"
import ExpertsCardSkeleton from "@/components/Home/layout/experts-card-skeleton"
import ExpertCardDesktop from "../components/ExpertCard"
import SectionIndicatorDesktop from "../components/SectionIndicator"
import ExpertsCardCarousel from "../components/ExpertsCardCarousel"
import { CustomTabTrigger } from "../components/CustomTabTrigger"

const CategoriesDesktop = () => {
	const { t } = useTranslation();
	const { isPending: isCategoriesPending, data: categories } = useCategories();
	const { isPending: isMentorsPending, data: mentors } = useMentors();

	console.log(categories, mentors)
	console.log("filtered: ", mentors?.mentors.filter(mentor => mentor.categories.some(c => c.id === 36)))

	if (isCategoriesPending || isMentorsPending) {
		return (
			<div className="py-12 text-center text-gray-500 text-lg">
				{t("loading")}...
			</div>
		)
	}


	return (
		<section className="xl:px-[200px] lg:px-[100px] md:px-[50px] pt-10">
			<div className="flex flex-col gap-4">
				<div className="flex flex-col">
					<h1 className="text-3xl text-center font-medium">Categories</h1>
				</div>
				<Tabs defaultValue="all-experts" className="h-full flex flex-col space-y-6">

					<CustomTabTrigger>
						<TabsContent value="all-experts" className="flex flex-col space-y-4">
							<div className="py-4 flex flex-col gap-4">
								<SectionIndicatorDesktop />
								<ExpertsCardCarousel
									mentors={mentors?.mentors as MentorProfile[]}
								/>
							</div>
						</TabsContent>

						<TabsContent value="top-experts" className="flex flex-col space-y-4">
							<div className="py-4 flex flex-col gap-4">
								<SectionIndicatorDesktop />
								<ExpertsCardCarousel
									mentors={mentors?.mentors.filter(mentor => mentor.rating >= 4.5) as MentorProfile[]}
								/>
							</div>
						</TabsContent>

						<TabsContent value="business-experts" className="flex flex-col space-y-4">
							<div className="py-4 flex flex-col gap-4">
								<SectionIndicatorDesktop />
								<ExpertsCardCarousel
									mentors={mentors?.mentors.filter(mentor => mentor.categories.some(category => category.name.toLowerCase().includes('business'))) as MentorProfile[]}
								/>
							</div>
						</TabsContent>

						{categories?.categories.map(category => (
							<TabsContent
								key={category.id}
								value={category.name.toLowerCase().split(' ').join('-')}
							>
								<div className="py-4 flex flex-col gap-4">
									<SectionIndicatorDesktop />
									<ExpertsCardCarousel
										mentors={mentors?.mentors.filter(mentor => mentor.categories.some(c => c.id === category.id)) as MentorProfile[]}
									/>
								</div>
							</TabsContent>
						))}
					</CustomTabTrigger>
				</Tabs>
			</div>
		</section>
	)
}

export default CategoriesDesktop
