import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Upload, CheckCircle, Clock, Users, Star } from "lucide-react";
import csImage from "@/assets/cs-category.jpg";

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<"resume" | "manual" | null>(null);

  const categoryData = {
    "cs-it": {
      title: "Computer Science & IT",
      description: "Master technical interviews with comprehensive CS fundamentals",
      image: csImage,
      skills: [
        "Data Structures & Algorithms", "System Design", "Object-Oriented Programming",
        "Database Design", "Web Development", "Software Architecture",
        "Machine Learning", "DevOps & Cloud", "Cybersecurity", "Mobile Development"
      ],
      stats: {
        totalQuestions: 500,
        avgDuration: "45 mins",
        difficulty: "Intermediate",
        rating: 4.8
      }
    }
  };

  const currentCategory = categoryData[categoryId as keyof typeof categoryData];

  if (!currentCategory) {
    return <div>Category not found</div>;
  }

  const handleOptionSelect = (option: "resume" | "manual") => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    navigate(`/configure/${categoryId}`, { 
      state: { 
        selectedOption,
        category: currentCategory 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/categories')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Categories
          </Button>
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MockMaster AI
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-secondary">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">{currentCategory.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {currentCategory.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{currentCategory.stats.avgDuration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>{currentCategory.stats.totalQuestions}+ Questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>{currentCategory.stats.rating}/5 Rating</span>
                </div>
              </div>
              <Badge variant="secondary" className="text-sm">
                {currentCategory.stats.difficulty} Level
              </Badge>
            </div>
            <div className="w-full lg:w-80">
              <img 
                src={currentCategory.image} 
                alt={currentCategory.title}
                className="w-full h-64 object-cover rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">How would you like to proceed?</h2>
            <p className="text-lg text-muted-foreground">
              Choose your preferred method to customize your interview experience
            </p>
          </div>

          <Tabs value={selectedOption || "resume"} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="resume">Upload Resume</TabsTrigger>
              <TabsTrigger value="manual">Choose Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="resume" className="space-y-6">
              <Card 
                className={`cursor-pointer transition-all duration-300 hover:shadow-medium ${
                  selectedOption === "resume" ? "ring-2 ring-primary shadow-medium" : ""
                }`}
                onClick={() => handleOptionSelect("resume")}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4">
                    <Upload className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Upload Your Resume</CardTitle>
                  <CardDescription className="text-lg">
                    Let our AI analyze your resume and create personalized interview questions based on your experience and skills
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 mb-4">
                    <p className="text-muted-foreground mb-2">Drop your resume here or click to browse</p>
                    <p className="text-sm text-muted-foreground">Supports PDF, DOC, DOCX files</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>AI-powered skill extraction</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="manual" className="space-y-6">
              <Card 
                className={`cursor-pointer transition-all duration-300 hover:shadow-medium ${
                  selectedOption === "manual" ? "ring-2 ring-primary shadow-medium" : ""
                }`}
                onClick={() => handleOptionSelect("manual")}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Choose Skills Manually</CardTitle>
                  <CardDescription className="text-lg">
                    Select the specific areas you want to be tested on from our comprehensive skill categories
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {currentCategory.skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="p-2 justify-center text-center hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8">
            <Button 
              size="lg" 
              variant="hero" 
              disabled={!selectedOption}
              onClick={handleContinue}
              className="px-12"
            >
              Continue to Configuration
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetail;