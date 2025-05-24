type UserType = "client" | "mentor" | "admin";

interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  user_type: UserType;
  profile_picture: string;
  is_verified: boolean;
}

interface Category {
  id: number;
  name: string;
  description: string;
  created_at: string;
}

interface Availability {
  id: number;
  day_of_week: number;
  start_time: string;
  end_time: string;
  is_available: boolean;
  mentor: number;
}

interface Mentor {
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
}

interface Client {
  id: number;
  user: User;
  interests: string;
  total_sessions: number;
  created_at: string;
  updated_at: string;
}

interface Review {
  id: number;
  booking: number;
  rating: number;
  comment: string;
  created_at: string;
}

type CallType = "phone" | "video";
type BookingStatus = "pending" | "confirmed" | "cancelled" | "completed";

export interface Booking {
  id: number;
  mentor: Mentor;
  client: Client;
  session_date: string;
  start_time: string;
  end_time: string;
  duration_minutes: number;
  call_type: CallType;
  status: BookingStatus;
  amount_paid: string;
  platform_fee: string;
  mentor_payout: string;
  payment_status: boolean;
  call_link: string;
  review: Review;
  created_at: string;
  updated_at: string;
}
