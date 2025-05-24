import { useEffect, useState } from "react";
import { Link } from "react-router";
import DetailsNavbar from "../Details/layout/navbar";
import Footer from "../Footer";
import { Loader, User2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import type { MentorProfile } from "@/types/mentor";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { AvatarUpload } from "./UploadImage";

// type UpdateMentorProfile = {
//   user: {
//     username?: string;
//     email?: string;
//     first_name?: string;
//     last_name?: string;
//     phone_number?: string;
//     user_type?: string;
//     profile_picture?: string | null;
//   };
//   bio: string;
//   categories: number[];
//   price_per_minute: string;
//   is_available: boolean;
// };


const profileFormSchema = z.object({
  fullName: z.string().min(2, {
    message: i18n.t("zod_full_name_min"),
  }),
  username: z.string().min(2, {
    message: i18n.t("zod_username_min"),
  }),
  phoneNumber: z.string().min(10, {
    message: i18n.t("zod_phone_number_min"),
  }),
  email: z.string().email({
    message: i18n.t("zod_email_invalid"),
  }),
  bio: z.string().min(10, {
    message: i18n.t("zod_bio_min"),
  }),
  price_per_minute: z.string().min(1, {
    message: i18n.t("zod_bio_min"),
  }),
  is_available: z.boolean(),
  profile_picture: z
    .union([z.instanceof(File), z.string().max(0)])
    .optional(),
});


const Profile = () => {
  const { t } = useTranslation()

  const { user, accessToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: "",
      username: user?.username,
      phoneNumber: "",
      email: "",
      bio: "",
      price_per_minute: "",
      is_available: true,
      profile_picture: ""
    },
  });


  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        if (user?.user_type === "mentor") {
          const allMentorsResponse: { data: MentorProfile[] } = await axios.get(`${import.meta.env.VITE_API_URL}/api/mentors/mentors`);

          const currentMentor: MentorProfile | undefined = allMentorsResponse.data.find(mentor => mentor.user.id === user?.id);

          const mentorResponse = await axios.get(`${import.meta.env.VITE_API_URL}/api/mentors/mentors/${currentMentor?.id}`, {
            headers: {
              "Authorization": `Bearer ${accessToken}`,
              "Content-Type": "application/json"
            }
          });

          const mentorData: MentorProfile = mentorResponse.data;

          form.reset({
            fullName: `${mentorData.user.first_name || ''} ${mentorData.user.last_name || ''}`,
            username: mentorData.user.username,
            phoneNumber: mentorData.user.phone_number || '',
            email: mentorData.user.email,
            bio: mentorData.bio ?? '',
            price_per_minute: mentorData.price_per_minute ?? '',
            is_available: mentorData.is_available ?? true,
            profile_picture: mentorData.user.profile_picture
          })
        } else {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/profile/`, {
            headers: {
              "Authorization": `Bearer ${accessToken}`,
              "Content-Type": "application/json"
            }
          });

          const data = response.data;

          form.reset({
            fullName: `${data.first_name || ''} ${data.last_name || ''}`,
            username: data.username,
            phoneNumber: data.phone_number || '',
            email: data.email,
          });
        }


        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile", err);
        setLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [form, user?.id, user?.user_type, accessToken]);

  const onSubmit = async (values: z.infer<typeof profileFormSchema>) => {
    setIsLoading(true);

    try {
      const formData = new FormData();

      if (user?.user_type === "mentor") {
        const [first_name, last_name] = values.fullName.split(" ");

        formData.append("user[first_name]", first_name);
        formData.append("user[last_name]", last_name);
        formData.append("user[username]", values.username);
        formData.append("user[email]", values.email);
        formData.append("user[phone_number]", values.phoneNumber);
        formData.append("user[user_type]", user.user_type);
        formData.append("bio", values.bio);
        formData.append("price_per_minute", values.price_per_minute);
        formData.append("is_available", String(values.is_available));
        // formData.append("categories", JSON.stringify([])); // TODO: replace with actual categories

        if (values.profile_picture) {
          formData.append("user[profile_picture]", values.profile_picture);
        }

        const response = await axios.patch(
          `${import.meta.env.VITE_API_URL}/api/mentors/mentor/update/`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          toast.success("Mentor profile updated successfully!");
          localStorage.setItem("mentor", JSON.stringify(response.data));
          setIsEditing(false);
        } else {
          toast.error("Failed to update profile.");
        }
      } else {
        const [first_name, last_name] = values.fullName.split(" ");

        formData.append("first_name", first_name);
        formData.append("last_name", last_name);
        formData.append("username", values.username);
        formData.append("email", values.email);
        formData.append("phone_number", values.phoneNumber);
        formData.append("user_type", user?.user_type ?? "");

        if (values.profile_picture) {
          formData.append("profile_picture", values.profile_picture);
        }

        const response = await axios.patch(
          `${import.meta.env.VITE_API_URL}/api/users/profile/`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          toast.success("Profile updated successfully!");
          localStorage.setItem("user", JSON.stringify(response.data));
          setIsEditing(false);
        } else {
          toast.error("Failed to update profile.");
        }
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data?.user?.username?.[0] ?? err.message);
      }
      console.error("Error updating profile", err);
    } finally {
      setIsLoading(false);
    }
  };


  if (loading) {
    return <div className="p-10 text-center">{t("loading_profile")}</div>;
  }


  return (
    <main className="pt-[10px] flex flex-col">
      <div className="px-[22px] flex flex-col space-y-6 mb-10">
        <DetailsNavbar />

        <div className="flex flex-row gap-2 text-lg flex-wrap">
          <Link to={"/"} className="text-muted-foreground">{t("profile")}</Link>/
          <span>{user?.username}</span>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div className="pt-4">
              <div className="flex flex-row gap-2 font-medium text-lg mb-4 items-center">
                <User2 size={18} />
                {t("personal_information")}
              </div>

              <div className="flex flex-col space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("full_name")}</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-100 h-10"
                          disabled={!isEditing || isLoading}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("username")}</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-100 h-10"
                          disabled
                          // disabled={!isEditing || isLoading}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("phone_number")}</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-100 h-10"
                          disabled={!isEditing || isLoading}
                          {...field}
                        />
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
                      <FormLabel>{t("email")}</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-zinc-100 h-10"
                          disabled={!isEditing || isLoading}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Professional Information */}
            {user?.user_type === "mentor" && (
              <div className="pt-4">
                <div className="flex flex-row gap-2 font-medium text-lg mb-4 items-center">
                  <User2 size={18} />
                  {t("profession_information")}
                </div>

                <div className="flex flex-col space-y-4">
                  <FormField
                    control={form.control}
                    name="price_per_minute"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price Per Minute</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-zinc-100 h-10"
                            disabled={!isEditing || isLoading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="is_available"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center gap-4">
                        <FormLabel className="text-md">Available</FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            disabled={!isEditing || isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}


            {/* Profile Picture and Bio */}
            <div className="pt-4">
              <div className="flex flex-row gap-2 font-medium text-lg mb-4 items-center">
                <User2 size={18} />
                {t("profile_picture_and_bio")}
              </div>

              <div className="flex flex-col space-y-4">
                <FormField
                  control={form.control}
                  name="profile_picture"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <AvatarUpload value={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {user?.user_type === "mentor" && (
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("bio")}</FormLabel>
                        <FormControl>
                          <Textarea
                            className="bg-zinc-100 h-52"
                            disabled={!isEditing || isLoading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </div>

            {/* Security */}
            <div className="pt-4">
              <div className="flex flex-row gap-2 font-medium text-lg mb-4">
                <User2 />
                {t("security")}
              </div>

              <Button variant="secondary" disabled>{t("update_password")}</Button>

              <div className="py-4 flex flex-row w-full items-center gap-2">
                {isEditing && (
                  <>
                    <Button type="submit" className="flex-4/6" disabled={isLoading}>
                      <Loader className={isLoading ? "animate-spin" : "hidden"} />
                      {t("save_changes")}
                    </Button>
                    <Button
                      disabled={isLoading}
                      type="button"
                      variant="secondary"
                      className="flex-2/4"
                      onClick={() => setIsEditing(false)}
                    >
                      {t("cancel")}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </form>
        </Form>
        {!isEditing && (
          <Button
            disabled={loading}
            type="button"
            className="w-full"
            onClick={() => setIsEditing(true)}
          >
            {t("update_profile")}
          </Button>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default Profile;
