import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, User, ArrowRight } from "lucide-react";
import csImage from "@/assets/cs-category.jpg";
import businessImage from "@/assets/business-category.jpg";
import engineeringImage from "@/assets/engineering-category.jpg";
import marketingImage from "@/assets/marketing-category.jpg";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: "cs-it",
      title: "Computer Science & IT",
      description: "Software Engineering, Data Structures, Algorithms, System Design",
      image: csImage,
      popular: true,
      questions: "500+ Questions"
    },
    {
      id: "business",
      title: "Business & Management",
      description: "Strategy, Leadership, Operations, Project Management",
      image: businessImage,
      popular: false,
      questions: "300+ Questions"
    },
    {
      id: "engineering",
      title: "Engineering & Technical",
      description: "Mechanical, Electrical, Civil, Chemical Engineering",
      image: engineeringImage,
      popular: false,
      questions: "250+ Questions"
    },
    {
      id: "marketing",
      title: "Marketing & Sales",
      description: "Digital Marketing, Brand Strategy, Sales Techniques",
      image: marketingImage,
      popular: false,
      questions: "200+ Questions"
    }
  ];

  const handleCategorySelect = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MockMaster AI
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Interview Category</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the field you want to practice in. Each category offers tailored questions and industry-specific scenarios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
              onClick={() => handleCategorySelect(category.id)}
            >
              {category.popular && (
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium z-10">
                  Most Popular
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium bg-primary/80 px-2 py-1 rounded">
                    {category.questions}
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button 
                  variant="hero" 
                  className="w-full group-hover:bg-primary-hover transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategorySelect(category.id);
                  }}
                >
                  Start Practice
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-gradient-secondary">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Mock Interviews Completed</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-secondary">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-secondary">
            <div className="text-3xl font-bold text-primary mb-2">1,250+</div>
            <div className="text-muted-foreground">Active Questions</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Categories;