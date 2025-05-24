"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Suspense, useEffect, useState } from "react"
import ExpertsCarouselSkeleton from "./experts-carousel-skeleton"
// import { MENTORS } from "@/constants/mentors"
import type { MentorProfile } from "@/types/mentor"
import { useTranslation } from "react-i18next"
import Link from "next/link"

const ExpertsCarousel = () => {
  const { t } = useTranslation();

  const [mentors, setMentors] = useState<MentorProfile[]>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mentorsRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mentors/mentors/`),
        ])

        const mentorsData = await mentorsRes.json()

        setMentors(mentorsData)
      } catch {
        console.error('Failed to fetch mentors or categories')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col gap-3 py-2">
        <span className="text-muted-foreground text-3xl">
          {t("experts_carousel_title")}
        </span>

        <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
          <ExpertsCarouselSkeleton />
          <ExpertsCarouselSkeleton />
          <ExpertsCarouselSkeleton />
          <ExpertsCarouselSkeleton />
        </div>
      </div>
    )
  }

  const topRatedMentors = [...mentors]
    .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    .slice(0, 4);

  return (
    <>
      {mentors.length > 0 && (
        <div className="flex flex-col gap-3 py-2">
          <span className="text-muted-foreground text-3xl">
            {t("experts_carousel_title")}
          </span>

          <Suspense fallback={<ExpertsCarouselSkeleton />}>
            <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
              {topRatedMentors.map((mentor) => (
                <Link
                  href={`/mentors/${mentor.id}`}
                  key={mentor.id}
                >
                  <Avatar className="h-[96px] w-[96px]">
                    <AvatarImage
                      src={mentor.user.profile_picture}
                      alt={`${mentor.user.first_name} ${mentor.user.last_name}`}
                    />
                    <AvatarFallback>
                      {mentor.user.first_name.charAt(0)}{mentor.user.last_name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Link>
              ))}
            </div>
          </Suspense>
        </div>
      )}
    </>
  )
}

export default ExpertsCarousel