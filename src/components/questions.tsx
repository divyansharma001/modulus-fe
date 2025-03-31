import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, Bookmark, MessageSquare, Clock, Award, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Navbar } from './navbar';
import { Footer } from './footer';

// Sample data for HR interview questions - moved outside component to prevent recreation on each render
const allHRQuestions = [
  { id: 1, title: "Tell me about yourself.", company: "Amazon, Google, Microsoft", difficulty: "Easy", tags: ["Behavioral", "Common"], answers: 42, timeAgo: "1 month ago", hasBeenAsked: true },
  { id: 2, title: "What are your greatest strengths?", company: "Apple, Meta, LinkedIn", difficulty: "Easy", tags: ["Behavioral", "Self-Assessment"], answers: 38, timeAgo: "2 months ago", hasBeenAsked: true },
  { id: 3, title: "What are your greatest weaknesses?", company: "Netflix, Salesforce, Oracle", difficulty: "Medium", tags: ["Behavioral", "Self-Assessment"], answers: 45, timeAgo: "1 month ago", hasBeenAsked: true },
  { id: 4, title: "Tell me about something you did – or failed to do – that you now feel a little ashamed of.", company: "Goldman Sachs, JPMorgan, Morgan Stanley", difficulty: "Hard", tags: ["Behavioral", "Ethics"], answers: 26, timeAgo: "3 months ago", hasBeenAsked: false },
  { id: 5, title: "Why are you leaving (or did you leave) this position?", company: "Deloitte, KPMG, EY", difficulty: "Medium", tags: ["Behavioral", "Career Transition"], answers: 31, timeAgo: "2 weeks ago", hasBeenAsked: true },
  { id: 6, title: "The Silent Treatment", company: "McKinsey, BCG, Bain", difficulty: "Hard", tags: ["Behavioral", "Pressure Testing"], answers: 18, timeAgo: "2 months ago", hasBeenAsked: false },
  { id: 7, title: "Why should I hire you?", company: "Accenture, IBM, Cognizant", difficulty: "Medium", tags: ["Behavioral", "Value Proposition"], answers: 29, timeAgo: "1 month ago", hasBeenAsked: true },
  { id: 8, title: "Aren't you overqualified for this position?", company: "L'Oréal, P&G, Unilever", difficulty: "Medium", tags: ["Behavioral", "Career Fit"], answers: 24, timeAgo: "2 months ago", hasBeenAsked: false },
  { id: 9, title: "Where do you see yourself five years from now?", company: "Coca-Cola, PepsiCo, Nestlé", difficulty: "Medium", tags: ["Behavioral", "Career Goals"], answers: 37, timeAgo: "1 month ago", hasBeenAsked: true },
  { id: 10, title: "Describe your ideal company, location and job.", company: "American Express, Visa, Mastercard", difficulty: "Medium", tags: ["Behavioral", "Preferences"], answers: 22, timeAgo: "3 months ago", hasBeenAsked: false },
  // Adding more questions to demonstrate pagination
  { id: 11, title: "Why do you want to work at our company?", company: "Tesla, SpaceX, Rivian", difficulty: "Easy", tags: ["Behavioral", "Company Interest"], answers: 33, timeAgo: "2 weeks ago", hasBeenAsked: true },
  { id: 12, title: "Describe a time you faced a conflict at work.", company: "Adobe, Autodesk, Oracle", difficulty: "Medium", tags: ["Behavioral", "Conflict Resolution"], answers: 27, timeAgo: "1 month ago", hasBeenAsked: true },
  { id: 13, title: "How do you handle stress and pressure?", company: "UBS, Deutsche Bank, Credit Suisse", difficulty: "Medium", tags: ["Behavioral", "Stress Management"], answers: 31, timeAgo: "3 weeks ago", hasBeenAsked: false },
  { id: 14, title: "What motivates you?", company: "Uber, Lyft, DoorDash", difficulty: "Easy", tags: ["Behavioral", "Motivation"], answers: 35, timeAgo: "2 months ago", hasBeenAsked: true },
  { id: 15, title: "Tell me about a time you had to deal with a difficult customer.", company: "Airbnb, Booking.com, Expedia", difficulty: "Medium", tags: ["Behavioral", "Customer Service"], answers: 40, timeAgo: "1 month ago", hasBeenAsked: true },
  { id: 16, title: "What is your leadership style?", company: "Nike, Adidas, Under Armour", difficulty: "Medium", tags: ["Behavioral", "Leadership"], answers: 36, timeAgo: "2 months ago", hasBeenAsked: false },
  { id: 17, title: "How do you prioritize your work?", company: "Intel, AMD, Nvidia", difficulty: "Easy", tags: ["Behavioral", "Time Management"], answers: 29, timeAgo: "3 weeks ago", hasBeenAsked: true },
  { id: 18, title: "Why do you want to leave your current job?", company: "Johnson & Johnson, Pfizer, Merck", difficulty: "Medium", tags: ["Behavioral", "Career Transition"], answers: 33, timeAgo: "1 month ago", hasBeenAsked: true },
  { id: 19, title: "Tell me about a project you're proud of.", company: "Disney, Netflix, HBO", difficulty: "Easy", tags: ["Behavioral", "Achievements"], answers: 41, timeAgo: "2 weeks ago", hasBeenAsked: true },
  { id: 20, title: "How would your coworkers describe you?", company: "Spotify, Pandora, SoundCloud", difficulty: "Easy", tags: ["Behavioral", "Self-Assessment"], answers: 28, timeAgo: "1 month ago", hasBeenAsked: false },
  { id: 60, title: "If you won $10 million lottery, would you still work?", company: "Slack, Zoom, Microsoft", difficulty: "Easy", tags: ["Behavioral", "Motivation"], answers: 28, timeAgo: "2 weeks ago", hasBeenAsked: false }
];

