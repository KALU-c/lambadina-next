"use client"

import React, { useRef, useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PencilIcon, User2Icon } from "lucide-react";

type AvatarUploadProps = {
  value?: File | string;
  onChange?: (value?: File | string) => void;
};

export function AvatarUpload({ value, onChange }: AvatarUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string>("");

  // Update preview when value changes
  useEffect(() => {
    if (!value) {
      setPreview("");
      return;
    }
    if (typeof value === "string") {
      // If value is a URL or base64 string, use it directly
      setPreview(value);
    } else {
      // If value is a File, create a preview URL
      const objectUrl = URL.createObjectURL(value);
      setPreview(objectUrl);

      // Cleanup object URL on unmount or value change
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      onChange?.(file); // Pass the File object, NOT base64
    }
  };

  return (
    <div className="relative w-60 h-80">
      <Avatar className="w-full h-full rounded-xl bg-red-400">
        <AvatarImage src={preview} className="object-cover rounded-xl" />
        <AvatarFallback className="bg-secondary rounded-xl">
          <User2Icon className="w-16 h-16" />
        </AvatarFallback>
      </Avatar>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full p-1 bg-secondary-foreground/90 hover:bg-secondary-foreground absolute bottom-0 right-0"
        onClick={(e) => {
          e.preventDefault();
          inputRef.current?.click();
        }}
      >
        <PencilIcon className="w-4 h-4 text-white" />
      </Button>
      <Input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
        accept="image/*"
      />
    </div>
  );
}
