"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionContentDesktop from "../components/SectionContent"
import { Button } from "@/components/ui/button"
import useMentors from "@/hooks/useMentors"
import useCategories from "@/hooks/useCategories"
import { useTranslation } from "react-i18next"

const CategoriesDesktop = () => {
	const { t } = useTranslation();
	const { isPending: isCategoriesPending, data: categories } = useCategories();
	const { isPending: isMentorsPending, data: mentors } = useMentors();

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
					<h1 className="text-4xl text-center font-medium">Categories</h1>
					<Button variant={"link"} className="text-muted-foreground">See All Categories</Button>
				</div>
				<Tabs defaultValue="all-experts" className="h-full flex flex-col space-y-6">
					<TabsList className="flex flex-row items-start bg-zinc-100 gap-6 justify-start flex-wrap overflow-hidden lg:px-16 md:px-12 w-fit self-center mb-12">
						<TabsTrigger value="all-experts">{t('all_mentors')}</TabsTrigger>
						<TabsTrigger value="top-experts">{t('top_mentors')}</TabsTrigger>
						<TabsTrigger value="business-experts">{t('business')}</TabsTrigger>

						<TabsTrigger value="all_experts4">Wellness</TabsTrigger>
						<TabsTrigger value="all_experts5">Career & Business</TabsTrigger>
						<TabsTrigger value="all_experts6">Style & Beauty</TabsTrigger>
						<TabsTrigger value="al">Astrology & More</TabsTrigger>
					</TabsList>

					<TabsContent value="all-experts" className="flex flex-col space-y-4">
						<SectionContentDesktop />
						<SectionContentDesktop />
						<SectionContentDesktop />
						<SectionContentDesktop />
						<SectionContentDesktop />
					</TabsContent>
					<TabsContent value="all_experts2">
						<SectionContentDesktop />
					</TabsContent>
					<TabsContent value="all_expert3">
						<SectionContentDesktop />
					</TabsContent>
				</Tabs>
			</div>
		</section>
	)
}

export default CategoriesDesktop
