import i18next from "i18next"
import Image from "next/image"

export type CtaCardProps = {
  src: string
  title: string
  description: string
}

const CtaCard = ({
  src,
  title,
  description
}: CtaCardProps) => {
  return (
    <div className="h-[360px] w-full min-w-[330px] bg-zinc-100 flex flex-col items-center justify-center rounded-[8px] gap-4">
      <Image
        src={src}
        className="h-[68px] w-[68px]"
        alt="cta"
        width={40}
        height={68}
      />

      <div className="flex flex-col gap-2 px-12">
        <h3 className="font-medium text-2xl text-center">{i18next.t(title)}</h3>
        <p className="text-center text-xl font-light">
          {i18next.t(description)}
        </p>
      </div>
    </div>
  )
}

export default CtaCard
