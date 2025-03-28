
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Video } from "lucide-react";

export function PeerFinder() {
  return (
    <section id="peer-finder" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find the perfect partner for practice sessions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with like-minded professionals preparing for similar interviews. Practice makes perfect - especially with the right partner.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Find your case comp partner</h3>
                    <p className="text-muted-foreground text-sm">
                      Connect with others preparing for case competitions
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Practice mock interviews</h3>
                    <p className="text-muted-foreground text-sm">
                      Schedule 1:1 interview practice with peers and get feedback
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Flexible scheduling</h3>
                    <p className="text-muted-foreground text-sm">
                      Find partners that match your availability and goals
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="group">
                Find a practice partner now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="bg-white dark:bg-card rounded-xl shadow-xl p-6 border border-border">
                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-4">Find your match</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Interview Type</label>
                      <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                        <option>Consulting Case Interview</option>
                        <option>Banking Technical Interview</option>
                        <option>Marketing Strategy Case</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Target Companies</label>
                      <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                        <option>McKinsey, BCG, Bain</option>
                        <option>JP Morgan, Goldman Sachs</option>
                        <option>P&G, Unilever</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Experience Level</label>
                      <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                        <option>Beginner - Just starting out</option>
                        <option>Intermediate - Some practice</option>
                        <option>Advanced - Experienced interviewer</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">Find Matches</Button>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    300+ active practice partners available now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
