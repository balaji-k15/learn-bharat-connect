import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, Users, Video, MapPin, BookOpen } from "lucide-react";

const Classes = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { value: "all", label: "All Classes" },
    { value: "live", label: "Live Classes" },
    { value: "recorded", label: "Recorded Classes" },
    { value: "workshop", label: "Workshops" },
  ];

  const classes = [
    {
      id: 1,
      title: "Advanced React.js Development",
      instructor: "Vikash Gupta",
      type: "live",
      date: "2024-12-15",
      time: "10:00 AM - 12:00 PM",
      duration: "2 hours",
      students: 45,
      maxStudents: 50,
      level: "Advanced",
      category: "Web Development",
      description: "Deep dive into React hooks, context API, and performance optimization techniques.",
      price: 1999,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Python Data Analysis Masterclass",
      instructor: "Dr. Rajesh Kumar",
      type: "live",
      date: "2024-12-16",
      time: "2:00 PM - 5:00 PM",
      duration: "3 hours",
      students: 38,
      maxStudents: 40,
      level: "Intermediate",
      category: "Data Science",
      description: "Learn pandas, numpy, and matplotlib for comprehensive data analysis.",
      price: 2499,
      status: "upcoming"
    },
    {
      id: 3,
      title: "UI/UX Design Principles Workshop",
      instructor: "Sneha Reddy",
      type: "workshop",
      date: "2024-12-17",
      time: "11:00 AM - 4:00 PM",
      duration: "5 hours",
      students: 25,
      maxStudents: 30,
      level: "Beginner",
      category: "Design",
      description: "Hands-on workshop covering design thinking, user research, and prototyping.",
      price: 3999,
      status: "upcoming"
    },
    {
      id: 4,
      title: "JavaScript ES6+ Fundamentals",
      instructor: "Amit Patel",
      type: "recorded",
      date: "Available Now",
      time: "Self-paced",
      duration: "4 hours",
      students: 150,
      maxStudents: null,
      level: "Beginner",
      category: "Programming",
      description: "Complete guide to modern JavaScript features and best practices.",
      price: 1499,
      status: "available"
    },
    {
      id: 5,
      title: "Mobile App Development with React Native",
      instructor: "Neha Singh",
      type: "live",
      date: "2024-12-20",
      time: "9:00 AM - 1:00 PM",
      duration: "4 hours",
      students: 35,
      maxStudents: 40,
      level: "Intermediate",
      category: "Mobile Development",
      description: "Build cross-platform mobile apps with React Native and Expo.",
      price: 2999,
      status: "upcoming"
    },
    {
      id: 6,
      title: "Digital Marketing Strategy Session",
      instructor: "Priya Sharma",
      type: "live",
      date: "2024-12-18",
      time: "3:00 PM - 6:00 PM",
      duration: "3 hours",
      students: 42,
      maxStudents: 45,
      level: "Intermediate",
      category: "Marketing",
      description: "Learn SEO, social media marketing, and conversion optimization.",
      price: 1899,
      status: "upcoming"
    },
    {
      id: 7,
      title: "Machine Learning Basics",
      instructor: "Dr. Rajesh Kumar",
      type: "recorded",
      date: "Available Now",
      time: "Self-paced",
      duration: "6 hours",
      students: 220,
      maxStudents: null,
      level: "Beginner",
      category: "AI & ML",
      description: "Introduction to machine learning algorithms and practical applications.",
      price: 2199,
      status: "available"
    },
    {
      id: 8,
      title: "Full Stack Web Development Bootcamp",
      instructor: "Vikash Gupta",
      type: "workshop",
      date: "2024-12-22",
      time: "10:00 AM - 6:00 PM",
      duration: "8 hours",
      students: 28,
      maxStudents: 35,
      level: "Intermediate",
      category: "Web Development",
      description: "Comprehensive bootcamp covering frontend and backend development.",
      price: 4999,
      status: "upcoming"
    }
  ];

  const filteredClasses = classes.filter(cls => 
    selectedFilter === "all" || cls.type === selectedFilter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming": return "bg-blue-500/10 text-blue-500";
      case "available": return "bg-green-500/10 text-green-500";
      case "ongoing": return "bg-orange-500/10 text-orange-500";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Intermediate": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Advanced": return "bg-red-500/10 text-red-500 border-red-500/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">
              <BookOpen className="w-4 h-4 mr-2" />
              Live & Recorded Classes
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our <span className="text-accent">Classes</span>
            </h1>
            <p className="text-lg text-white/90">
              Attend live interactive sessions with industry experts or learn at your own pace 
              with our recorded masterclasses and workshops.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={selectedFilter === filter.value ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.value)}
                className="transition-all duration-200"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              {filteredClasses.length} Classes Available
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((classItem) => (
              <Card key={classItem.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className={getLevelColor(classItem.level)}>
                      {classItem.level}
                    </Badge>
                    <Badge className={getStatusColor(classItem.status)}>
                      {classItem.status}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {classItem.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">by {classItem.instructor}</p>
                  
                  <Badge variant="outline" className="text-xs w-fit">
                    {classItem.category}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {classItem.description}
                  </p>

                  {/* Class Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{classItem.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{classItem.time} • {classItem.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>
                        {classItem.students} enrolled
                        {classItem.maxStudents && ` • ${classItem.maxStudents} max`}
                      </span>
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-primary">₹{classItem.price}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      {classItem.type === "recorded" && (
                        <Button size="sm" variant="outline">
                          <Video className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                      )}
                      <Button size="sm" className="bg-primary hover:bg-primary-hover">
                        {classItem.type === "recorded" ? "Access Now" : "Book Seat"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule Info */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Class Schedule Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Live Classes</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive sessions with real-time Q&A and hands-on exercises
                </p>
              </Card>
              
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Flexible Timing</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple time slots available to fit your schedule
                </p>
              </Card>
              
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Small Batches</h3>
                <p className="text-sm text-muted-foreground">
                  Limited seats to ensure personalized attention
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Classes;