"use client"

import { useEffect, useState } from "react";
import { ChevronRight, Loader, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { fetchUser, updateUser } from "@/actions/user";
import { useRouter } from "next/navigation";
import ProfilePicture from "@/components/Profile/ProfilePicture";
import { getMentor, getMentors, updateMentor } from "@/actions/mentors";
import FooterDesktop from "../components/Footer"
import NavBarDesktop from "../components/NavBarDesktop"
import { clientProfileSchema, CombinedProfileSchemaType, mentorProfileSchema, MentorProfileSchemaType } from "@/components/Profile";

const ProfileDesktop = () => {
	const { t } = useTranslation()
	const router = useRouter()

	const { user, accessToken, setUser } = useAuth();
	const [loading, setLoading] = useState(true);
	const [isEditing, setIsEditing] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [profileURL, setProfileURL] = useState("");

	const form = useForm<CombinedProfileSchemaType>({
		resolver: zodResolver(
			user?.user_type === "mentor" ? mentorProfileSchema : clientProfileSchema
		),
		defaultValues: user?.user_type === "mentor"
			? {
				fullName: "",
				username: user?.username || "",
				phoneNumber: "",
				email: "",
				bio: "",
				basicPrice: "",
				basicDescription: "",
				basicPlanBenefits: "",
				standardPrice: "",
				standardDescription: "",
				standardPlanBenefits: "",
				premiumPrice: "",
				premiumDescription: "",
				premiumPlanBenefits: "",
				is_available: true
			}
			: {
				fullName: "",
				username: user?.username || "",
				phoneNumber: "",
				email: ""
			}
	});

	useEffect(() => {
		const fetchProfile = async () => {
			setIsLoading(true);
			try {
				if (user?.user_type === "mentor") {
					const { mentors: allMentorsResponse } = await getMentors();
					const currentMentor = allMentorsResponse.find(mentor => mentor.user.id === user?.id);
					const { mentor: mentorData } = await getMentor(currentMentor?.id.toString() ?? '', accessToken ?? '');

					if (mentorData) {
						// Extract prices and description for each type
						const basicPrice = mentorData.pricing.find(p => p.type === 'BASIC')?.price.toString() ?? '';
						const basicDescription = mentorData.pricing.find(p => p.type === 'BASIC')?.description?.toString() ?? '';
						const basicPlanBenefits = mentorData.pricing.find(p => p.type === 'BASIC')?.benefits?.toString() ?? '';
						const standardPrice = mentorData.pricing.find(p => p.type === 'STANDARD')?.price.toString() ?? '';
						const standardDescription = mentorData.pricing.find(p => p.type === 'STANDARD')?.description?.toString() ?? '';
						const standardPlanBenefits = mentorData.pricing.find(p => p.type === 'STANDARD')?.benefits?.toString() ?? '';
						const premiumPrice = mentorData.pricing.find(p => p.type === 'PREMIUM')?.price.toString() ?? '';
						const premiumDescription = mentorData.pricing.find(p => p.type === 'PREMIUM')?.description?.toString() ?? '';
						const premiumPlanBenefits = mentorData.pricing.find(p => p.type === 'PREMIUM')?.benefits?.toString() ?? '';

						setProfileURL(mentorData.user.profilePicture ?? '');

						const fullName = `${mentorData.user?.firstName ?? ''} ${mentorData.user?.lastName ?? ''}`.trim();

						form.reset({
							fullName,
							username: mentorData.user.username,
							phoneNumber: mentorData.user.phoneNumber || '',
							email: mentorData.user.email ?? '',
							bio: mentorData.bio ?? '',
							basicPrice,
							basicDescription,
							basicPlanBenefits,
							standardPrice,
							standardDescription,
							standardPlanBenefits,
							premiumPrice,
							premiumDescription,
							premiumPlanBenefits,
							is_available: mentorData.isAvailable ?? true,
						});
					}
				} else {
					if (!accessToken) {
						return router.push('/login');
					}

					const { user, message } = await fetchUser(accessToken);

					if (!user) {
						toast.error(message);
						return;
					}

					// const data = response.data;

					setProfileURL(user.profile_picture ?? '');

					const fullName = `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim();

					form.reset({
						fullName,
						username: user.username,
						phoneNumber: user.phone_number || '',
						email: user.email || '',
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
	}, [form, user?.id, user?.user_type, accessToken, router]);

	const onSubmit = async (values: CombinedProfileSchemaType) => {
		const mentorValue = values as MentorProfileSchemaType
		setIsLoading(true);

		try {
			const formData = new FormData();

			if (user?.user_type === "mentor") {
				const [first_name, last_name] = mentorValue.fullName.split(" ");

				try {
					const { mentor, error } = await updateMentor(accessToken ?? '', {
						fullName: `${first_name ?? ""} ${last_name ?? ""}`,
						phoneNumber: mentorValue.phoneNumber,
						email: mentorValue.email,
						bio: mentorValue.bio,
						basicPrice: mentorValue.basicPrice,
						basicDescription: mentorValue.basicDescription,
						basicPlanBenefits: mentorValue.basicPlanBenefits,
						standardPrice: mentorValue.standardPrice,
						standardDescription: mentorValue.standardDescription,
						standardPlanBenefits: mentorValue.standardPlanBenefits,
						premiumPrice: mentorValue.premiumPrice,
						premiumDescription: mentorValue.premiumDescription,
						premiumPlanBenefits: mentorValue.premiumPlanBenefits,
						is_available: mentorValue.is_available,
						profilePicture: profileURL,
						categories: [], // Add actual category IDs if you have them
					});

					if (error) {
						toast.error(error);
						return;
					}

					if (mentor) {
						toast.success("Mentor profile updated successfully!");
						localStorage.setItem('user', JSON.stringify({
							id: mentor.userId,
							username: mentor.user.username,
							email: mentor.user.email,
							first_name: mentor.user.firstName,
							last_name: mentor.user.lastName,
							phone_number: mentor.user.phoneNumber,
							user_type: "mentor",
							profile_picture: mentor.user.profilePicture,
							is_verified: mentor.user.isVerified
						}))
						setUser({
							id: mentor.userId,
							username: mentor.user.username,
							email: mentor.user.email,
							first_name: mentor.user.firstName,
							last_name: mentor.user.lastName,
							phone_number: mentor.user.phoneNumber,
							user_type: "mentor",
							profile_picture: mentor.user.profilePicture,
							is_verified: mentor.user.isVerified
						});
						setIsEditing(false);

						// Update form values with the returned data
						form.reset({
							fullName: (`${mentor.user.firstName} ${mentor.user.lastName}`).trim(),
							username: mentor.user.username,
							phoneNumber: mentor.user.phoneNumber || '',
							email: mentor.user.email || '',
							bio: mentor.bio || '',
							basicPrice: mentor.pricing.find(p => p.type === 'BASIC')?.price.toString() || '',
							basicDescription: mentor.pricing.find(p => p.type === 'BASIC')?.description?.toString() || '',
							basicPlanBenefits: mentor.pricing.find(p => p.type === 'BASIC')?.benefits?.toString() || '',
							standardPrice: mentor.pricing.find(p => p.type === 'STANDARD')?.price.toString() || '',
							standardDescription: mentor.pricing.find(p => p.type === 'STANDARD')?.description?.toString() || '',
							standardPlanBenefits: mentor.pricing.find(p => p.type === 'STANDARD')?.benefits?.toString() || '',
							premiumPrice: mentor.pricing.find(p => p.type === 'PREMIUM')?.price.toString() || '',
							premiumDescription: mentor.pricing.find(p => p.type === 'PREMIUM')?.description?.toString() || '',
							premiumPlanBenefits: mentor.pricing.find(p => p.type === 'PREMIUM')?.benefits?.toString() || '',
							is_available: mentor.isAvailable,
						});
					}
				} catch (err) {
					console.error("Update error:", err);
					toast.error("An error occurred while updating your profile");
				}
			} else {
				const [first_name, last_name] = values.fullName.split(" ");

				formData.append("firstName", first_name);
				formData.append("lastName", last_name);
				formData.append("username", values.username);
				formData.append("email", values.email);
				formData.append("phoneNumber", values.phoneNumber);
				formData.append("userType", user?.user_type ?? "");

				if (profileURL) {
					formData.append("profilePicture", profileURL);
				}

				if (!accessToken) {
					return router.push('/login');
				}

				const { user: updatedUser, error } = await updateUser(accessToken, formData);

				if (!updatedUser) {
					toast.error(error);
					return;
				}

				if (updatedUser) {
					toast.success("Profile updated successfully!");
					localStorage.setItem("user", JSON.stringify({
						id: updatedUser.id,
						username: updatedUser.username,
						email: updatedUser.email,
						first_name: updatedUser.first_name,
						last_name: updatedUser.last_name,
						phone_number: updatedUser.phone_number,
						user_type: "client",
						profile_picture: updatedUser.profile_picture,
						is_verified: updatedUser.is_verified
					}));
					setUser({
						id: updatedUser.id,
						username: updatedUser.username,
						email: updatedUser.email,
						first_name: updatedUser.first_name,
						last_name: updatedUser.last_name,
						phone_number: updatedUser.phone_number,
						user_type: "client",
						profile_picture: updatedUser.profile_picture,
						is_verified: updatedUser.is_verified
					});
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
		<main className="min-h-screen flex flex-col justify-between space-y-40">
			<div className="xl:px-[200px] lg:px-[150px] md:px-[50px] flex flex-col">
				<NavBarDesktop />

			<div className="flex flex-col space-y-6 max-w-2xl w-2xl">
				<div className="flex flex-row gap-2 text-lg flex-wrap">
					<Link href={"/"} className="text-muted-foreground">{t("profile")}</Link>/
					<span>{user?.username}</span>
				</div>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						{/* Profile Picture and Bio */}
						<div className="pt-4">
							<div className="flex flex-row gap-2 font-medium text-lg mb-4 items-center justify-center">
								<User2 size={18} />
								{t("profile_picture_and_bio")}
							</div>

							<div className="flex flex-col space-y-4 items-center justify-center">

								<ProfilePicture
									isEditing={isEditing}
									isLoading={isLoading}
									profileURL={profileURL}
									setProfileURL={setProfileURL}
								/>

							</div>
						</div>


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
									{user?.user_type === "mentor" && (
										<>
											<div className="pt-4">
												{/* <div className="flex flex-row gap-2 font-medium text-lg mb-4 items-center">
																<User2 size={18} />
																{t("pricing")}
															</div> */}

												<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
													<span className="w-full p-2 rounded-lg gap-1 bg-zinc-200 flex items-center">
														<ChevronRight size={18} />
														Basic Plan
													</span>
													<div className="mb-8 flex flex-col gap-4">
														<FormField
															control={form.control}
															name="basicPrice"
															render={({ field }) => (
																<FormItem>
																	<FormLabel>Basic Price (ETB/min)</FormLabel>
																	<FormControl>
																		<Input
																			type="number"
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
															name="basicDescription"
															render={({ field }) => (
																<FormItem>
																	<FormLabel>Basic Plan Description</FormLabel>
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
															name="basicPlanBenefits"
															render={({ field }) => (
																<FormItem>
																	<FormLabel>Basic Plan Benefits</FormLabel>
																	<FormControl>
																		<Textarea
																			className="bg-zinc-100 h-40"
																			disabled={!isEditing || isLoading}
																			{...field}
																		/>
																	</FormControl>
																	<FormMessage />
																</FormItem>
															)}
														/>
													</div>
													<span className="w-full p-2 rounded-lg gap-1 bg-zinc-200 flex items-center">
														<ChevronRight size={18} />
														Standard Plan
													</span>
													<div className="mb-8 flex flex-col gap-4">
														<FormField
															control={form.control}
															name="standardPrice"
															render={({ field }) => (
																<FormItem>
																	<FormLabel>Standard Price (ETB/min)</FormLabel>
																	<FormControl>
																		<Input
																			type="number"
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
															name="standardDescription"
															render={({ field }) => (
																<FormItem>
																	<FormLabel>Standard Plan Description</FormLabel>
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
															name="standardPlanBenefits"
															render={({ field }) => (
																<FormItem>
																	<FormLabel>Standard Plan Benefits</FormLabel>
																	<FormControl>
																		<Textarea
																			className="bg-zinc-100 h-40"
																			disabled={!isEditing || isLoading}
																			{...field}
																		/>
																	</FormControl>
																	<FormMessage />
																</FormItem>
															)}
														/>
													</div>
													<span className="w-full p-2 rounded-lg gap-1 bg-zinc-200 flex items-center">
														<ChevronRight size={18} />
														Premium Plan
													</span>
													<div className="mb-6 flex flex-col gap-4">
														<FormField
															control={form.control}
															name="premiumPrice"
															render={({ field }) => (
																<FormItem>
																	<FormLabel>Premium Price (ETB/min)</FormLabel>
																	<FormControl>
																		<Input
																			type="number"
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
															name="premiumDescription"
															render={({ field }) => (
																<FormItem>
																	<FormLabel>Premium Plan Description</FormLabel>
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
															name="premiumPlanBenefits"
															render={({ field }) => (
																<FormItem>
																	<FormLabel>Premium Plan Benefits</FormLabel>
																	<FormControl>
																		<Textarea
																			className="bg-zinc-100 h-40"
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
											</div>
											<FormField
												control={form.control}
												name="is_available"
												render={({ field }) => (
													<FormItem className="flex flex-row items-center justify-between gap-4 bg-zinc-200 p-3 rounded-lg">
														<FormLabel className="text-md font-[400]">
															<ChevronRight size={18} />
															Accepting New Clients
														</FormLabel>
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
										</>
									)}

								</div>
							</div>
						)}

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
			</div>

			<FooterDesktop />
		</main>
	)
}
export default ProfileDesktop