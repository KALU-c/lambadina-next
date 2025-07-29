import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionIndicatorDesktop from "../components/SectionIndicator"
import SectionContentDesktop from "../components/SectionContent"
import { Button } from "@/components/ui/button"

const CategoriesDesktop = () => {
	return (
		<section className="xl:px-[200px] lg:px-[100px] md:px-[50px] pt-10">
			<div className="flex flex-col gap-4">
				<div className="flex flex-col">
					<h1 className="text-4xl text-center font-medium">Categories</h1>
				<Button variant={"link"} className="text-muted-foreground">See All Categories</Button>
				</div>
				<Tabs defaultValue="all_experts" className="h-full flex flex-col space-y-6">
						<TabsList className="flex flex-row items-start bg-zinc-100 gap-6 justify-start flex-wrap overflow-hidden lg:px-16 md:px-12 w-fit self-center mb-12">
						<TabsTrigger value="all_experts">All Experts</TabsTrigger>
						<TabsTrigger value="all_experts2">Top Experts</TabsTrigger>
						<TabsTrigger value="all_experts3">Business Experts</TabsTrigger>
						<TabsTrigger value="all_experts4">Wellness</TabsTrigger>
						<TabsTrigger value="all_experts5">Career & Business</TabsTrigger>
						<TabsTrigger value="all_experts6">Style & Beauty</TabsTrigger>
						<TabsTrigger value="al">Astrology & More</TabsTrigger>
					</TabsList>
					
					<TabsContent value="all_experts" className="flex flex-col space-y-4">
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
