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
import { Tabs } from "@/components/ui/tabs"
import { Category } from "@prisma/client"

export function CustomTabTrigger({
	children,
	activeTab,
	setActiveTab,
	categories
}: {
	children: React.ReactNode,
	activeTab: string
	setActiveTab: React.Dispatch<React.SetStateAction<string>>
	categories: Category[]
}) {
	const [open, setOpen] = React.useState(false)

	const allCategories = [
		{ value: "all-experts", label: "All Mentors" },
		{ value: "top-experts", label: "Top Mentors" },
		...categories.map(category => ({
			value: category.name.toLowerCase().split(' ').join('-'),
			label: category.name
		}))
	]

	return (
		<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full space-y-8">
			<div className="flex justify-center">
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={open}
							className="w-[400px] justify-between"
						>
							{allCategories.find(c => c.value === activeTab)?.label ?? "Select category"}
							<ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-[400px] p-0">
						<Command>
							<CommandInput placeholder="Search category..." />
							<CommandList>
								<CommandEmpty>No category found.</CommandEmpty>
								<CommandGroup>
									{allCategories.map(category => (
										<CommandItem
											key={category.value}
											value={category.value}
											onSelect={(value) => {
												setActiveTab(value)
												setOpen(false)
											}}
										>
											<CheckIcon
												className={cn(
													"mr-2 h-4 w-4",
													activeTab === category.value ? "opacity-100" : "opacity-0"
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
