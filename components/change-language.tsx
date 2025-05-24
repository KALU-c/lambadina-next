"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import i18n from "@/lib/i18n";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Languages } from "lucide-react";
import { changeLanguage } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type SupportedLanguages = 'en' | 'am' | 'om'

export default function ChangeLanguage() {
  const { t } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguages>(i18n.language as SupportedLanguages);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage)
  }, [currentLanguage]);

  const handleLanguageChange = (value: string) => {
    setCurrentLanguage(value as SupportedLanguages);
    changeLanguage(value);
  }

  return (
    <Select
      defaultValue={currentLanguage}
      onValueChange={handleLanguageChange}
    >
      <SelectTrigger className="border-none hover:bg-accent shadow-none w-full p-0">
        <Button variant={'secondary'} className="w-full justify-start">
          <Languages />
          {t("change_language")}
        </Button>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup defaultValue={currentLanguage}>
          <SelectLabel>{t("select_language")}</SelectLabel>
          <SelectItem value="am">{t("language_amharic")}</SelectItem>
          <SelectItem value="en">{t("language_english")}</SelectItem>
          <SelectItem value="om">{t("language_afaan_oromo")}</SelectItem>
          <SelectItem value="tg">{t("language_tigrigna")}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}