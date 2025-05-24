"use client"

import Footer from "../Footer";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import AuthNavbar from "./AuthNavbar";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loginSchema } from "@/schema/loginSchema";
import { Loader } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const { t } = useTranslation();

  const { isLoading, login } = useAuth()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    await login(values.username, values.password);
  };

  return (
    <>
      <main className="px-[22px] pt-[10px] flex flex-col space-y-6 mb-14">
        <AuthNavbar />

        <Card>
          <CardHeader className="flex flex-col gap-8 items-center justify-center">
            <Image src="/logo.png" alt="lambadina logo" className="h-8 w-full object-contain text-center" width={100} height={50} />

            <div className="flex flex-col">
              <p className="text-center text-2xl">{t("login_welcome_back")}</p>
              <span className="text-muted-foreground text-lg">
                {t("login_sign_in_to_continue")}
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
                      <FormLabel className="text-lg font-light">{t("login_username")}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]"
                        />
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
                      <FormLabel className="text-lg font-light">{t("login_password")}</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          {...field}
                          className="h-10 rounded-sm focus-visible:ring-[#FFB000] focus-visible:border-[#FFB000]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>

              <CardFooter className="flex flex-col gap-1 pt-10">
                <Button
                  size="lg"
                  className="w-full text-lg py-6"
                  type="submit"
                  disabled={isLoading}
                >
                  <Loader className={isLoading ? "block animate-spin mr-2" : "hidden"} />
                  {t("login_sign_in_button")}
                </Button>
                <p className="text-muted-foreground">
                  {t("login_dont_have_account")}{" "}
                  <Link href={"/register"}>
                    <span className="underline underline-offset-1 text-[#FFB000]">
                      {t("login_register")}
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

export default Login;
