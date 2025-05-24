export type UserRegister = {
  username: string
  password: string
  password2: string
  email: string
  first_name: string
  last_name: string
  phone_number: string
  user_type: "client" | "mentor"
  profile_picture: string | null
}