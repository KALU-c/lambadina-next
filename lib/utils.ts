import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { t } from "i18next";
import i18n from "./i18n";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const playNotificationSound = () => {
  const audio = new Audio('/sounds/toast.wav')
  audio.play().catch(err => {
    console.error("Failed to play sound", err)
  })
}

export const changeLanguage = (newLang: string) => {
  i18n.changeLanguage(newLang);
  localStorage.setItem("lambadina_i18nextLgn", newLang);

  toast.success(t("language_changed_to", { lang: newLang === "en" ? "English" : newLang === "am" ? "Amharic" : "Afaan Oromo" }));
  playNotificationSound();
};

export function toBase64(file: File) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}