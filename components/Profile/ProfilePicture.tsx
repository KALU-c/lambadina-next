"use client";

import { useState } from "react";
import { CldImage, CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { cn } from "@/lib/utils";

interface ProfilePictureProps {
	profileURL: string;
	setProfileURL: React.Dispatch<React.SetStateAction<string>>
	isEditing: boolean
	isLoading: boolean
}

export default function ProfilePicture({ profileURL, setProfileURL, isEditing, isLoading }: ProfilePictureProps) {

	const handleUpload = (result: CloudinaryUploadWidgetResults) => {
		// console.log("Upload Result:", result);

		if (result.info && typeof result.info !== "string") {
			const uploadedUrl = result.info.secure_url;
			setProfileURL(uploadedUrl);
			// onUpload(uploadedUrl);
		}
	};

	return (
		<div>
			{profileURL ? (
				<>
					<div className={cn(
						"w-60 h-80 bg-zinc-200 rounded-xl overflow-hidden relative",
						isEditing && "mb-3"
					)}>
						<CldImage
							src={profileURL}
							alt="Profile"
							className="w-full h-full object-cover"
							fill
						/>
					</div>

					{isEditing && (
						<CldUploadButton
							uploadPreset="next_lambadina_profile_picture"
							className="bg-[#FFB000] text-primary-foreground shadow-xs hover:bg-[#FFB000]/70 p-3 rounded-md h-9 items-center justify-center flex"
							onSuccess={handleUpload}
						>
							Upload Profile Picture
						</CldUploadButton>
					)}
				</>
			) : (
				<>
					{(!isEditing || isLoading) ? (
						<div className="w-60 h-80 bg-zinc-200 rounded-xl flex items-center justify-center text-zinc-500 px-2 text-center">
							Click the &apos;Update&apos; Profile button below to make changes to your profile.
						</div>
					) : (

						<CldUploadButton
							uploadPreset="next_lambadina_profile_picture"
							className="w-60 h-80 bg-zinc-200 rounded-xl flex items-center justify-center text-zinc-500"
							onSuccess={handleUpload}
							onQueuesEnd={(result, { widget }) => {
								widget.close();
							}}
						>
							Upload Profile Picture
						</CldUploadButton>
					)}
				</>
			)}
		</div>
	);
}
