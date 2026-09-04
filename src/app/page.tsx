import { HeroSection } from '@/components/home/HeroSection';
import { TrustSection } from '@/components/home/TrustSection';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { TrendingGrid } from '@/components/home/TrendingGrid';
import { HowItWorks } from '@/components/home/HowItWorks';
import { DealsSection } from '@/components/home/DealsSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { FaqSection } from '@/components/home/FaqSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <CategoryGrid />
      <TrendingGrid />
      <HowItWorks />
      <DealsSection />
      <ReviewsSection />
      <FaqSection />
    </>
  );
}
