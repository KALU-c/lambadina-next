"use client"

import {
  SiInstagram,
  SiX
} from '@icons-pack/react-simple-icons'
import { Separator } from './ui/separator'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0C0C0C] text-white px-6 py-8 space-y-4">
      <div className='py-6'>
        <span className='text-2xl font-serif font-bold'>{t("footer_title")}</span>
      </div>

      <p className='text-2xl font-extralight pr-10 text-[#E8E4DF]'>
        {t("footer_description")}
      </p>

      <div className='flex flex-col gap-4 py-6'>
        <span className='font-semibold text-xl'>{t("footer_follow_us")}</span>
        <div className='flex flex-row gap-4 items-center'>
          <div className='p-3 rounded-full bg-white'>
            <SiInstagram color='#000000' />
          </div>
          <div className='p-3 rounded-full bg-white'>
            <SiX color='#000000' />
          </div>
        </div>
      </div>

      <Separator className='bg-[#D8D8D8]' />

      <div className='flex flex-col gap-4 py-4'>
        <p className='font-semibold text-xl'>{t("footer_company")}</p>

        <div className='flex flex-col gap-3'>
          <span className='text-lg text-[#E8E4DF] font-light'>{t("footer_about")}</span>
          <span className='text-lg text-[#E8E4DF] font-light'>{t("footer_careers")}</span>
          <span className='text-lg text-[#E8E4DF] font-light'>{t("footer_faq")}</span>
          <span className='text-lg text-[#E8E4DF] font-light'>{t("footer_gift_session")}</span>
          <span className='text-lg text-[#E8E4DF] font-light'>{t("footer_experts")}</span>
        </div>
      </div>

      <Separator className='bg-[#D8D8D8]' />

      <div className='flex flex-col gap-4 py-4'>
        <p className='font-semibold text-xl'>{t("footer_support")}</p>

        <div className='flex flex-col gap-3'>
          <span className='text-lg text-[#E8E4DF] font-light'>{t("footer_contact")}</span>
          <span className='text-lg text-[#E8E4DF] font-light'>{t("footer_feedback")}</span>
          <span className='text-lg text-[#E8E4DF] font-light'>{t("footer_suggest_feature")}</span>
          <span className='text-lg text-[#E8E4DF] font-light'>{t("footer_suggest_topic")}</span>
          <span className='text-lg text-[#E8E4DF] font-light'>{t("footer_footer")}</span>
          <span className='text-lg text-[#E8E4DF] font-light'>{t("footer_terms")}</span>
        </div>
      </div>

      <Separator className='bg-[#D8D8D8]' />

      <span className='text-sm font-light text-[#E8E4DF]'>
        {t("footer_rights_reserved", { year: new Date().getFullYear() })}
      </span>
    </div>
  )
}

export default Footer
