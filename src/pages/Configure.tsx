import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Clock, Target, BookOpen, Zap } from "lucide-react";

const Configure = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedOption, category } = location.state || {};

  const [config, setConfig] = useState({
    difficulty: "intermediate",
    type: "technical",
    duration: [30],
    topics: [] as string[],
  });

  const difficulties = [
    { id: "beginner", label: "Beginner", description: "Basic concepts and fundamentals", icon: <BookOpen className="h-5 w-5" /> },
    { id: "intermediate", label: "Intermediate", description: "Industry-standard questions", icon: <Target className="h-5 w-5" /> },
    { id: "advanced", label: "Advanced", description: "Complex scenarios and system design", icon: <Zap className="h-5 w-5" /> },
  ];

  const interviewTypes = [
    { id: "technical", label: "Technical Interview", description: "Coding problems and technical concepts" },
    { id: "behavioral", label: "Behavioral Interview", description: "Soft skills and past experiences" },
    { id: "system-design", label: "System Design", description: "Architecture and scalability questions" },
    { id: "mixed", label: "Mixed Interview", description: "Combination of all interview types" },
  ];

  const topicOptions = [
    "Data Structures", "Algorithms", "Object-Oriented Programming", "Database Design",
    "System Design", "Web Development", "Machine Learning", "DevOps", "Cybersecurity",
    "Mobile Development", "Software Architecture", "API Design"
  ];

  const handleTopicToggle = (topic: string) => {
    setConfig(prev => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter(t => t !== topic)
        : [...prev.topics, topic]
    }));
  };

  const handleStartInterview = () => {
    navigate(`/interview/${categoryId}`, {
      state: {
        config,
        selectedOption,
        category
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate(`/category/${categoryId}`)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MockMaster AI
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Configure Your Interview</h1>
          <p className="text-xl text-muted-foreground">
            Customize your interview experience to match your preparation needs
          </p>
        </div>

        <div className="space-y-8">
          {/* Difficulty Level */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Difficulty Level
              </CardTitle>
              <CardDescription>
                Choose the complexity level that matches your experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {difficulties.map((diff) => (
                  <Card
                    key={diff.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-medium ${
                      config.difficulty === diff.id ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setConfig(prev => ({ ...prev, difficulty: diff.id }))}
                  >
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white mb-2">
                        {diff.icon}
                      </div>
                      <CardTitle className="text-lg">{diff.label}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <CardDescription>{diff.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interview Type */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Interview Type
              </CardTitle>
              <CardDescription>
                Select the type of interview you want to practice
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {interviewTypes.map((type) => (
                  <Card
                    key={type.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-medium ${
                      config.type === type.id ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setConfig(prev => ({ ...prev, type: type.id }))}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{type.label}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Duration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Interview Duration
              </CardTitle>
              <CardDescription>
                Set the length of your mock interview session
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="px-4">
                <Slider
                  value={config.duration}
                  onValueChange={(value) => setConfig(prev => ({ ...prev, duration: value }))}
                  max={120}
                  min={15}
                  step={15}
                  className="w-full"
                />
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-primary">{config.duration[0]} minutes</span>
                <p className="text-sm text-muted-foreground mt-1">
                  {config.duration[0] <= 30 ? "Quick practice session" : 
                   config.duration[0] <= 60 ? "Standard interview length" : 
                   "Extended deep-dive session"}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Topics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Focus Topics
              </CardTitle>
              <CardDescription>
                Select specific topics you want to focus on (optional)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {topicOptions.map((topic) => (
                  <Badge
                    key={topic}
                    variant={config.topics.includes(topic) ? "default" : "outline"}
                    className="p-3 justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105"
                    onClick={() => handleTopicToggle(topic)}
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
              {config.topics.length === 0 && (
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  No topics selected - all topics will be included
                </p>
              )}
            </CardContent>
          </Card>

          {/* Start Button */}
          <div className="text-center pt-8">
            <Button 
              size="lg" 
              variant="hero" 
              onClick={handleStartInterview}
              className="px-12 text-lg"
            >
              Start Mock Interview
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Your personalized interview will begin immediately after clicking start
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configure;