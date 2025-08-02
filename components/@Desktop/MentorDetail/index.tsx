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

				<div className="flex flex-row gap-2 text-lg flex-wrap">
					<Link href={"/"}>{t("details_breadcrumb_home")}</Link>
					/
					<span className="text-muted-foreground">
						Endekalu Zemenu
					</span>
				</div>

				<div className="flex flex-row justify-between items-start w-full gap-8">
					<div className="flex flex-col space-y-8 flex-1">
						<ProfileDesktop
							name="Endekalu Zemenu"
							src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>

						<div className="flex flex-col gap-4">
							<h2 className="text-lg font-medium">About Me</h2>
							<div className="text-muted-foreground flex flex-col gap-2">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit harum, a esse ut amet temporibus est magni saepe inventore optio provident, et, voluptate ea. Consectetur neque porro odio, exercitationem obcaecati molestiae et eius doloremque dolorem fuga dolorum voluptates inventore aliquid commodi suscipit id, in aliquam quisquam iste expedita quas vel. Quos quia quam, voluptate, cumque odio pariatur labore harum architecto

								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit harum, a esse ut amet temporibus est magni saepe inventore optio provident, et, voluptate ea. Consectetur neque porro odio, exercitationem obcaecati molestiae et eius doloremque dolorem fuga dolorum voluptates inventore aliquid commodi suscipit id, in aliquam quisquam iste expedita quas vel. Quos quia quam, voluptate, cumque odio pariatur labore harum architecto

								</p>
								<p>
									esse assumenda unde quibusdam nesciunt hic dolores soluta quaerat obcaecati qui perferendis dignissimos repellendus sequi? Qui, dolores? Similique voluptatum aliquam ipsam magni voluptatibus nemo eveniet mollitia nisi aperiam iste expedita officia rem optio sapiente tempora neque dolore, incidunt veritatis molestias quasi praesentium tempore. Animi ullam corporis, rem officia aperiam libero illum molestias culpa eos optio maiores distinctio deserunt corrupti doloremque saepe voluptas non necessitatibus labore pariatur tenetur assumenda obcaecati? Expedita minus iure tempora quis obcaecati, beatae, ad sapiente, iusto itaque voluptates minima. Repellendus, voluptas delectus? Atque natus iure officia voluptas repudiandae eveniet totam, quibusdam adipisci. Perferendis aut excepturi magni, eaque autem perspiciatis eveniet esse fugiat nostrum repudiandae expedita labore praesentium exercitationem animi quis aspernatur nesciunt porro sint explicabo. Necessitatibus quam impedit, aspernatur similique nostrum aperiam dolorem quia magnam perspiciatis eos exercitationem voluptatibus maxime quaerat repudiandae odit, atque in minus ea.
								</p>
							</div>
						</div>

						<div className="flex flex-col gap-6">
							<div className="flex flex-col gap-1">
								<h3 className="text-lg font-medium">Why it's valuable</h3>

								<div className="flex flex-row gap-1 items-center">
									<Star size={20} color="#FFB000" fill="#FFB000" />
									<Star size={20} color="#FFB000" fill="#FFB000" />
									<Star size={20} color="#FFB000" fill="#FFB000" />
									<Star size={20} color="#FFB000" fill="#FFB000" />
									<Star size={20} color="#FFB000" fill="#FFB000" />

									<div className="text-[#e29a00] flex flex-row items-center ml-2">
										<p>5.0</p>
										<span className="text-muted-foreground text-sm ml-2">(45 reviews)</span>
									</div>
								</div>
							</div>

							<div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
								<RatingCard />
								<RatingCard />
								<RatingCard />
								<RatingCard />
								<RatingCard />
								<RatingCard />
							</div>
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
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus modi earum sint, accusamus similique, vitae fugiat vel eligendi nam aut recusandae, rerum voluptatum ab repellendus! Corrupti tenetur exercitationem ipsam asperiores ad accusamus distinctio, mollitia error, cupiditate tempora reprehenderit repellat officia!
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