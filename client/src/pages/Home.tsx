import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import Navigation from '@/components/Navigation';

/**
 * InsightFlow Marketing Site - Main Page
 * 
 * Design Philosophy: Modern Minimalism with Depth
 * - Navy (#0F1419) + Teal (#00D9FF) color scheme
 * - Glassmorphism effects and frosted glass cards
 * - Smooth scroll navigation with anchor links
 * - Generous whitespace and clear hierarchy
 */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Main Content */}
      <main className="overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <FAQ />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
