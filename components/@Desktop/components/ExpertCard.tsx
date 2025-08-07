import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { BadgeCheck } from 'lucide-react'
import { MentorProfile } from '@/types/mentors'

const ExpertCardDesktop = ({ mentor }: { mentor: MentorProfile }) => {
	const {
		id,
		user,
		bio,
		pricing
	} = mentor;

	return (
		<Card className="max-w-[240px] flex-shrink-0 shadow-none pt-0 border-none rounded-md">
			<CardContent className="p-0 flex flex-col gap-3">
				<div className="relative w-[240px]">
					<Link href={`/mentors/${id}`}>
						<Image
							src={user.profilePicture ?? ''}
							className="w-[240px] h-[240px] object-cover rounded-md"
							alt="card"
							width={240}
							height={240}
						/>
					</Link>
					<Badge
						className="absolute bottom-2 left-2"
						variant={'secondary'}
					>
						Top Expert
					</Badge>
				</div>
				<Link href={`/mentors/${id}`}>
					<div>
						<h2 className="font-medium text-lg flex flex-row gap-[2px] items-center">
							{user.firstName ?? ''}{" "}{user.lastName ?? ''}
							{user.isVerified && <BadgeCheck fill="#ffb102" color="#ffffff" size={20} />}
						</h2>
						<p>ETB {pricing[0].price ?? ''} • Session</p>
						<p className="mt-1 text-md text-muted-foreground line-clamp-2 break-all">
							{bio}
						</p>
					</div>
				</Link>
			</CardContent>
		</Card>
	)
}

export default ExpertCardDesktop
