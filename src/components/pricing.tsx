
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic features to get you started",
    features: [
      "100+ practice questions",
      "Community forum access",
      "Basic peer matching",
      "Limited interview templates"
    ],
    popular: false,
    button: {
      text: "Get started",
      variant: "outline" as const,
    }
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Everything you need for serious preparation",
    features: [
      "Unlimited practice questions",
      "Find practice partners",
      "1 mentorship session/month",
      "Advanced interview frameworks",
      "Performance analytics",
      "Company-specific question sets"
    ],
    popular: true,
    button: {
      text: "Start your free trial",
      variant: "default" as const,
    }
  },
  {
    name: "Ultimate",
    price: "$79",
    period: "/month",
    description: "Maximum preparation with personalized support",
    features: [
      "Everything in Pro",
      "4 mentorship sessions/month",
      "Priority matching with peers",
      "Personalized preparation plan",
      "Mock interview recordings & analysis",
      "Direct messaging with mentors"
    ],
    popular: false,
    button: {
      text: "Start your free trial",
      variant: "outline" as const,
    }
  }
];

export function Pricing() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose the right plan for you
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All plans come with a 7-day free trial so you can test everything risk-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={cn(
                "rounded-xl border border-border overflow-hidden", 
                "animate-fade-in transition-all duration-300",
                plan.popular ? "bg-primary/5 shadow-lg" : "bg-card shadow"
              )}
              style={{ animationDelay: `${0.2 * i}s` }}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-center text-xs py-1 font-medium">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline mb-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                <Button variant={plan.button.variant} className="w-full mb-6">
                  {plan.button.text}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 text-sm text-muted-foreground">
          Need a custom solution for your organization?{" "}
          <a href="#" className="text-primary hover:underline">Contact us</a> for enterprise pricing.
        </div>
      </div>
    </section>
  );
}
