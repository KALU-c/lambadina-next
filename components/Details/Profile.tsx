// import { Heart } from "lucide-react"
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
        <img
          src={src}
          className="w-full h-[407px] object-cover rounded-[8px]"
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

        {/* <div className="absolute bg-gradient-to-br from-gray-600 to-gray-900 h-[60px] aspect-square -bottom-6 right-2 flex flex-col items-center justify-center rounded-full">
          <img
            src="/icons/chat.svg"
            className="h-[32px] w-[28px]"
          />
        </div> */}
      </div>

      <h1 className="text-2xl font-medium">{name}</h1>
    </div>
  )
}

export default Profile
