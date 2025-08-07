"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import useMentors from "@/hooks/useMentors"
import useCategories from "@/hooks/useCategories"
import { useTranslation } from "react-i18next"
import { useMemo, useState } from "react"
import { MentorProfile } from "@/types/mentors"
import SectionIndicatorDesktop from "../components/SectionIndicator"
import ExpertsCardCarousel from "../components/ExpertsCardCarousel"
import { CustomTabTrigger } from "../components/CustomTabTrigger"
import { Category } from "@prisma/client"

const CategoriesDesktop = () => {
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useState("all-experts");
	const { isPending: isCategoriesPending, data: categories } = useCategories();
	const { isPending: isMentorsPending, data: mentors } = useMentors();

	const groupedMentors = useMemo(() => {
		const groups: Record<string, MentorProfile[]> = {}

		categories?.categories.forEach(category => {
			const categoryMentors = mentors?.mentors.filter(mentor =>
				mentor.categories.some(c => c.id === category.id)
			)

			if (!categoryMentors) {
				return;
			}

			if (categoryMentors.length > 0) {
				groups[category.name] = categoryMentors
			}
		})

		return groups
	}, [categories, mentors])

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
					<h1 className="text-2xl text-center font-medium">Categories</h1>
				</div>
				<Tabs defaultValue="all-experts" className="h-full flex flex-col space-y-6" onValueChange={setActiveTab}>
					<CustomTabTrigger 
						activeTab={activeTab} 
						setActiveTab={setActiveTab}
						categories={categories?.categories as Category[]}
					>
						<TabsContent value="all-experts" className="flex flex-col space-y-4">
							<div className="py-4 flex flex-col gap-4">
								<SectionIndicatorDesktop
									title="All Experts"
									description="Browse through our diverse pool of experts"
								/>
								<ExpertsCardCarousel
									mentors={mentors?.mentors as MentorProfile[]}
								/>
							</div>
						</TabsContent>

						<TabsContent value="top-experts" className="flex flex-col space-y-4">
							<div className="py-4 flex flex-col gap-4">
								<SectionIndicatorDesktop
									title="Top Experts"
									description="Top Rated Experts."
								/>
								<ExpertsCardCarousel
									mentors={mentors?.mentors.filter(mentor => mentor.rating >= 4.5) as MentorProfile[]}
								/>
							</div>
						</TabsContent>

						<TabsContent value="business-experts" className="flex flex-col space-y-4">
							<div className="py-4 flex flex-col gap-4">
								<SectionIndicatorDesktop
									title="Business Experts"
									description="Experts in business strategy and growth"
								/>
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
									<SectionIndicatorDesktop
										title={category.name}
										description={category.description}
									/>
									<ExpertsCardCarousel
										mentors={mentors?.mentors.filter(mentor => mentor.categories.some(c => c.id === category.id)) as MentorProfile[]}
									/>
								</div>
							</TabsContent>
						))}
					</CustomTabTrigger>
				</Tabs>

				{activeTab === "all-experts" && (
					<>
						{Object.entries(groupedMentors).map(([categoryName, mentors]) => (
							<div>
								<div className="py-4 flex flex-col gap-4">
									<SectionIndicatorDesktop
										title={categoryName}
										description={categories?.categories.find(c => c.name === categoryName)?.description ?? ''}
									/>
									<ExpertsCardCarousel
										mentors={mentors?.filter(mentor => mentor.categories.some(c => c.name === categoryName)) as MentorProfile[]}
									/>
								</div>
							</div>
						))}
					</>
				)}
			</div>
		</section>
	)
}

export default CategoriesDesktop
