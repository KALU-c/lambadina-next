import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation();

  return (
    <div className="h-[360px] w-full min-w-[330px] bg-zinc-100 flex flex-col items-center justify-center rounded-[8px] gap-4">
      <img
        src={src}
        className="h-[68px] w-[68px]"
      />

      <div className="flex flex-col gap-2 px-12">
        <h3 className="font-medium text-2xl text-center">{t(title)}</h3>
        <p className="text-center text-xl font-light">
          {t(description)}
        </p>
      </div>
    </div>
  )
}

export default CtaCard
