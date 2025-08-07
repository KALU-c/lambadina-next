// import { Heart } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

type ProfileProps = {
  src: string
  name?: string
  className?: string
}

const ProfileDesktop = ({ name, src, className }: ProfileProps) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
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

      <div className="flex flex-col gap-0">
        <h1 className="text-2xl font-medium">{name}</h1>
        {/* <div className="flex flex-row gap-1 items-center">
          <Star size={15} color="#FFB000" fill="#FFB000" />
          <Star size={15} color="#FFB000" fill="#FFB000" />
          <Star size={15} color="#FFB000" fill="#FFB000" />
          <Star size={15} color="#FFB000" fill="#FFB000" />
          <Star size={15} color="#FFB000" fill="#FFB000" />

          <div className="text-[#e29a00] flex flex-row items-center ml-2">
            <p>5.0</p>
            <span className="text-muted-foreground text-sm ml-2">(45 reviews)</span>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default ProfileDesktop
