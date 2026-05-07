import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

/**
 * Testimonials Section
 * - Rotating carousel of customer testimonials
 * - Star ratings and customer details
 * - Glassmorphic card design
 * - Design: Modern Minimalism with Depth
 */
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote: 'InsightFlow has been a game-changer for our analytics. We went from spreadsheets to real-time dashboards in days.',
      author: 'Sarah Chen',
      role: 'CEO, TechStartup Inc.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      id: 2,
      quote: 'The integration with our existing tools was seamless. Our team is now making data-driven decisions faster than ever.',
      author: 'Marcus Johnson',
      role: 'Operations Manager, RetailCo',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      id: 3,
      quote: 'Outstanding customer support and the UI is so intuitive. Highly recommend InsightFlow to any growing business.',
      author: 'Emily Rodriguez',
      role: 'Product Lead, SaaS Solutions',
      rating: 5,
      avatar: '👩‍🔬',
    },
    {
      id: 4,
      quote: 'The ROI was immediate. We identified cost-saving opportunities within the first week of using InsightFlow.',
      author: 'David Kim',
      role: 'Finance Director, Global Corp',
      rating: 5,
      avatar: '👨‍💻',
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoRotate, testimonials.length]);

  const handlePrev = () => {
    setAutoRotate(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoRotate(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Loved by Teams Worldwide
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what our customers have to say about InsightFlow.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="glass p-8 md:p-12 rounded-2xl mb-8 min-h-64 flex flex-col justify-between animate-fade-in-up">
            {/* Quote */}
            <div className="space-y-6">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
                "{testimonials[activeIndex].quote}"
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-8 border-t border-slate-200">
              <div className="text-4xl">{testimonials[activeIndex].avatar}</div>
              <div>
                <p className="font-bold text-foreground">{testimonials[activeIndex].author}</p>
                <p className="text-sm text-slate-600">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoRotate(false);
                    setActiveIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-cyan-500 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="p-3 rounded-lg bg-slate-100 hover:bg-cyan-100 text-foreground hover:text-cyan-600 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-lg bg-slate-100 hover:bg-cyan-100 text-foreground hover:text-cyan-600 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
