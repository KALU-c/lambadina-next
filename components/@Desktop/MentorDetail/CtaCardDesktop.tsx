import i18next from "i18next"
import Image from "next/image"

export type CtaCardProps = {
  src: string
  title: string
  description: string
}

const CtaCardDesktop = ({
  src,
  title,
  description
}: CtaCardProps) => {
  return (
    <div className="h-[300px] w-full min-w-[270px] bg-zinc-100 flex flex-col items-center justify-center rounded-[8px] gap-4">
      <Image
        src={src}
        className="h-[60px] w-[60px]"
        alt="cta"
        width={40}
        height={68}
      />

      <div className="flex flex-col gap-2 px-12">
        <h3 className="font-medium text-lg text-center">{i18next.t(title)}</h3>
        <p className="text-center text-md font-light">
          {i18next.t(description)}
        </p>
      </div>
    </div>
  )
}

export default CtaCardDesktop
