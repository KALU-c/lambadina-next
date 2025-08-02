import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const FooterDesktop = ({ className }: { className?: string }) => {
	const { t } = useTranslation();

	return (
		<div className={cn("bg-[#0C0C0C] text-white px-6 py-8 space-y-4 flex flex-col items-center min-h-64", className)}>
			<div className="flex flex-col gap-8 py-24">
				<span className='text-4xl font-serif font-bold text-center leading-0 '>{t("footer_title")}</span>
				<p className='text-2xl font-extralight pr-10 text-[#E8E4DF] text-center'>
					{t("footer_description")}
				</p>
			</div>

			<span className='text-sm font-light text-[#E8E4DF] mt-10'>
				{t("footer_rights_reserved", { year: new Date().getFullYear() })}
			</span>
		</div>
	)
}
export default FooterDesktop
