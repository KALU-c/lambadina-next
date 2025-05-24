"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { MentorWithUser } from "./Pricing"

const AboutMe = ({ mentor }: { mentor: MentorWithUser | null }) => {
  const [showMore, setShowMore] = useState(false)

  const charLimit = 300
  const bio = mentor?.bio || ""
  const isLong = bio.length > charLimit
  const displayedText = showMore ? bio : bio.substring(0, charLimit)

  return (
    <div className="flex flex-col gap-2 py-2 mb-10">
      <h2 className="text-2xl font-medium">About me</h2>

      <div className="font-light text-md whitespace-pre-line">
        {displayedText}
        {!showMore && isLong && "..."}
      </div>

      {isLong && (
        <div className="px-10 flex flex-row justify-center">
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "View less" : "View more"}
          </Button>
        </div>
      )}
    </div>
  )
}

export default AboutMe


{/* <p>Er. Tsedeke Yihune</p>
<p>Founder & CEO, Flinstone Engineering</p>

<ul className="list-disc pl-7 pr-1 py-2">
  <li>🏗️ Civil engineer with decades of experience in construction and infrastructure</li>
  <li>🚀 Founder of Flintstone Engineering — one of Ethiopia’s leading construction companies</li>
  <li>🏘️ Known for high-quality real estate and landmark projects across Ethiopia</li>
  <li>🌍 Advocate for sustainable and locally-driven development</li>
  <li>👥 Passionate about mentoring young engineers and entrepreneurs</li>
  {showMore && (
    <>
      <li>📚 Published author on sustainable building practices.</li>
      <li>🎙️ Keynote speaker at international engineering conferences.</li>
      <li>🤝 Actively collaborates with universities for mentorship and training programs.</li>
    </>
  )}
</ul> */}