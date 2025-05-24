import type { registerSchema } from "@/schema/registerSchema";
import { createContext, useContext } from "react";
import { z } from "zod";

export interface UserType {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  user_type: "client" | "mentor";
  profile_picture: string | null;
  is_verified: boolean;
}


type AuthContextType = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  accessToken: string | null;
  isLoading: boolean;
  register: (values: z.infer<typeof registerSchema>) => Promise<void>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAuthLoaded: boolean
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
