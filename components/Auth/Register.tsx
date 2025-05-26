"use client"

import Footer from "../Footer";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import AuthNavbar from "./AuthNavbar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schema/registerSchema";
import * as z from "zod";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const Register = () => {
  const { t } = useTranslation();
  const { register, isLoading } = useAuth();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      password2: "",
      user_type: "client",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    await register(values);
  };

  return (
    <>
      <main className="px-[22px] pt-[10px] flex flex-col space-y-8 mb-14">
        <AuthNavbar />

        <Card>
          <CardHeader className="flex flex-col gap-8 items-center justify-center">
            <Image
              src="/logo.png"
              alt="lambadina logo"
              className="h-8 w-full object-contain text-center"
              width={100}
              height={30}
              unoptimized
              priority
            />

            <div className="flex flex-col">
              <p className="text-center text-2xl">{t("register_create_account")}</p>
              <span className="text-muted-foreground text-lg">
                {t("register_join_platform")}
              </span>
            </div>
          </CardHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="py-2 flex flex-col space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-light">{t("register_username")}</FormLabel>
                      <FormControl>
                        <Input {...field} className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-light">{t("register_email")}</FormLabel>
                      <FormControl>
                        <Input {...field} className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-light">{t("register_password")}</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-light">{t("register_confirm_password")}</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="user_type"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col gap-2 py-6">
                        <span className="text-lg">{t("register_i_want_to_join_as")}</span>
                        <RadioGroup
                          defaultValue="client"
                          onValueChange={field.onChange}
                          className="flex flex-row gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem className="h-5 w-5 [&_svg]:h-3 [&_svg]:w-3" id="client" value="client" />
                            <Label htmlFor="client" className="text-md font-light">{t("register_client")}</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem className="h-5 w-5 [&_svg]:h-3 [&_svg]:w-3" id="mentor" value="mentor" />
                            <Label htmlFor="mentor" className="text-md font-light">{t("register_mentor")}</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>

              <CardFooter className="flex flex-col gap-1">
                <Button
                  size={"lg"}
                  className="w-full text-lg py-6"
                  type="submit"
                  disabled={isLoading}
                >
                  <Loader className={isLoading ? "block animate-spin mr-2" : "hidden"} />
                  {t("register_create_account_button")}
                </Button>
                <p className="text-muted-foreground">
                  {t("register_already_have_an_account")}{" "}
                  <Link href={"/login"}>
                    <span className="underline underline-offset-1 text-[#FFB000]">
                      {t("register_sign_in")}
                    </span>
                  </Link>
                </p>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default Register;
