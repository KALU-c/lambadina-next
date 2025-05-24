"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./layout/pricing-tabs"
import { nanoid } from 'nanoid'
import { useAuth } from "@/hooks/useAuth"
import { toast } from "sonner"
import Link from "next/link"

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
    price: number;
    // createdAt: Date;
  }[];
} & {
  user: {
    firstName: string | null;
    lastName: string | null;
    profilePicture: string | null;
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


const Pricing = ({ ref, mentor }: PricingProps) => {
  const { isAuthenticated, user } = useAuth();
  const [txRef, setTxRef] = useState("");

  return (
    <Tabs defaultValue="BASIC" ref={ref}>
      <TabsList>
        <TabsTrigger value="BASIC">Basic</TabsTrigger>
        <TabsTrigger value="STANDARD">Standard</TabsTrigger>
        <TabsTrigger value="PREMIUM">Premium</TabsTrigger>
      </TabsList>


      {pricingTabs.map(pricing => (
        <TabsContent value={pricing.value} className="font-light flex flex-col gap-4 rounded-b-xl">
          <p className="text-lg">
            {pricing.description}
          </p>

          <p className="text-center font-semibold text-5xl tracking-tight">
            <span className="text-xl font-medium">ETB </span>
            {mentor.pricing.find(price => price.type === pricing.value)?.price}{" "}
            <span className="text-xl font-medium lowercase"> / Min</span>
          </p>

          <ul className="list-disc pl-8 py-2">
            {pricing.benefits.map(benefit => (
              <li>{benefit}</li>
            ))}
          </ul>

          <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
            <input type="hidden" name="public_key" value={process.env.NEXT_PUBLIC_CHAPA_PUBLIC_API_KEY} />
            <input type="hidden" name="tx_ref" value={txRef} onSubmit={() => setTxRef(nanoid())} />
            {/* make this dynamic */}
            <input type="hidden" name="amount" value={mentor.pricing.find(price => price.type === pricing.value)?.price} />
            <input type="hidden" name="currency" value="ETB" />
            <input type="hidden" name="email" value="endekaluzemenu2134@gmail.com" />
            <input type="hidden" name="first_name" value="Endekalu" />
            <input type="hidden" name="last_name" value="Zemenu" />
            <input type="hidden" name="title" value="Mentorship" />
            <input type="hidden" name="description" value="lorem" />
            <input type="hidden" name="callback_url" value="" />
            <input type="hidden" name="return_url" value={process.env.NEXT_PUBLIC_BASE_URL} />

            {isAuthenticated ? (
              <>
                {(user?.first_name || user?.last_name) ? (
                  <Button size={'xlg'} className="text-black w-full">
                    Book Now
                  </Button>
                ) : (
                  <Link href={'/profile'} onClick={() => toast.info('Please complete your profile to book a session')}>
                    <Button size={'xlg'} className="text-black w-full" onClick={() => console.log(user)}>
                      Book Now
                    </Button>
                  </Link>
                )}
              </>
            ) : (
              <Link href={'/login'}>
                <Button size={'xlg'} className="text-black w-full">
                  Book Now
                </Button>
              </Link>
            )}
          </form>


        </TabsContent>
      ))}


      {/* <TabsContent value="standard" className="font-light flex flex-col gap-4 rounded-b-xl">
        <p className="text-lg">
          Perfect for young professionals and graduates ready to advance their career with guided support.
        </p>

        <ul className="list-disc pl-8 py-2">
          <li>Two group mentorship sessions every quarter</li>
          <li>Two one-on-one mentorship sessions per month</li>
          <li>Full access to mentorship resources and exclusive webinars</li>
          <li>Priority certification and completion badge</li>
          <li>Affordable pricing for early-career professionals</li>
        </ul>

        <Button size={'xlg'} className="text-black hover:bg-[]">
          Book Now
        </Button>
      </TabsContent>

      <TabsContent value="premium" className="font-light flex flex-col gap-4 rounded-b-xl">
        <p className="text-lg">
          Tailored for experienced professionals or entrepreneurs seeking elite-level mentorship and networking.
        </p>

        <ul className="list-disc pl-8 py-2">
          <li>Monthly private strategy sessions with top mentors</li>
          <li>Unlimited one-on-one mentorship sessions</li>
          <li>Full access to premium resources, masterclasses, and workshops</li>
          <li>Exclusive invitations to networking events</li>
          <li>Priority support and personal mentorship concierge</li>
        </ul>

        <Button size={'xlg'} className="text-black">
          Book Now
        </Button>
      </TabsContent> */}

    </Tabs>

  )
}

export default Pricing
