import { Star } from "lucide-react"

const RatingCard = () => {
	return (
		<div className="bg-zinc-100 p-4 rounded-md flex flex-col gap-2 max-w-md">
			<div className="flex flex-col gap-0">
				<div className="flex flex-row items-center justify-between">
					<p className="text-md font-medium">Endekalu Zemenu</p>
					<div className="flex flex-row gap-[2px] items-center">
						<Star size={14} color="#FFB000" fill="#FFB000" />
						<Star size={14} color="#FFB000" fill="#FFB000" />
						<Star size={14} color="#FFB000" fill="#FFB000" />
						<Star size={14} color="#FFB000" fill="#FFB000" />
						<Star size={14} color="#FFB000" fill="#FFB000" />
					</div>
				</div>
				<span className="text-xs text-muted-foreground">April 2024</span>
			</div>
			{/* TODO - add view more button */}
			<p className="text-md text-muted-foreground line-clamp-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est optio enim praesentium id fuga numquam vel doloribus? Tempora, fugiat ad ea voluptatum quibusdam officia alias optio vero veritatis doloremque minus distinctio, repellendus nemo aliquid possimus. Repudiandae voluptatum autem, nemo voluptatibus quidem tempore recusandae! Perspiciatis nihil nam, velit quis ipsam explicabo.</p>
		</div>
	)
}
export default RatingCard