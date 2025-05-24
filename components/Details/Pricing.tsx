"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./layout/pricing-tabs"
import { nanoid } from 'nanoid'
import { useAuth } from "@/hooks/useAuth"
import { toast } from "sonner"
import Link from "next/link"
import { MentorProfile } from "@/types/mentors"

type PricingProps = {
  ref: React.RefObject<null | HTMLDivElement>
  mentor: MentorProfile
}

const Pricing = ({ ref, mentor }: PricingProps) => {
  const { isAuthenticated, user } = useAuth();
  const [txRef, setTxRef] = useState("");

  return (
    <Tabs defaultValue="basic" ref={ref}>
      <TabsList>
        <TabsTrigger value="basic">Basic</TabsTrigger>
        <TabsTrigger value="standard" disabled>Standard</TabsTrigger>
        <TabsTrigger value="premium" disabled>Premium</TabsTrigger>
      </TabsList>
      <TabsContent value="basic" className="font-light flex flex-col gap-4 rounded-b-xl">
        <p className="text-lg">
          Designed for students or early-stage professionals looking to get started.
        </p>

        <ul className="list-disc pl-8 py-2">
          <li>One group mentorship session every quarter</li>
          <li>One-on-one mentorship (1 session per month)</li>
          <li>Limited access to mentorship resources (PDFs, tools, templates)</li>
          <li>Certificate of completion</li>
          <li>Free or low-cost (ideal for university students)</li>
        </ul>

        <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
          <input type="hidden" name="public_key" value={process.env.NEXT_PUBLIC_CHAPA_PUBLIC_API_KEY} />
          <input type="hidden" name="tx_ref" value={txRef} onSubmit={() => setTxRef(nanoid())} />
          <input type="hidden" name="amount" value={mentor.pricePerMinute} />
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
              {(user?.first_name && user.last_name) ? (
                <Button size={'xlg'} className="text-black w-full">
                  Book Now
                </Button>
              ) : (
                <Link href={'/profile'} onClick={() => toast.info('Please complete your profile to book a session')}>
                  <Button size={'xlg'} className="text-black w-full">
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

      <TabsContent value="standard" className="font-light flex flex-col gap-4 rounded-b-xl">
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
      </TabsContent>

    </Tabs>

  )
}

export default Pricing