const difficultyColors = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800"
};

// Map of question IDs to their example answers - prevents repetitive code in the render function
const questionAnswers = {
  1: "When answering \"Tell me about yourself,\" focus on your professional journey that's relevant to the role. Start with your current position, highlight 2-3 key achievements, then briefly cover your background and qualifications. End with why you're interested in this role. Keep it under 2 minutes and practice to sound natural, not rehearsed.",
  2: "When discussing strengths, select 3-4 qualities that are relevant to the job. For each strength, provide a brief example that demonstrates how you've used it successfully. Make sure your strengths align with what the employer is seeking. Be confident but not arrogant, and be prepared to discuss how you continue to develop these strengths.",
  3: "The best approach to discussing weaknesses is to mention skills you've improved upon or are working to strengthen. Choose a genuine but not critical weakness, describe how you've recognized it, and explain the specific steps you're taking to overcome it. End with progress you've made. Avoid clichés like \"I'm a perfectionist\" and never mention weaknesses central to the job requirements.",
  4: "For this challenging question, select a situation where you made a professional mistake that you learned from. Briefly describe what happened, take full responsibility without making excuses, and most importantly, focus on what you learned and how you've applied that lesson since. Choose something with a clear resolution and growth opportunity, and avoid sharing something that would raise serious concerns about your judgment.",
  5: "When explaining why you're leaving your position, focus on the positive aspects of what you're moving toward rather than what you're leaving behind. Emphasize your desire for growth, new challenges, or better alignment with your career goals. Be honest but diplomatic - never speak negatively about your current employer. Demonstrate that you're making a thoughtful career move rather than an impulsive decision.",
  6: "The \"Silent Treatment\" is a stress interview technique where the interviewer remains silent after you answer. Don't fill the silence with nervous chatter. Instead, maintain composure, briefly ask if they would like more detail on your answer, and then wait calmly. This tests your confidence and ability to handle pressure. Remember that it's a deliberate technique, not a sign you've answered poorly.",
  7: "When answering \"Why should I hire you?\", focus on 3-4 specific qualifications and accomplishments that match what the employer needs. Research the company thoroughly beforehand to understand their challenges. Demonstrate your understanding of their needs, explain how your experience solves their problems, highlight your unique value proposition, and convey genuine enthusiasm for the role and company."
};

