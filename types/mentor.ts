type User = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  user_type: "client" | "mentor";
  profile_picture: string;
  is_verified: boolean;
};

export type Category = {
  id: number;
  name: string;
  description: string;
  created_at: string;
};

type Availability = {
  id: number;
  day_of_week: number;
  start_time: string;
  end_time: string;
  is_available: boolean;
  mentor: number;
};

export type OldMentorProfile = {
  id: number;
  user: User;
  bio: string;
  categories: Category[];
  price_per_minute: string;
  is_available: boolean;
  rating: string;
  total_sessions: number;
  availabilities: Availability[];
  created_at: string;
  updated_at: string;
};

type UserType = 'client' | 'mentor' | 'admin' | string; // adjust based on your actual possible values

export type MentorProfile = {
  id: number;
  user: {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    user_type: UserType;
    profile_picture: string;
    is_verified: boolean;
  };
  bio: string;
  categories: {
    id: number;
    name: string;
    description: string;
    created_at: string; // ISO date string
  }[];
  price_per_minute: string;
  is_available: boolean;
  rating: string;
  total_sessions: number;
  availabilities: {
    id: number;
    day_of_week: number; // 0 (Sunday) - 6 (Saturday)
    start_time: string;
    end_time: string;
    is_available: boolean;
    mentor: number;
  }[];
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
};
