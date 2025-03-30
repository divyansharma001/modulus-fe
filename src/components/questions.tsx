import React, { useState } from 'react';
import { Search, Code, ChevronDown, ChevronUp, Bookmark, MessageSquare, Clock, Award, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Sample data for demonstration
const questionsData = [
  {
    id: 1,
    title: "What is the difference between a case interview and a behavioral interview?",
    company: "McKinsey, BCG, Bain",
    difficulty: "Medium",
    tags: ["Consulting", "Case Interview"],
    answers: 14,
    timeAgo: "2 months ago",
    hasBeenAsked: true
  },
  {
    id: 2,
    title: "Walk me through a time when you had to influence a team without authority",
    company: "Goldman Sachs, JPMorgan, Morgan Stanley",
    difficulty: "Hard",
    tags: ["Banking", "Behavioral"],
    answers: 23,
    timeAgo: "1 month ago",
    hasBeenAsked: true
  },
  {
    id: 3,
    title: "How would you price a new premium credit card for millennials?",
    company: "American Express, Capital One",
    difficulty: "Hard",
    tags: ["Banking", "Case Interview"],
    answers: 18,
    timeAgo: "3 months ago",
    hasBeenAsked: false
  },
  {
    id: 4,
    title: "Explain a marketing campaign you developed and its results",
    company: "P&G, Unilever, L'Oréal",
    difficulty: "Medium",
    tags: ["Marketing", "Behavioral"],
    answers: 12,
    timeAgo: "2 months ago",
    hasBeenAsked: true
  }
];

const difficultyColors = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800"
};

export default function InterviewQuestionsComponent() {
  const [selectedFilters, setSelectedFilters] = useState({
    role: null,
    company: null,
    category: null,
    difficulty: null
  });
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  
  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Top Interview Questions</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Review this list of verified interview questions and answers from top consulting, banking, and marketing firms.
        </p>
      </div>

      {/* Search and filters */}
      <div className="mb-8">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for questions, companies..."
            className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            Role <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Company <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-primary/10 text-primary border-primary/20">
            Category <ChevronDown className="h-4 w-4" />
            <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">1</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Difficulty <ChevronDown className="h-4 w-4" />
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
        {questionsData.map((question) => (
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
                    This is a sample answer for the question. In a real implementation, this would contain the actual answer content from your database. The answer would provide guidance on how to approach this specific interview question, with practical examples and structured frameworks where applicable.
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
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-white">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <span>...</span>
          <Button variant="outline" size="sm">
            10
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
      
      {/* Add question button */}
      <div className="fixed bottom-8 right-8">
        <Button size="lg" className="rounded-full h-14 w-14 flex items-center justify-center shadow-lg">
          <span className="text-2xl">+</span>
        </Button>
      </div>
    </div>
  );
}