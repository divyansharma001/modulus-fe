
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Star } from "lucide-react";

const mentors = [
  {
    name: "Sarah Johnson",
    role: "Former McKinsey Consultant",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 4.9,
    reviews: 87,
    specialties: ["Case Interviews", "Market Entry Strategy"],
  },
  {
    name: "Michael Chen",
    role: "Investment Banking VP, Goldman Sachs",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 4.8,
    reviews: 62,
    specialties: ["Financial Modeling", "M&A"],
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director, P&G",
    image: "https://randomuser.me/api/portraits/women/65.jpg", 
    rating: 5.0,
    reviews: 53,
    specialties: ["Brand Strategy", "Product Launch"],
  },
];

export function MentorshipSection() {
  return (
    <section id="mentorship" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            1:1 Mentorship with Industry Experts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized guidance and feedback from experienced professionals who've been in your shoes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor, i) => (
            <div 
              key={i} 
              className="bg-card rounded-xl shadow-md border border-border overflow-hidden animate-fade-in hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${0.2 * i}s` }}
            >
              <div className="aspect-video bg-primary/10 relative">
                <img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-background/90 dark:bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                  <span className="text-sm font-medium">{mentor.rating}</span>
                  <span className="text-xs text-muted-foreground ml-1">({mentor.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-1">{mentor.name}</h3>
                <p className="text-primary text-sm mb-4">{mentor.role}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.specialties.map((specialty, j) => (
                      <span key={j} className="text-xs bg-secondary px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mb-3">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a session
                </Button>
                
                <a href="#" className="text-sm text-primary hover:underline flex justify-center">
                  View full profile
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="group">
            Browse all mentors
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
