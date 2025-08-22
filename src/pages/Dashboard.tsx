import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Trophy, 
  Target, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle,
  Star,
  BarChart3,
  Calendar
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock data - in real app this would come from API
  const interviewResults = {
    overallScore: 85,
    duration: "42 minutes",
    category: "Computer Science & IT",
    difficulty: "Intermediate",
    completedQuestions: 12,
    totalQuestions: 15,
    strengths: [
      "Data Structures & Algorithms",
      "Problem Solving Approach",
      "Code Optimization"
    ],
    improvements: [
      "System Design Concepts",
      "Communication Clarity",
      "Time Management"
    ],
    detailedFeedback: {
      technical: 88,
      communication: 78,
      problemSolving: 92,
      codeQuality: 85
    },
    recentInterviews: [
      { date: "2024-01-15", score: 85, category: "CS/IT", duration: "42 min" },
      { date: "2024-01-12", score: 78, category: "CS/IT", duration: "38 min" },
      { date: "2024-01-08", score: 82, category: "System Design", duration: "45 min" },
    ]
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 90) return { label: "Excellent", variant: "default" as const };
    if (score >= 80) return { label: "Good", variant: "secondary" as const };
    if (score >= 70) return { label: "Average", variant: "outline" as const };
    return { label: "Needs Improvement", variant: "destructive" as const };
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

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Interview Report & Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Your comprehensive performance analysis and progress tracking
          </p>
        </div>

        {/* Overall Score */}
        <Card className="mb-8 bg-gradient-secondary">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Overall Interview Score</CardTitle>
            <CardDescription>Based on your latest mock interview performance</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className={`text-6xl font-bold ${getScoreColor(interviewResults.overallScore)}`}>
              {interviewResults.overallScore}%
            </div>
            <Badge {...getScoreBadge(interviewResults.overallScore)} className="text-lg px-4 py-2">
              {getScoreBadge(interviewResults.overallScore).label}
            </Badge>
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{interviewResults.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>{interviewResults.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                <span>{interviewResults.difficulty}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Detailed Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Performance Breakdown
              </CardTitle>
              <CardDescription>
                Detailed analysis of different skill areas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(interviewResults.detailedFeedback).map(([skill, score]) => (
                <div key={skill} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium capitalize">
                      {skill.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className={`font-bold ${getScoreColor(score)}`}>
                      {score}%
                    </span>
                  </div>
                  <Progress value={score} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Questions Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Questions Completed
              </CardTitle>
              <CardDescription>
                Your progress through the interview session
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {interviewResults.completedQuestions}/{interviewResults.totalQuestions}
                </div>
                <p className="text-muted-foreground">Questions Answered</p>
              </div>
              <Progress 
                value={(interviewResults.completedQuestions / interviewResults.totalQuestions) * 100} 
                className="h-3" 
              />
              <div className="text-center text-sm text-muted-foreground">
                {Math.round((interviewResults.completedQuestions / interviewResults.totalQuestions) * 100)}% Complete
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Strengths */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                Your Strengths
              </CardTitle>
              <CardDescription>
                Areas where you performed exceptionally well
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {interviewResults.strengths.map((strength, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Star className="h-5 w-5 text-green-600" />
                    <span className="font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Areas for Improvement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-600">
                <AlertCircle className="h-5 w-5" />
                Areas for Improvement
              </CardTitle>
              <CardDescription>
                Focus on these areas to boost your performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {interviewResults.improvements.map((improvement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-orange-600" />
                    <span className="font-medium">{improvement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Interviews */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Recent Interview History
            </CardTitle>
            <CardDescription>
              Track your progress over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {interviewResults.recentInterviews.map((interview, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                      {interview.date}
                    </div>
                    <Badge variant="outline">{interview.category}</Badge>
                    <span className="text-sm text-muted-foreground">{interview.duration}</span>
                  </div>
                  <div className={`text-lg font-bold ${getScoreColor(interview.score)}`}>
                    {interview.score}%
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="hero" onClick={() => navigate('/categories')}>
            Take Another Interview
          </Button>
          <Button size="lg" variant="outline">
            Download Detailed Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;