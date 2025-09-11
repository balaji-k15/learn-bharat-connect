import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CourseCard from "@/components/cards/CourseCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Headphones
} from "lucide-react";

const Home = () => {
  const featuredCourses = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp 2024",
      description: "Learn HTML, CSS, JavaScript, React, Node.js and become a full-stack developer",
      instructor: "Rahul Sharma",
      duration: "40 hours",
      students: 12500,
      rating: 4.8,
      price: 2999,
      originalPrice: 5999,
      image: "/api/placeholder/400/300",
      category: "Web Development",
      level: "Beginner"
    },
    {
      id: "2", 
      title: "Python for Data Science & Machine Learning",
      description: "Master Python programming and build real-world data science projects",
      instructor: "Priya Patel",
      duration: "35 hours",
      students: 8900,
      rating: 4.9,
      price: 3499,
      originalPrice: 6999,
      image: "/api/placeholder/400/300",
      category: "Data Science",
      level: "Intermediate"
    },
    {
      id: "3",
      title: "Digital Marketing Mastery Course",
      description: "Learn SEO, Social Media, Google Ads, and grow your business online",
      instructor: "Amit Kumar",
      duration: "25 hours", 
      students: 15600,
      rating: 4.7,
      price: 1999,
      originalPrice: 3999,
      image: "/api/placeholder/400/300",
      category: "Marketing",
      level: "Beginner"
    }
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Learn Anywhere",
      description: "Access courses from any device, anywhere in the world"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: <Trophy className="w-8 h-8 text-accent" />,
      title: "Certificates",
      description: "Get industry-recognized certificates upon completion"
    },
    {
      icon: <Headphones className="w-8 h-8 text-success" />,
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Students Enrolled" },
    { number: "200+", label: "Expert Courses" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learning Made <span className="text-primary">Simple</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to succeed in your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-card group-hover:shadow-hover transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
                Featured Courses
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Popular <span className="text-primary">Courses</span>
              </h2>
              <p className="text-muted-foreground">
                Join thousands of students in our most popular courses
              </p>
            </div>
            <Link to="/courses">
              <Button variant="outline" className="hidden md:flex">
                View All Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          <div className="text-center md:hidden">
            <Link to="/courses">
              <Button variant="outline">
                View All Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Students Worldwide
            </h2>
            <p className="text-primary-foreground/90 text-lg">
              Join our growing community of learners achieving their goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-accent">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card-gradient">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-6 bg-success/10 text-success hover:bg-success/20">
              Get Started Today
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-primary">Learning Journey?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of students already learning with our platform. 
              Get unlimited access to all courses and start building your future today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning Now
              </Button>
              <Button size="lg" variant="outline">
                View Pricing Plans
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>30-day money back</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-success" />
                <span>Secure payments</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-success" />
                <span>4.8/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;