
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Search, Users, BookOpen, Award } from "lucide-react";

const avatars = [
  "/lovable-uploads/45ca092c-660e-4ce5-a8da-fe54c1cbd331.png",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/26.jpg",
];

export function HeroSection() {
  return (
    <section className="pt-20 hero-bg-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="relative">
          {/* Floating avatars */}
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className={cn(
                "absolute hidden md:block w-16 h-16 rounded-full border-4 border-background overflow-hidden shadow-lg animate-float",
                index === 0 && "top-10 left-0 md:left-10 delay-100",
                index === 1 && "top-0 right-0 md:right-10 delay-200",
                index === 2 && "bottom-0 left-0 md:left-20 delay-300",
                index === 3 && "bottom-10 right-0 md:right-20 delay-400"
              )}
              style={{
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <img
                src={avatar}
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Master your non-tech interviews with{" "}
              <span className="text-primary">Modulus</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Practice with real interview questions from top consulting, banking, and marketing firms. Find practice partners and get mentored by industry experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Button size="lg" className="group">
                Start practicing now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View questions library
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {[
            {
              icon: <Search className="h-6 w-6 text-primary" />,
              title: "Real Interview Questions",
              description:
                "Access thousands of real questions asked at top non-tech companies",
            },
            {
              icon: <Users className="h-6 w-6 text-primary" />,
              title: "Find Practice Partners",
              description:
                "Connect with peers to practice case interviews and mock sessions",
            },
            {
              icon: <Award className="h-6 w-6 text-primary" />,
              title: "Expert Mentors",
              description:
                "Learn from mentors who've worked at McKinsey, Goldman Sachs, and more",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-primary" />,
              title: "Personalized Advice",
              description:
                "Get tailored feedback and guidance for your specific career goals",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
