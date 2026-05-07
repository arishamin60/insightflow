import { BarChart3, Zap, Shield } from 'lucide-react';

/**
 * Features Section
 * - 3-column grid of feature cards
 * - Each card has icon, title, and description
 * - Glassmorphic design with hover effects
 * - Design: Modern Minimalism with Depth
 */
export default function Features() {
  const features = [
    {
      id: 1,
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track your metrics as they happen. Get instant insights into user behavior, revenue trends, and performance indicators.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663629539402/WECrSRXTR5eTbH4QqqEd9u/feature-analytics-AVrrLGrKWBLFkzHAjj9SiH.webp',
    },
    {
      id: 2,
      icon: Zap,
      title: 'Seamless Integrations',
      description: 'Connect with your favorite tools. InsightFlow integrates with 200+ platforms including Stripe, Slack, and more.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663629539402/WECrSRXTR5eTbH4QqqEd9u/feature-integration-QwpmMXZExMwzYmPUdbKXaK.webp',
    },
    {
      id: 3,
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Your data is protected with end-to-end encryption, SOC 2 compliance, and 99.9% uptime guarantee.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663629539402/WECrSRXTR5eTbH4QqqEd9u/feature-security-froNjhKZGXsBBeR8cvr5k5.webp',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Powerful Features
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to understand your business data at a glance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass p-8 rounded-2xl h-full hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2">
                  {/* Feature Image */}
                  <div className="mb-6 h-48 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Icon */}
                  <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg">
                    <Icon className="w-6 h-6 text-cyan-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Gradient Underline on Hover */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
