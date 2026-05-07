import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

/**
 * Hero Section
 * - Full-width background with data visualization imagery
 * - Large headline with gradient underline
 * - Subheading with value proposition
 * - Primary CTA button
 * - Design: Modern Minimalism with Depth
 */
export default function Hero() {
  const handleCTA = () => {
    const element = document.querySelector('#pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-24 pb-20 overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663629539402/WECrSRXTR5eTbH4QqqEd9u/hero-background-fRJd77EaCVdYcPrY4t7Np8.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <div className="space-y-8 animate-fade-in-up">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Turn Data Into
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Decisions
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              InsightFlow transforms raw data into actionable insights. Visualize trends, track metrics, and make smarter business decisions in real-time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={handleCTA}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-xl hover:shadow-cyan-500/50 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 flex items-center gap-2 group"
            >
              Start Free Trial
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-slate-300 text-foreground hover:bg-slate-50 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              <span className="text-sm text-slate-600">Trusted by 500+ companies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              <span className="text-sm text-slate-600">99.9% uptime guarantee</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="hidden lg:flex justify-center items-center animate-slide-in-right">
          <div className="relative w-full h-96">
            {/* Floating Card 1 */}
            <div className="absolute top-0 right-0 w-64 h-40 glass p-6 rounded-2xl shadow-xl animate-float"
              style={{ animationDelay: '0s' }}>
              <div className="text-cyan-500 font-bold text-sm mb-2">Revenue Growth</div>
              <div className="text-2xl font-bold text-foreground">+24.5%</div>
              <div className="text-xs text-slate-500 mt-2">vs last month</div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-10 left-0 w-64 h-40 glass p-6 rounded-2xl shadow-xl animate-float"
              style={{ animationDelay: '0.5s' }}>
              <div className="text-cyan-500 font-bold text-sm mb-2">Active Users</div>
              <div className="text-2xl font-bold text-foreground">12,456</div>
              <div className="text-xs text-slate-500 mt-2">+12% this week</div>
            </div>

            {/* Center Glow Element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-slate-500">Scroll to explore</span>
          <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
