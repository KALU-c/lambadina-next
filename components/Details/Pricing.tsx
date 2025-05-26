"use client"

// import { useState } from "react"
// import { Button } from "../ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./layout/pricing-tabs"
// import { nanoid } from 'nanoid'
// import { useAuth } from "@/hooks/useAuth"
// import { toast } from "sonner"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import axios from "axios"

// export type MentorWithUser = {
//   id: number;
//   bio: string;
//   isAvailable: boolean;
//   rating: number;
//   totalSessions: number;
//   createdAt: Date;
//   updatedAt: Date;
//   userId: number;
//   pricing: {
//     id: number;
//     type: "BASIC" | "STANDARD" | "PREMIUM";
//     price: number;
//   }[];
// } & {
//   user: {
//     id: number
//     firstName: string | null;
//     lastName: string | null;
//     profilePicture: string | null;
//     email: string | null;
//     phoneNumber: string | null;
//   };
// };

// type PricingProps = {
//   ref: React.RefObject<null | HTMLDivElement>
//   mentor: MentorWithUser
// }

// type PricingTypes = "BASIC" | "STANDARD" | "PREMIUM";

// const Pricing = ({ ref, mentor }: PricingProps) => {
//   const { isAuthenticated, user } = useAuth();
//   const [txRef, setTxRef] = useState(nanoid());
//   const [isProcessing, setIsProcessing] = useState(false);
//   const router = useRouter();

//   const isProfileComplete = () => {
//     if (!user) return false;
//     return Boolean(
//       user.first_name &&
//       user.last_name &&
//       user.email &&
//       user.phone_number
//     );
//   };

//   const handlePaymentInitiation = async (priceType: PricingTypes) => {
//     if (!isAuthenticated || !user) {
//       router.push('/login');
//       return;
//     }

//     if (!isProfileComplete()) {
//       toast.info('Please complete your profile to book a session');
//       router.push('/profile');
//       return;
//     }

//     setIsProcessing(true);
//     try {
//       const price = mentor.pricing.find(p => p.type === priceType)?.price;
//       if (!price) {
//         throw new Error('Pricing not found');
//       }

//       const response = await axios.post(`/api/payment/initiate`, {
//         amount: price,
//         currency: 'ETB',
//         email: user.email,
//         first_name: user.first_name,
//         last_name: user.last_name,
//         phone_number: user.phone_number,
//         tx_ref: txRef,
//         callback_url: `${window.location.origin}/api/payment/callback`,
//         return_url: `${window.location.origin}/bookings?status=success`,
//         meta: {
//           client_user_id: user.id,
//           mentor_id: mentor.id,
//           mentor_user_id: mentor.user.id,
//           pricing_type: priceType,
//           session_type: priceType.toLowerCase()
//         }
//       })

//       if (response.data.data.checkout_url) {
//         window.location.href = response.data.data.checkout_url;
//       } else {
//         throw new Error('Failed to initiate payment');
//       }
//     } catch (error) {
//       console.error('Payment initiation error:', error);
//       toast.error('Failed to initiate payment. Please try again.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <Tabs defaultValue="BASIC" ref={ref}>
//       <TabsList>
//         <TabsTrigger value="BASIC">Basic</TabsTrigger>
//         <TabsTrigger value="STANDARD">Standard</TabsTrigger>
//         <TabsTrigger value="PREMIUM">Premium</TabsTrigger>
//       </TabsList>

//       {pricingTabs.map(pricing => (
//         <TabsContent key={pricing.value} value={pricing.value} className="font-light flex flex-col gap-4 rounded-b-xl">
//           <p className="text-lg">
//             {pricing.description}
//           </p>

//           <p className="text-center font-semibold text-5xl tracking-tight">
//             <span className="text-xl font-medium">ETB </span>
//             {mentor.pricing.find(price => price.type === pricing.value)?.price}{" "}
//             <span className="text-xl font-medium lowercase"> / Min</span>
//           </p>

//           <ul className="list-disc pl-8 py-2">
//             {pricing.benefits.map((benefit, i) => (
//               <li key={i}>{benefit}</li>
//             ))}
//           </ul>

//           {isAuthenticated ? (
//             isProfileComplete() ? (
//               <Button
//                 size={'xlg'}
//                 className="text-black w-full"
//                 onClick={() => handlePaymentInitiation(pricing.value as PricingTypes)}
//                 disabled={isProcessing}
//               >
//                 {isProcessing ? 'Processing...' : 'Book Now'}
//               </Button>
//             ) : (
//               <Link href={'/profile'} onClick={() => toast.info('Please complete your profile (name, email, and phone number) to book a session')}>
//                 <Button size={'xlg'} className="text-black w-full">
//                   Book Now
//                 </Button>
//               </Link>
//             )
//           ) : (
//             <Link href={'/login'}>
//               <Button size={'xlg'} className="text-black w-full">
//                 Book Now
//               </Button>
//             </Link>
//           )}
//         </TabsContent>
//       ))}
//     </Tabs>
//   )
// }

// export default Pricing




"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./layout/pricing-tabs"
import { nanoid } from 'nanoid'
import { useAuth } from "@/hooks/useAuth"
import { toast } from "sonner"
// import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"

