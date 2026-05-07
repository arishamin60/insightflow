import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

/**
 * Pricing Section
 * - 3 pricing tiers (Starter, Professional, Enterprise)
 * - Feature comparison per tier
 * - Highlighted recommended tier
 * - Design: Modern Minimalism with Depth
 */
export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'Starter',
      price: 29,
      description: 'Perfect for small teams just getting started',
      features: [
        'Up to 10,000 events/month',
        'Basic dashboards',
        'Email support',
        '7-day data retention',
        'Single user account',
      ],
      highlighted: false,
    },
    {
      id: 2,
      name: 'Professional',
      price: 99,
      description: 'For growing businesses with advanced needs',
      features: [
        'Up to 1,000,000 events/month',
        'Advanced dashboards & reports',
        'Priority support',
        '90-day data retention',
        'Up to 10 team members',
        'Custom integrations',
        'API access',
      ],
      highlighted: true,
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale operations',
      features: [
        'Unlimited events',
        'Custom dashboards',
        '24/7 dedicated support',
        'Unlimited data retention',
        'Unlimited team members',
        'SSO & advanced security',
        'Custom integrations',
        'SLA guarantee',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your business. Always flexible to scale.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative animate-fade-in-up ${plan.highlighted ? 'md:scale-105' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Highlight Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`glass p-8 rounded-2xl h-full flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? 'ring-2 ring-cyan-500 shadow-2xl shadow-cyan-500/20'
                    : 'hover:shadow-xl hover:shadow-cyan-500/10'
                }`}
              >
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-5xl font-bold text-foreground">
                        ${plan.price}
                      </span>
                      <span className="text-slate-600 ml-2">/month</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-8 font-semibold py-3 rounded-lg transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 text-white'
                      : 'border-2 border-slate-300 text-foreground hover:bg-slate-50'
                  }`}
                >
                  Get Started
                </Button>

                {/* Features List */}
                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={20} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 text-slate-600">
          <p>All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
}
