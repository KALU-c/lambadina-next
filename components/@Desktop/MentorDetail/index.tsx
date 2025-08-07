"use client"

import { Button } from "@/components/ui/button"
import { Lightbulb, Star } from "lucide-react"
import Link from "next/link";
import { useTranslation } from "react-i18next"
import ProfileDesktop from "./ProfileDesktop";
import PricingDesktop, { MentorWithUser } from "./PricingDesktop";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import RatingCard from "./RatingCard";
import FooterDesktop from "../components/Footer";
import CtaDesktop from "./CtaDesktop";
import FAQDesktop from "./FaqAccordionDesktop";
import NavBarDesktop from "../components/NavBarDesktop";

const MentorDetailDesktop = ({ mentor }: { mentor: MentorWithUser | null }) => {
	const { t } = useTranslation();
	const pricingRef = useRef<HTMLDivElement | null>(null);

	if (!mentor) return null

	return (
		<main className="flex flex-col space-y-40">
			<div className="xl:px-[200px] lg:px-[150px] md:px-[50px]">
				<NavBarDesktop />

				<div className="flex flex-row gap-2 text-lg flex-wrap mb-2">
					<Link href={"/"}>{t("details_breadcrumb_home")}</Link>
					/
					<span className="text-muted-foreground">
						{mentor.user.firstName ?? ''} {mentor.user.lastName ?? ''}
					</span>
				</div>

				<div className="flex flex-row justify-between items-start w-full gap-8">
					<div className="flex flex-col space-y-8 flex-1">
						<ProfileDesktop
							name={`${mentor.user.firstName ?? ''} ${mentor.user.lastName ?? ''}`}
							src={mentor.user.profilePicture ?? ''}
						/>

						<div className="flex flex-col gap-4">
							<h2 className="text-lg font-medium">About Me</h2>
							<div className="text-muted-foreground flex flex-col gap-2">
								{mentor.bio}
							</div>
						</div>

						<div className="flex flex-col gap-6">
							<div className="flex flex-col gap-1">
								<h3 className="text-lg font-medium">Why it's valuable</h3>

								<div className="flex flex-row gap-1 items-center">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											size={20}
											color="#FFB000"
											fill={i < Math.floor(mentor.rating) ? "#FFB000" : "none"}
										/>
									))}

									<div className="text-[#e29a00] flex flex-row items-center ml-2">
										<p>{mentor.rating.toFixed(1)}</p>
										{/* <span className="text-muted-foreground text-sm ml-2">(45 reviews)</span> */}
									</div>
								</div>
							</div>

							{/* <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
								<RatingCard />
								<RatingCard />
								<RatingCard />
								<RatingCard />
								<RatingCard />
								<RatingCard />
							</div> */}
						</div>
					</div>
					<div className="flex-1 max-w-md flex flex-col space-y-10">
						<PricingDesktop ref={pricingRef} mentor={mentor} />

						<Separator />

						<div className="flex flex-col gap-4">
							<p className="text-xl font-medium">What to expect</p>

							<div className="bg-zinc-100 p-4 rounded-md flex flex-col gap-2">
								<p className="text-lg font-medium">15 minute session</p>
								<span className="text-sm text-muted-foreground">
									{mentor.bio}
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="py-10 flex flex-col gap-2">
					<h2 className="text-2xl font-medium">How it works</h2>
					<CtaDesktop />
				</div>

				<Separator />

				<div className="pt-20 2xl:px-40">
					<FAQDesktop />
				</div>
			</div>

			<FooterDesktop />
		</main>
	)
}
export default MentorDetailDesktop