export type MentorWithUser = {
  id: number;
  bio: string;
  isAvailable: boolean;
  rating: number;
  totalSessions: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  pricing: {
    id: number;
    type: "BASIC" | "STANDARD" | "PREMIUM";
    description?: string;
    benefits?: string;
    price: number;
  }[];
} & {
  user: {
    id: number
    firstName: string | null;
    lastName: string | null;
    profilePicture: string | null;
    email: string | null;
    phoneNumber: string | null;
  };
};

type PricingProps = {
  ref: React.RefObject<null | HTMLDivElement>
  mentor: MentorWithUser
}

export const pricingTabs = [
  {
    value: "BASIC",
    label: "Basic",
    description: "Designed for students or early-stage professionals looking to get started.",
    benefits: [
      "One group mentorship session every quarter",
      "One-on-one mentorship (1 session per month)",
      "Limited access to mentorship resources (PDFs, tools, templates)",
      "Certificate of completion",
      "Free or low-cost (ideal for university students)"
    ],
  },
  {
    value: "STANDARD",
    label: "Standard",
    description: "Perfect for young professionals and graduates ready to advance their career with guided support.",
    benefits: [
      "Two group mentorship sessions every quarter",
      "Two one-on-one mentorship sessions per month",
      "Full access to mentorship resources and exclusive webinars",
      "Priority certification and completion badge",
      "Affordable pricing for early-career professionals"
    ],
  },
  {
    value: "PREMIUM",
    label: "Premium",
    description: "Tailored for experienced professionals or entrepreneurs seeking elite-level mentorship and networking.",
    benefits: [
      "Monthly private strategy sessions with top mentors",
      "Unlimited one-on-one mentorship sessions",
      "Full access to premium resources, masterclasses, and workshops",
      "Exclusive invitations to networking events",
      "Priority support and personal mentorship concierge"
    ],
  }
];

type PricingTypes = "BASIC" | "STANDARD" | "PREMIUM";

const Pricing = ({ ref, mentor }: PricingProps) => {
  const { isAuthenticated, user } = useAuth();
  const [txRef, setTxRef] = useState(nanoid());
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const isProfileComplete = () => {
    if (!user) return false;
    return Boolean(
      user.first_name &&
      user.email &&
      user.phone_number
    );
  };

  const handlePaymentInitiation = async (priceType: PricingTypes) => {
    if (!isAuthenticated || !user) {
      router.push('/login');
      return;
    }

    if (!isProfileComplete()) {
      toast.info('Please complete your profile to book a session');
      router.push('/profile');
      return;
    }

    setIsProcessing(true);
    try {
      const price = mentor.pricing.find(p => p.type === priceType)?.price;
      if (!price) {
        throw new Error('Pricing not found');
      }

      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/initiate`, {
        amount: price,
        currency: 'ETB',
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone_number: user.phone_number,
        tx_ref: txRef,
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/callback`,
        // callback_url: `${window.location.origin}/api/payment/callback`,
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        // return_url: `${window.location.origin}/bookings?status=success&tx_ref=${txRef}`,
        meta: {
          client_user_id: user.id,
          mentor_id: mentor.id,
          mentor_user_id: mentor.user.id,
          pricing_type: priceType,
          session_type: priceType.toLowerCase(),
          mentor_name: `${mentor.user.firstName} ${mentor.user.lastName}`,
          client_name: `${user.first_name} ${user.last_name}`
        }
      });


      if (response.data?.chapaResponse?.data?.checkout_url) {
        window.location.href = response.data.chapaResponse.data.checkout_url;
      } else {
        throw new Error('Failed to initiate payment');
      }
    } catch (error) {
      console.error('Payment initiation error:', error);
      toast.error('Failed to initiate payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Tabs defaultValue="BASIC" ref={ref} onValueChange={() => setTxRef(nanoid())}>
      <TabsList>
        <TabsTrigger value="BASIC">Basic</TabsTrigger>
        <TabsTrigger value="STANDARD">Standard</TabsTrigger>
        <TabsTrigger value="PREMIUM">Premium</TabsTrigger>
      </TabsList>

      {pricingTabs.map(pricing => (
        <TabsContent key={pricing.value} value={pricing.value} className="font-light flex flex-col gap-4 rounded-b-xl">
          <p className="text-lg text-center font-[400] capitalize">
            {mentor.pricing.find(price => pricing.value === price.type)?.description ?? ''}
          </p>

          <p className="text-center font-semibold text-5xl tracking-tight">
            <span className="text-xl font-medium">ETB </span>
            {mentor.pricing.find(price => price.type === pricing.value)?.price}{" "}
            <span className="text-xl font-medium lowercase"> / Min</span>
          </p>

          {/* <ul className="list-disc pl-8 py-2">
            {pricing.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul> */}
          <div className="pl-8 py-2">
            {mentor.pricing.find(price => pricing.value === price.type)?.benefits ?? ''}
          </div>

          <Button
            size={'xlg'}
            className="text-black w-full"
            onClick={() => handlePaymentInitiation(pricing.value as "BASIC" | "STANDARD" | "PREMIUM")}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Book Now'}
          </Button>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default Pricing