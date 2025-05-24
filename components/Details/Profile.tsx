// import { Heart } from "lucide-react"
import Image from "next/image"
import { Badge } from "../ui/badge"
// import { useState } from "react";

type ProfileProps = {
  src: string
  name?: string
}

const Profile = ({ name, src }: ProfileProps) => {
  // const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full h-[407px]">
        <Image
          src={src}
          className="w-full h-[407px] object-cover rounded-[8px]"
          alt=""
        />
        {/* <Heart
          className="absolute right-3 top-3"
          color={liked ? "red" : "#cdcbca"}
          fill={liked ? "red" : "transparent"}
          onClick={() => setLiked(!liked)}
        /> */}
        <Badge
          className="absolute bottom-2 left-2 text-md"
          variant={'secondary'}
        >
          Top Expert
        </Badge>
      </div>

      <h1 className="text-2xl font-medium">{name}</h1>
    </div>
  )
}

export default Profile
