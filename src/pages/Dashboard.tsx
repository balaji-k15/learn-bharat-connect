import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp,
  PlayCircle,
  CheckCircle,
  Star,
  Calendar,
  Download,
  User,
  Settings,
  CreditCard,
  Bell
} from "lucide-react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    {
      title: "Courses Enrolled",
      value: "8",
      icon: <BookOpen className="w-5 h-5" />,
      color: "text-primary"
    },
    {
      title: "Hours Learned",
      value: "124",
      icon: <Clock className="w-5 h-5" />,
      color: "text-secondary"
    },
    {
      title: "Certificates Earned",
      value: "3",
      icon: <Award className="w-5 h-5" />,
      color: "text-accent"
    },
    {
      title: "Learning Streak",
      value: "15 days",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "text-success"
    }
  ];

  const enrolledCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Rahul Sharma",
      progress: 75,
      lastAccessed: "2 hours ago",
      nextLesson: "React Hooks Advanced",
      duration: "40 hours",
      completed: false
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Priya Patel",
      progress: 100,
      lastAccessed: "1 day ago", 
      nextLesson: "Course Completed",
      duration: "35 hours",
      completed: true
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      instructor: "Amit Kumar",
      progress: 45,
      lastAccessed: "3 days ago",
      nextLesson: "Social Media Strategy",
      duration: "25 hours", 
      completed: false
    },
    {
      id: 4,
      title: "UI/UX Design Complete Course",
      instructor: "Neha Singh",
      progress: 60,
      lastAccessed: "1 day ago",
      nextLesson: "Prototyping in Figma",
      duration: "28 hours",
      completed: false
    }
  ];

  const certificates = [
    {
      id: 1,
      course: "Python for Data Science",
      issueDate: "2024-01-15",
      instructor: "Priya Patel",
      grade: "A+",
      credentialId: "EDU-PY-2024-001"
    },
    {
      id: 2,
      course: "JavaScript Fundamentals",
      issueDate: "2023-12-10",
      instructor: "Vikash Gupta", 
      grade: "A",
      credentialId: "EDU-JS-2023-052"
    },
    {
      id: 3,
      course: "Database Design Principles",
      issueDate: "2023-11-20",
      instructor: "Rohit Malhotra",
      grade: "A+",
      credentialId: "EDU-DB-2023-028"
    }
  ];

  const recentActivity = [
    {
      type: "completed",
      message: "Completed lesson: Advanced Python Functions",
      course: "Python for Data Science",
      time: "2 hours ago"
    },
    {
      type: "started",
      message: "Started new course: Digital Marketing Mastery", 
      course: "Digital Marketing",
      time: "1 day ago"
    },
    {
      type: "certificate",
      message: "Earned certificate for Python for Data Science",
      course: "Python for Data Science",
      time: "3 days ago"
    },
    {
      type: "milestone",
      message: "Achieved 15-day learning streak!",
      course: "Overall Progress",
      time: "5 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Dashboard Header */}
      <section className="bg-hero-gradient text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <Badge className="mb-3 bg-white/10 text-white hover:bg-white/20">
                Student Dashboard
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, <span className="text-accent">Arjun!</span>
              </h1>
              <p className="text-white/90">Continue your learning journey and achieve your goals</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="courses" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-[500px]">
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            {/* My Courses Tab */}
            <TabsContent value="courses" className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">My Courses</h2>
                  <p className="text-muted-foreground">Continue where you left off</p>
                </div>
                <div className="w-full sm:w-auto">
                  <Input
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full sm:w-[300px]"
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-hover transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">{course.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                        </div>
                        {course.completed && (
                          <Badge className="bg-success hover:bg-success text-success-foreground">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Completed
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <span>Last: {course.lastAccessed}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Next: {course.nextLesson}</p>
                        </div>
                        <Button size="sm" className="bg-primary hover:bg-primary-hover">
                          {course.completed ? (
                            <>
                              <Award className="w-4 h-4 mr-1" />
                              View Certificate
                            </>
                          ) : (
                            <>
                              <PlayCircle className="w-4 h-4 mr-1" />
                              Continue
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Certificates Tab */}
            <TabsContent value="certificates" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">My Certificates</h2>
                <p className="text-muted-foreground">Download and share your achievements</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                  <Card key={cert.id} className="hover:shadow-hover transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{cert.course}</CardTitle>
                          <p className="text-sm text-muted-foreground">by {cert.instructor}</p>
                        </div>
                        <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
                          Grade: {cert.grade}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>Issued: {new Date(cert.issueDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-accent" />
                          <span>ID: {cert.credentialId}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button size="sm" className="flex-1 bg-primary hover:bg-primary-hover">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Activity Tab */}
            <TabsContent value="activity" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Recent Activity</h2>
                <p className="text-muted-foreground">Track your learning progress and milestones</p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 pb-4 border-b border-border last:border-0 last:pb-0">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.type === 'completed' ? 'bg-success/10 text-success' :
                          activity.type === 'started' ? 'bg-primary/10 text-primary' :
                          activity.type === 'certificate' ? 'bg-accent/10 text-accent' :
                          'bg-secondary/10 text-secondary'
                        }`}>
                          {activity.type === 'completed' && <CheckCircle className="w-4 h-4" />}
                          {activity.type === 'started' && <PlayCircle className="w-4 h-4" />}
                          {activity.type === 'certificate' && <Award className="w-4 h-4" />}
                          {activity.type === 'milestone' && <TrendingUp className="w-4 h-4" />}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.message}</p>
                          <p className="text-sm text-muted-foreground">{activity.course}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Profile Settings</h2>
                <p className="text-muted-foreground">Manage your account and preferences</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      <Input defaultValue="Arjun Patel" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <Input defaultValue="arjun.patel@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <Input defaultValue="+91 98765 43210" />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary-hover">
                      Update Profile
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Account Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Course updates and announcements</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Bell className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Payment Methods</p>
                        <p className="text-sm text-muted-foreground">Manage saved payment methods</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <CreditCard className="w-4 h-4" />
                      </Button>
                    </div>

                    <Button variant="outline" className="w-full">
                      Change Password
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Dashboard;