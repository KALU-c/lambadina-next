type ExpertsType = {
  id: string
  src: string
  name: string
  price: number
  description: string
  isVerified: boolean
  type: "Business" | "Wellness" | "Legal And Compliance" | "Tech And Digital" | "Creative And Media Service"
}

export const EXPERTS: ExpertsType[] = [
  {
    id: '1232',
    src: "",
    name: "",
    price: 100,
    isVerified: false,
    description: '',
    type: 'Business'
  }
]