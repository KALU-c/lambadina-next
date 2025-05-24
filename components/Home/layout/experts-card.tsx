import { BadgeCheck } from "lucide-react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
// import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MentorProfile } from "@/types/mentors"
import Image from "next/image"

const ExpertsCard = ({ mentor }: { mentor: MentorProfile }) => {
  // const [liked, setLiked] = useState(false);

  const {
    id,
    user,
    bio,
    pricePerMinute
  } = mentor;

  return (
    <Card className="max-w-[210px] flex-shrink-0 shadow-none pt-0 border-none">
      <CardContent className="p-0 flex flex-col gap-3">
        <div className="relative w-[210px] min-h-[240px]">
          <Link href={`/mentors/${id}`}>
            {/* TODO - add fallback image */}
            <Image
              src={user.profilePicture ?? ''}
              className="w-[210px] h-[240px] object-cover rounded-[8px]"
              alt="card"
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
        <Link href={`/mentors/${id}`}>
          <div>
            <h2 className="font-medium text-lg flex flex-row gap-[2px] items-center">
              {user.firstName}{" "}{user.lastName}
              {user.isVerified && <BadgeCheck fill="#ffb102" color="#ffffff" size={20} />}
            </h2>
            <p>ETB {pricePerMinute} • Session</p>
            <p className="mt-1 text-md text-muted-foreground line-clamp-3">
              {bio}
            </p>
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}
export default ExpertsCard
