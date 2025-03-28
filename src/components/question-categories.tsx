
import {
  Briefcase,
  Lightbulb,
  LineChart,
  Calculator,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Consulting",
    icon: <Briefcase className="h-6 w-6" />,
    topics: ["Profitability", "Market Entry", "Growth Strategy"],
    color: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
  },
  {
    name: "Strategy",
    icon: <Lightbulb className="h-6 w-6" />,
    topics: ["Business Expansion", "Competitive Analysis"],
    color: "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300",
  },
  {
    name: "Finance",
    icon: <LineChart className="h-6 w-6" />,
    topics: ["Valuation", "M&A", "Financial Modeling"],
    color: "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300",
  },
  {
    name: "Guesstimates",
    icon: <Calculator className="h-6 w-6" />,
    topics: ["Market Sizing", "Estimations"],
    color: "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300",
  },
  {
    name: "Marketing",
    icon: <ShoppingCart className="h-6 w-6" />,
    topics: ["Product Launch", "Pricing Strategy"],
    color: "bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300",
  },
  {
    name: "Operations",
    icon: <Truck className="h-6 w-6" />,
    topics: ["Supply Chain", "Cost Reduction"],
    color: "bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300",
  },
];

export function QuestionCategories() {
  return (
    <section id="questions" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Practice questions by category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our extensive library covers all major non-technical interview topics from top companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="feature-card animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex gap-4 items-start mb-4">
                <div className={cn("p-3 rounded-lg", category.color)}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{category.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="text-xs bg-secondary px-2 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.topics.length}+ question types with detailed solutions
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Explore {category.name} Questions
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
