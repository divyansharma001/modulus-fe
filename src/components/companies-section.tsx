
import { cn } from "@/lib/utils";

const companies = [
  { name: "McKinsey & Company", category: "Consulting" },
  { name: "Boston Consulting Group", category: "Consulting" },
  { name: "Bain & Company", category: "Consulting" },
  { name: "JP Morgan", category: "Banking" },
  { name: "Morgan Stanley", category: "Banking" },
  { name: "Goldman Sachs", category: "Banking" },
  { name: "Unilever", category: "Marketing" },
  { name: "P&G", category: "Marketing" },
  { name: "PepsiCo", category: "Marketing" },
];

export function CompaniesSection() {
  return (
    <section className="py-12 md:py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
            More than 100+ companies covered
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold">
            Practice for interviews at top firms
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className={cn(
                "p-4 md:p-6 bg-card rounded-lg border border-border shadow-sm animate-fade-in flex flex-col items-center justify-center text-center",
                "hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              )}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <span className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                {company.category}
              </span>
              <span className="font-medium">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
