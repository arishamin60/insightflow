import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * FAQ Section
 * - Expandable accordion items
 * - useState for managing open/closed state
 * - Smooth animations on expand/collapse
 * - Design: Modern Minimalism with Depth
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: 'How long does it take to set up InsightFlow?',
      answer: 'Most teams get up and running in less than 15 minutes. Our setup wizard guides you through connecting your data sources, and our integrations handle the rest. If you need help, our support team is always available.',
    },
    {
      id: 2,
      question: 'Can I integrate InsightFlow with my existing tools?',
      answer: 'Yes! InsightFlow integrates with 200+ platforms including Stripe, Shopify, Google Analytics, Slack, Zapier, and more. We also offer a REST API for custom integrations.',
    },
    {
      id: 3,
      question: 'Is my data secure?',
      answer: 'Absolutely. We use end-to-end encryption, comply with SOC 2 Type II standards, and maintain GDPR compliance. Your data is stored in secure AWS data centers with automatic backups.',
    },
    {
      id: 4,
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.9% uptime for all plans. Our infrastructure is built on AWS with automatic failover and redundancy across multiple regions.',
    },
    {
      id: 5,
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel anytime without penalties. We also offer a 14-day free trial so you can test InsightFlow risk-free before committing.',
    },
    {
      id: 6,
      question: 'Do you offer customer support?',
      answer: 'We offer email support for all plans. Professional and Enterprise plans include priority support and access to our knowledge base. Enterprise customers get dedicated account managers.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about InsightFlow.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full glass p-6 rounded-xl text-left hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
              >
                {/* Question Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-600 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-cyan-500 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {/* Answer (Expandable) */}
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-slate-200 animate-fade-in-down">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-slate-600 mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:support@insightflow.com"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Contact Our Support Team
          </a>
        </div>
      </div>
    </section>
  );
}
