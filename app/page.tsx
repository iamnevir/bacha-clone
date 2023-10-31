import { EventSection } from "@/components/event-section";
import { Footer } from "@/components/footer";
import { InfoSection } from "@/components/info-section";
import { MainSite } from "@/components/main-site";
import { NeedToKnowSection } from "@/components/need-to-know-section";
import { Play } from "@/components/play";
import { ReviewSection } from "@/components/review-section";
import TourMoutains from "@/components/tour-moutains";
import TourSection from "@/components/tour-section";
export default function Home() {
  return (
    <div className="w-full scroll-smooth h-full bg-[#E7E4DE] overflow-auto snap-y transition-all absolute">
      <MainSite />
      <Play />
      <TourSection />
      <TourMoutains />
      <EventSection />
      <InfoSection />
      <NeedToKnowSection />
      <ReviewSection />
      <Footer />
    </div>
  );
}
