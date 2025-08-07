"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useTranslation } from "react-i18next"

const categories = [
	{ value: "all-experts", label: "All Mentors" },
	{ value: "top-experts", label: "Top Mentors" },
	{ value: "business-experts", label: "Business" },
	{ value: "wellness", label: "Wellness" },
	{ value: "career-business", label: "Career & Business" },
	{ value: "style-beauty", label: "Style & Beauty" },
	{ value: "astrology", label: "Astrology & More" },
]

export function CustomTabTrigger({ children }: { children: React.ReactNode }) {
	const [open, setOpen] = React.useState(false)
	const [selectedTab, setSelectedTab] = React.useState("all-experts")

	return (
		<Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full space-y-8">
			<div className="flex justify-center">
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={open}
							className="w-[400px] justify-between"
						>
							{categories.find(c => c.value === selectedTab)?.label ?? "Select category"}
							<ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-[400px] p-0">
						<Command>
							<CommandInput placeholder="Search category..." />
							<CommandList>
								<CommandEmpty>No category found.</CommandEmpty>
								<CommandGroup>
									{categories.map(category => (
										<CommandItem
											key={category.value}
											value={category.value}
											onSelect={(value) => {
												setSelectedTab(value)
												setOpen(false)
											}}
										>
											<CheckIcon
												className={cn(
													"mr-2 h-4 w-4",
													selectedTab === category.value ? "opacity-100" : "opacity-0"
												)}
											/>
											{category.label}
										</CommandItem>
									))}
								</CommandGroup>
							</CommandList>
						</Command>
					</PopoverContent>
				</Popover>
			</div>

			{children}
		</Tabs>
	)
}
