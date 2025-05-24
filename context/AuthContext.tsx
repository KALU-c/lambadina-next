import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import { registerSchema } from "@/schema/registerSchema";
import { AuthContext, type UserType } from "@/hooks/useAuth";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);
  const navigate = useNavigate();

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
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/profile/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const profileData: UserType = response.data;
      // TODO - change this
      setUser(profileData);
      localStorage.setItem("user", JSON.stringify(profileData));
    } catch {
      console.error("Error fetching user profile");
      toast.error("Failed to fetch user profile. Please try again.");
    }
  };

  const register = async (values: z.infer<typeof registerSchema>) => {
    setIsLoading(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/register/`,
        values
      );

      // After successful registration, log the user in
      const loginRes = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/login/`,
        {
          username: values.username,
          password: values.password,
        }
      );

      const { access, refresh } = loginRes.data;

      // Fetch the user profile after successful login
      await fetchUserProfile(access);

      setAccessToken(access);
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      toast.success("Account created and logged in successfully 🎉");
      navigate("/profile");
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
      const loginRes = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/login/`,
        {
          username,
          password,
        }
      );

      const { access, refresh } = loginRes.data;

      // Fetch the user profile after successful login
      await fetchUserProfile(access);

      setAccessToken(access);
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      toast.success("Logged in successfully 🎉");
      navigate("/");
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
    navigate("/login");
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
