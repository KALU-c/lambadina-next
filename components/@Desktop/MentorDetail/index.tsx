"use client"

import { Button } from "@/components/ui/button"
import { Lightbulb } from "lucide-react"
import Link from "next/link";
import { useTranslation } from "react-i18next"
import ProfileDesktop from "./ProfileDesktop";
import useMentor from "@/hooks/useMentor";
import PricingDesktop, { MentorWithUser } from "./PricingDesktop";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";

const MentorDetailDesktop = ({ mentor }: { mentor: MentorWithUser | null }) => {
	const { t } = useTranslation();
	const pricingRef = useRef<HTMLDivElement | null>(null);

	console.log(mentor)

	if(!mentor) return null

	return (
		<main className="xl:px-[200px] lg:px-[150px] md:px-[50px]">
			<nav className="flex-between py-4">
				<h1 className="text-2xl flex items-center gap-2">
					<Lightbulb color="#FFB000" />
					Lambadina
				</h1>
				<div className="flex-center gap-4">
					<Button variant={"link"} className="text-black">Become a mentor</Button>
					<Button variant={"link"} className="text-black">Contact us</Button>
					<Button variant={"ghost"}>Login</Button>
					<Button>Sign Up</Button>
				</div>
			</nav>

			<div className="flex flex-row gap-2 text-lg flex-wrap">
				<Link href={"/"}>{t("details_breadcrumb_home")}</Link>
				/
				<span className="text-muted-foreground">
					Endekalu Zemenu
				</span>
			</div>

			<div className="flex flex-row justify-between items-start w-full gap-8">
				<ProfileDesktop
					name="Endekalu Zemenu"
					src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				/>
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
		</main>
	)
}
export default MentorDetailDesktop