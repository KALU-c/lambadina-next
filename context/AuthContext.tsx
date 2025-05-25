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
  const [user, setUser] = useState<UserType | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);
  const router = useRouter();

  // Safe localStorage access
  const getLocalStorageItem = (key: string) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  };

  const setLocalStorageItem = (key: string, value: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  };

  const removeLocalStorageItem = (key: string) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  };

  useEffect(() => {
    const storedToken = getLocalStorageItem("accessToken");
    const storedUser = getLocalStorageItem("user");

    if (storedToken) {
      setAccessToken(storedToken);
    }

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user data", e);
        removeLocalStorageItem("user");
      }
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
      setLocalStorageItem("user", JSON.stringify(user));
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

      await fetchUserProfile(token);

      setAccessToken(token);
      setLocalStorageItem("accessToken", token);
      // setLocalStorageItem("refreshToken", refresh);

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
    removeLocalStorageItem("accessToken");
    removeLocalStorageItem("refreshToken");
    removeLocalStorageItem("user");
    return router.replace("/login");
  };

  const isAuthenticated = !!accessToken;

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        isLoading,
        register,
        login,
        logout,
        isAuthenticated,
        isAuthLoaded,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};