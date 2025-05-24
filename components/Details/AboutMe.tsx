"use client"

import { useState } from "react";
import { Button } from "../ui/button";

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col gap-2 py-2">
      <h2 className="text-2xl font-medium">About me</h2>

      <div className="font-light text-md">
        <p>Er. Tsedeke Yihune</p>
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
        </ul>

      </div>

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
    </div>
  );
};

export default AboutMe;
