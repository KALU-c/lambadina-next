import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { BadgeCheck } from 'lucide-react'

const ExpertCardDesktop = () => {
	return (
		<Card className="max-w-[240px] flex-shrink-0 shadow-none pt-0 border-none rounded-md">
			<CardContent className="p-0 flex flex-col gap-3">
				<div className="relative w-[240px]">
					<Link href={`/mentors/1`}>
						{/* TODO - add fallback image */}
						<Image
							src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
							className="w-[240px] h-[240px] object-cover rounded-md"
							alt="card"
							width={240}
							height={240}
						/>
					</Link>
					{/* <Heart
            className="absolute right-3 top-3"
            color={liked ? "red" : "#cdcbca"}
            fill={liked ? "red" : "transparent"}
            onClick={() => setLiked(!liked)}
          /> */}
					<Badge
						className="absolute bottom-2 left-2"
						variant={'secondary'}
					>
						Top Expert
					</Badge>
				</div>
				<Link href={`/mentors/1`}>
					<div>
						<h2 className="font-medium text-lg flex flex-row gap-[2px] items-center">
							Endekalu Zemenu
							{true && <BadgeCheck fill="#ffb102" color="#ffffff" size={20} />}
						</h2>
						<p>ETB 2000 • Session</p>
						<p className="mt-1 text-md text-muted-foreground line-clamp-2 break-all">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit aperiam, nostrum totam molestias at sit!
						</p>
					</div>
				</Link>
			</CardContent>
		</Card>
	)
}

export default ExpertCardDesktop
