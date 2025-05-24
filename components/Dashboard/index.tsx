"use client"

import DetailsNavbar from "../Details/layout/navbar"
import Footer from "../Footer"
import { useTranslation } from "react-i18next"
import { useAuth } from "@/hooks/useAuth"
import { Button } from "../ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Activity, Check, Star, X } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import Link from "next/link"
import Image from "next/image"
import { getBookingList } from "@/actions/booking"
import { Booking } from "@/types"

const Dashboard = () => {
  const { t } = useTranslation();
  const { user, accessToken } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [booked, setBooked] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { bookings: allBookings, error } = await getBookingList(accessToken ?? "");

        if (!bookings) {
          toast.error(error);
        }

        if (allBookings) {
          const filterBooked = allBookings.filter((bookings: Booking) => bookings.status === 'COMPLETED');
          const filterPending = allBookings.filter((bookings: Booking) => bookings.status === 'PENDING');
          setBooked(filterBooked);
          setBookings(filterPending);
        }
      } catch (err) {
        console.error(err);
        toast.error("Error fetching bookings")
      }
    }

    fetchBookings();
  }, [accessToken]);

  return (
    <main className="pt-[10px] flex flex-col">
      <div className="px-[22px] flex flex-col space-y-6 mb-10">
        <DetailsNavbar />

        <div className="flex flex-row gap-2 text-lg flex-wrap">
          <Link href={"/"} className="text-muted-foreground">
            {t("dashboard")}
          </Link>/
          <span>{user?.username}</span>
        </div>

        {bookings.length > 0 ? (
          <div className="flex flex-col space-y-6">
            {booked.length > 0 && (
              <>
                {booked.map(({ client, sessionDate, amountPaid, durationMinutes }, index) => (
                  <div className="flex flex-col gap-3 bg-zinc-100 p-4 rounded-[8px]" key={index}>
                    <span className="text-xl font-medium">{t("dashboard_upcoming_call")}</span>

                    <div className="flex flex-col gap-0">
                      <span className="text-lg">{client?.firstName ?? ''} {client?.user.lastName ?? ''}</span>
                      <p className="text-muted-foreground">
                        {t("dashboard_date")}: <span className="text-black">
                          {sessionDate.toISOString()}
                        </span>
                      </p>
                      <p className="text-muted-foreground">
                        {t("dashboard_duration_minute")}: <span className="text-black">
                          {durationMinutes} {t("dashboard_minute")}
                        </span>
                      </p>
                      <p className="text-muted-foreground">
                        {t("dashboard_amount_paid")}: <span className="text-black">
                          {amountPaid} {t("dashboard_earnings_amount")}
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-row gap-2">
                      <Button className="flex-2/3 text-lg" size={'lg'} disabled>
                        {t("dashboard_join_call")}
                      </Button>
                      <Button variant={'secondary'} className="flex-1/3 bg-zinc-200" size={'lg'} disabled>
                        {t("dashboard_cancel")}
                      </Button>
                    </div>
                  </div>
                ))}
              </>
            )}

            <div className="flex flex-col gap-3 bg-zinc-100 p-4 rounded-[8px]">
              <span className="text-xl font-medium">{t("dashboard_booking_requests")}</span>

              <Accordion
                defaultValue="item-0"
                type="single"
                collapsible
                className="max-w-lg my-4 w-full"
              >
                {bookings.map(({ client, sessionDate, amountPaid, durationMinutes }, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="data-[state=open]:border-b-2 data-[state=open]:border-[#FFB000] dark:data-[state=open]:border-[#FFB000]"
                  >
                    <AccordionTrigger
                      className="data-[state=open]:font-medium text-lg"
                    >
                      {client?.user.firstName ?? ''} {client?.user.lastName ?? ''}
                    </AccordionTrigger>
                    <AccordionContent className="pl-8 flex flex-col gap-3 text-md">
                      <div className="flex flex-col gap-1 text-[15px]">
                        <p className="text-muted-foreground">
                          {t("dashboard_date")}: <span className="text-black">
                            {sessionDate.toISOString()}
                          </span>
                        </p>
                        <p className="text-muted-foreground">
                          {t("dashboard_duration_minute")}: <span className="text-black">
                            {durationMinutes} {t("dashboard_minute")}
                          </span>
                        </p>
                        <p className="text-muted-foreground">
                          {t("dashboard_amount_paid")}: <span className="text-black">
                            {amountPaid} {t("dashboard_earnings_amount")}
                          </span>
                        </p>
                      </div>

                      <div className="flex flex-row gap-2">
                        <Button className="flex-1" size={'sm'} disabled>
                          {t("dashboard_accept")}
                        </Button>
                        <Button className="flex-1 bg-zinc-200" size={'sm'} variant={'secondary'} disabled>
                          {t("dashboard_decline")}
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        ) : (
          <div className="py-16 flex flex-col items-center justify-center gap-8">
            <Image src="/empty-state/empty-booking.png" className="h-[200px] w-full object-contain" alt="" width={100} height={100} />
            <div className="flex flex-col items-center gap-0 text-muted-foreground">
              <p className="text-xl font-medium">{t("no_bookings")}</p>
              <span className="font-light">{t("no_data_to_show")}</span>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3 bg-zinc-100 p-4 rounded-[8px]">
          <span className="text-xl font-medium">{t("dashboard_earnings_ratings")}</span>

          <div className="flex flex-col gap-1 py-2">
            <p className="flex flex-row items-center gap-2">
              <Activity size={18} />
              142,600 {t("dashboard_earnings_amount")}
            </p>

            <p className="flex flex-row items-center gap-2">
              <Check size={18} />
              17 {t("dashboard_sessions_completed")}
            </p>

            <p className="flex flex-row items-center gap-2">
              <X size={18} />
              6 {t("dashboard_declined")}
            </p>

            <p className="flex flex-row items-center gap-2">
              <Star size={18} />
              4.5 {t("dashboard_rating")}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Dashboard