// Default answer for questions without a specific answer
const defaultAnswer = "This question tests your alignment with the role and organization. Prepare a thoughtful answer that demonstrates your understanding of the position's requirements and how your experience makes you well-suited to meet them. Focus on specific examples that highlight your relevant skills and accomplishments.";

export default function HRInterviewQuestionsComponent() {
  // State for filters, expanded question, and pagination
  const [selectedFilters, setSelectedFilters] = useState({
    role: null,
    company: null,
    category: null,
    difficulty: null
  });
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState(allHRQuestions);
  
  // Pagination settings
  const questionsPerPage = 5;
  
  // Toggle question expansion
  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };
  
  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // Apply filters and search
  useEffect(() => {
    let results = allHRQuestions;
    
    // Apply search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      results = results.filter(question => 
        question.title.toLowerCase().includes(query) || 
        question.company.toLowerCase().includes(query) ||
        question.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply other filters
    if (selectedFilters.difficulty) {
      results = results.filter(question => question.difficulty === selectedFilters.difficulty);
    }
    
    if (selectedFilters.category) {
      results = results.filter(question => 
        question.tags.some(tag => tag === selectedFilters.category)
      );
    }
    
    setFilteredQuestions(results);
    // Only reset to first page when filters change if we're not on the first page already
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [searchQuery, selectedFilters]);
  
  // Calculate total pages based on filtered questions
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
  
  // Handle page change
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo(0, 0);
  };
  
  // Get current page questions
  const getCurrentQuestions = () => {
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    return filteredQuestions.slice(startIndex, endIndex);
  };
  
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    
    if (totalPages <= 7) {
      // Show all pages if there are 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Show ellipsis or additional pages
      if (currentPage > 3) {
        pageNumbers.push('...');
      }
      
      // Current page range
      const rangeStart = Math.max(2, currentPage - 1);
      const rangeEnd = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = rangeStart; i <= rangeEnd; i++) {
        pageNumbers.push(i);
      }
      
      // Show ellipsis or additional pages
      if (currentPage < totalPages - 2) {
        pageNumbers.push('...');
      }
      
      // Always show last page if there's more than one page
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  // Toggle a specific filter
  const toggleFilter = (type, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [type]: prev[type] === value ? null : value
    }));
  };

  // Check if current page is valid (in case filters reduce total pages)
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-12 max-w-6xl pt-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Top HR Interview Questions</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Review this list of {allHRQuestions.length} verified HR interview questions and answers from top companies across industries.
        </p>
      </div>

      {/* Search and filters */}
      <div className="mb-8">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for questions, companies..."
            className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="flex flex-wrap gap-3">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => {
              // Toggle role filter (to be implemented)
            }}
          >
            Role <ChevronDown className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => {
              // Toggle company filter (to be implemented)
            }}
          >
            Company <ChevronDown className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            className={`flex items-center gap-2 ${selectedFilters.category ? "bg-primary/10 text-primary border-primary/20" : ""}`}
            onClick={() => {
              // For demo, toggle a specific category filter
              toggleFilter('category', 'Behavioral');
            }}
          >
            Category <ChevronDown className="h-4 w-4" />
            {selectedFilters.category && (
              <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">1</span>
            )}
          </Button>
          <Button 
            variant="outline" 
            className={`flex items-center gap-2 ${selectedFilters.difficulty ? "bg-primary/10 text-primary border-primary/20" : ""}`}
            onClick={() => {
              // For demo, cycle through difficulty filters: null -> Easy -> Medium -> Hard -> null
              const difficulties = [null, "Easy", "Medium", "Hard"];
              const currentIndex = selectedFilters.difficulty ? difficulties.indexOf(selectedFilters.difficulty) : 0;
              const nextIndex = (currentIndex + 1) % difficulties.length;
              toggleFilter('difficulty', difficulties[nextIndex]);
            }}
          >
            Difficulty <ChevronDown className="h-4 w-4" />
            {selectedFilters.difficulty && (
              <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">1</span>
            )}
          </Button>
          <div className="ml-auto">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" /> Sort by: Relevance
            </Button>
          </div>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        {getCurrentQuestions().map((question) => (
          <div key={question.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <div 
              className="p-6 cursor-pointer"
              onClick={() => toggleQuestion(question.id)}
            >
              <div className="flex justify-between mb-3">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Asked at {question.company}</span>
                  <span>•</span>
                  <span>{question.timeAgo}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle bookmark logic
                  }}
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
              
              <h3 className="text-xl font-medium mb-3 flex items-start">
                <span>{question.title}</span>
              </h3>
              
              <div className="flex flex-wrap items-center gap-2 mt-3">
                {question.tags.map((tag, idx) => (
                  <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
                <span className={cn("px-3 py-1 rounded-full text-sm", difficultyColors[question.difficulty])}>
                  {question.difficulty}
                </span>
                
                <div className="ml-auto flex items-center gap-4">
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <MessageSquare className="h-4 w-4" /> {question.answers} answers
                  </span>
                  {question.hasBeenAsked && (
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" /> I was asked this
                    </span>
                  )}
                  <span className="text-primary">
                    {expandedQuestion === question.id ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </span>
                </div>
              </div>
            </div>
            
            {expandedQuestion === question.id && (
              <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">Example Answer:</h4>
                  <p className="text-gray-700">
                    {questionAnswers[question.id] || defaultAnswer}
                  </p>
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" /> See all {question.answers} answers
                  </Button>
                  <Button size="sm" className="flex items-center gap-2">
                    + Add your answer
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}

        {filteredQuestions.length === 0 && (
          <div className="text-center py-10 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-xl font-medium mb-2">No questions found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to find questions.</p>
          </div>
        )}
      </div>
      
      {/* Results count and pagination */}
      {filteredQuestions.length > 0 && (
        <div className="mt-8">
          <p className="text-gray-500 mb-4">
            Showing {Math.min(filteredQuestions.length, 1 + (currentPage - 1) * questionsPerPage)} to {Math.min(currentPage * questionsPerPage, filteredQuestions.length)} of {filteredQuestions.length} questions
          </p>
          
          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </Button>
                
                {getPageNumbers().map((page, index) => (
                  page === '...' ? (
                    <span key={`ellipsis-${index}`} className="px-2">...</span>
                  ) : (
                    <Button 
                      key={`page-${page}`}
                      variant={page === currentPage ? "default" : "outline"}
                      size="sm" 
                      className={page === currentPage ? "bg-primary text-white" : ""}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Button>
                  )
                ))}
                
                <Button 
                  variant="outline" 
                  size="sm"
                  disabled={currentPage === totalPages || totalPages === 0}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Add question button */}
      <div className="fixed bottom-8 right-8">
        <Button size="lg" className="rounded-full h-14 w-14 flex items-center justify-center shadow-lg">
          <span className="text-2xl">+</span>
        </Button>
      </div>

      {/* Popular roles sidebar */}
      <div className="mt-10 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Popular interview categories</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="bg-white">
            HR Manager
          </Button>
          <Button variant="outline" size="sm" className="bg-white">
            Recruiter
          </Button>
          <Button variant="outline" size="sm" className="bg-white">
            Behavioral Questions
          </Button>
          <Button variant="outline" size="sm" className="bg-white">
            Salary Negotiations
          </Button>
          <Button variant="outline" size="sm" className="bg-white">
            Career Transitions
          </Button>
          <Button variant="outline" size="sm" className="bg-white">
            Leadership Skills
          </Button>
        </div>
      </div>
    </div> 
    <Footer/>
    </>
  );
}