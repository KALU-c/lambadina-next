
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const items = [
  {
    title: "How does a 1:1 video consultation work?",
    content: "Once you book a session, you'll receive a confirmation email with a secure video link. At your scheduled time, simply join the call and meet your expert for a personalized one-on-one conversation."
  },
  {
    title: "How long are the sessions?",
    content: "Most sessions run for 30 to 60 minutes, depending on the expert and the topic you choose. The exact duration is listed on each expert’s profile."
  },
  {
    title: "How much can we accomplish in a virtual session?",
    content: "A lot! Our experts are experienced at maximizing value in each session — whether it's career advice, mental health support, or business strategy. Come prepared with your top questions or topics."
  },
  {
    title: "Can I book an expert more than once?",
    content: "Absolutely. Many of our clients build ongoing mentorship relationships by booking recurring sessions with their favorite experts."
  },
  {
    title: "Why are these experts doing this?",
    content: "Our experts believe in sharing their knowledge and giving back to the community. It’s a way for them to connect with aspiring professionals and make a real difference."
  },
  {
    title: "What timezones are the video consultations based in?",
    content: "All available times are displayed in your local timezone automatically when you book — no timezone math needed."
  },
  {
    title: "Do you support international customers?",
    content: "Yes — we welcome clients from anywhere in the world. As long as you have a stable internet connection and a device that supports video calls, you’re good to go."
  },
  {
    title: "What if an expert is sold out?",
    content: "If an expert’s slots are fully booked, you can join their waitlist or check back later as new times are added regularly."
  },
  {
    title: "When do experts unlock more times?",
    content: "Experts typically open new time slots every month, depending on their availability. Join their waitlist to get notified first."
  },
  {
    title: "Can I reschedule or cancel my session?",
    content: "Yes — you can reschedule or cancel up to 24 hours before your appointment without any penalty. Simply visit your account dashboard to manage bookings."
  },
  {
    title: "Do you have a guarantee in case I was dissatisfied?",
    content: "We want you to have the best possible experience. If you’re not satisfied with your session, reach out to our support team within 24 hours and we’ll work to make it right."
  }
];


export default function FAQ() {
  return (
    <div className="flex flex-col gap-2 mb-16">
      <h2 className="text-2xl font-medium">Common questions</h2>

      <Accordion
        defaultValue="item-0"
        type="single"
        collapsible
        className="max-w-lg my-4 w-full"
      >
        {items.map(({ title, content }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 transition-all hover:underline [&[data-state=open]>svg]:rotate-45 text-lg text-left">
                {title}
                <Plus className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="text-md">{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}