import * as z from "zod";
import i18n from "@/lib/i18n"; // your i18next config

const commonPasswords = [
  "password",
  "12345678",
  "qwerty",
  "123456789",
  "123456",
  "111111",
  "123123",
  "abc123",
];

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(1, i18n.t("zod_register_username_required"))
      .max(150, i18n.t("zod_register_username_max"))
      .regex(/^[\w.@+-]+$/, i18n.t("zod_register_username_invalid")),

    password: z
      .string()
      .min(8, i18n.t("zod_register_password_too_short"))
      .refine(
        (val) => !commonPasswords.includes(val),
        { message: i18n.t("zod_register_password_too_common") }
      )
      .refine(
        (val) => !/^\d+$/.test(val),
        { message: i18n.t("zod_register_password_entirely_numeric") }
      )
      .describe("writeOnly"),

    password2: z
      .string()
      .min(1, i18n.t("zod_register_password2_required"))
      .describe("writeOnly"),

    email: z
      .string()
      .email(i18n.t("zod_register_email_invalid"))
      .max(254, i18n.t("zod_register_email_max"))
      .optional(),

    first_name: z
      .string()
      .max(150, i18n.t("zod_register_first_name_max"))
      .optional(),

    last_name: z
      .string()
      .max(150, i18n.t("zod_register_last_name_max"))
      .optional(),

    phone_number: z
      .string()
      .max(15, i18n.t("zod_register_phone_max"))
      .optional(),

    user_type: z
      .enum(["client", "mentor", "admin"], {
        errorMap: () => ({ message: i18n.t("zod_register_user_type_required") }),
      }),

    profile_picture: z
      .string()
      .nullable()
      .optional(),
  })
  .refine((data) => data.password === data.password2, {
    message: i18n.t("zod_register_passwords_must_match"),
    path: ["password2"],
  });
