
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Modulus helped me prepare for my BCG interview in just two weeks. The questions were spot on and the mentor feedback was invaluable.",
    author: "Alex T.",
    role: "Consultant at BCG",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    quote: "Finding a practice partner through Modulus changed everything. We practiced twice a week and both got offers from our target companies!",
    author: "Priya K.",
    role: "Analyst at JP Morgan",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    quote: "The sector-specific questions for marketing roles were exactly what I needed. I was prepared for every question in my P&G interview.",
    author: "Marcus L.",
    role: "Brand Manager at P&G",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success stories from our users
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Modulus has helped candidates secure their dream roles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className={cn(
                "bg-card rounded-xl p-6 shadow-md border border-border",
                "flex flex-col h-full hover:shadow-lg transition-all duration-300",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${0.2 * i}s` }}
            >
              <div className="mb-6">
                <Quote className="h-10 w-10 text-primary/20" />
              </div>
              
              <p className="text-foreground italic flex-grow mb-6">
                "{testimonial.quote}"
              </p>
              
              <Separator className="mb-6" />
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-primary/10 p-6 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-medium mb-4">
              Join thousands of successful candidates
            </h3>
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">95%</div>
                <p className="text-sm text-muted-foreground">Success rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">10k+</div>
                <p className="text-sm text-muted-foreground">Active users</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">500+</div>
                <p className="text-sm text-muted-foreground">Expert mentors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
