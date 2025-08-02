// import { Heart } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type ProfileProps = {
  src: string
  name?: string
  className?: string
}

const ProfileDesktop = ({ name, src, className }: ProfileProps) => {
  return (
    <div className={cn("flex flex-col gap-2 flex-1 ", className)}>
      <div className="relative w-full">
        <Image
          src={src}
          className="w-full h-[500px] object-cover rounded-[8px]"
          alt=""
          width={407}
          height={407}
        />
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

export default ProfileDesktop
