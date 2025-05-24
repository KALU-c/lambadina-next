import { Link, useParams } from "react-router";
import DetailsNavbar from "./layout/navbar";
import { Star } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import AboutMe from "./AboutMe";
import Profile from "./Profile";
import Pricing from "./Pricing";
import CTA from "../Home/CTA";
import FAQ from "./FAQ-accordion";
import Footer from "../Footer";
import { useEffect, useRef, useState } from "react";
import type { MentorProfile } from "@/types/mentor";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Details = () => {
  const { t } = useTranslation();

  const [mentor, setMentor] = useState<MentorProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const { mentorId } = useParams();

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/mentors/mentors/${mentorId}/`);
        // console.log("Fetched Mentor:", data);
        setMentor(data);
      } catch {
        console.error("Error fetching mentor");
        setMentor(null);
      } finally {
        setLoading(false);
      }
    };

    if (mentorId) {
      fetchMentor();
    }
  }, [mentorId]);

  if (loading)
    return (
      <div className="py-12 text-center text-gray-500 text-lg">
        {t("details_loading")}
      </div>
    );

  if (!mentor)
    return (
      <div className="py-12 text-center text-red-500 text-lg">
        {t("details_not_found")}
      </div>
    );

  return (
    <main className="pt-[10px] flex flex-col">
      <div className="px-[22px] flex flex-col space-y-6">
        <DetailsNavbar />

        <div className="flex flex-row gap-2 text-lg flex-wrap">
          <Link to={"/"}>{t("details_breadcrumb_home")}</Link>
          /
          <span className="text-muted-foreground">
            {mentor.user.first_name ?? ''} {mentor.user.last_name ?? ''}
          </span>
        </div>

        <Profile
          src={mentor.user.profile_picture ?? "/"}
          name={`${mentor.user.first_name ?? ''} ${mentor.user.last_name ?? ''}`}
        />
        <Separator />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-0">
              <p className="text-muted-foreground text-lg">{t("details_starting_from")}</p>
              <p className="text-xl font-medium">
                {mentor.price_per_minute ?? ''} {t("details_currency")}
              </p>
            </div>
            <Button
              size={"xlg"}
              onClick={() =>
                pricingRef.current?.scrollIntoView({
                  block: "center",
                  behavior: "smooth",
                })
              }
            >
              {t("details_see_plans")}
            </Button>
          </div>

          <div className="flex flex-row gap-0 items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                color="#FFB000"
                fill={
                  i < Math.floor(parseFloat(mentor.rating))
                    ? "#FFB000"
                    : "none"
                }
              />
            ))}
            <p className="ml-2 text-[#FFB000]">
              {mentor.rating}
              {/* <span className="text-muted-foreground"> (27)</span> */}
            </p>
          </div>
        </div>

        <AboutMe />
        <Pricing ref={pricingRef} mentor={mentor} />

        <CTA className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]" />

        <Separator />

        <FAQ />
      </div>

      <Footer />
    </main>
  );
};

export default Details;
