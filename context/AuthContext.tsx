"use client"

import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { z } from "zod";
import { registerSchema } from "@/schema/registerSchema";
import { AuthContext, type UserType } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { fetchUser, loginUser, registerUser } from "@/actions/user";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(
    () => JSON.parse(localStorage.getItem('user') ?? "") as UserType || null
  );
  const [accessToken, setAccessToken] = useState<string | null>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setAccessToken(storedToken);
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setIsAuthLoaded(true);
  }, []);

  const fetchUserProfile = async (token: string) => {
    try {
      const { user, message } = await fetchUser(token);

      if (!user) {
        toast.error(message);
        return;
      }

      setUser(user);
      // TODO - do not save user data to ls
      localStorage.setItem("user", JSON.stringify(user));
    } catch {
      console.error("Error fetching user profile");
      toast.error("Failed to fetch user profile. Please try again.");
    }
  };

  const register = async (values: z.infer<typeof registerSchema>) => {
    setIsLoading(true);
    try {
      const { user, error } = await registerUser(values);

      if (error) {
        toast.error(error);
        return;
      }

      if (!user) {
        toast.error("Something went wrong. Please try again.");
        return;
      }

      await login(values.username, values.password);
    } catch (err) {
      console.error(err);
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.username ?? err.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const { token, message } = await loginUser(username, password);

      if (!token) {
        toast.error(message);
        return;
      }

      // Fetch the user profile after successful login
      await fetchUserProfile(token);

      setAccessToken(token);
      localStorage.setItem("accessToken", token);
      // localStorage.setItem("refreshToken", refresh);

      toast.success("Logged in successfully 🎉");
      router.replace("/");
    } catch (err) {
      console.error(err);
      toast.error("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    router.replace("/login");
  };

  const isAuthenticated = !!accessToken;

  return (
    <AuthContext.Provider
      value={{ user, accessToken, isLoading, register, login, logout, isAuthenticated, isAuthLoaded, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
