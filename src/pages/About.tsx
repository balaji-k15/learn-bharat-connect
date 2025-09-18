import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  CheckCircle,
  BookOpen,
  Globe,
  Lightbulb
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "50,000+", label: "Happy Students", icon: <Users className="w-6 h-6" /> },
    { number: "200+", label: "Expert Courses", icon: <BookOpen className="w-6 h-6" /> },
    { number: "50+", label: "Countries", icon: <Globe className="w-6 h-6" /> },
    { number: "98%", label: "Success Rate", icon: <Award className="w-6 h-6" /> },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Quality Education",
      description: "We believe in providing high-quality, practical education that prepares students for real-world challenges."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Student-Centered",
      description: "Every decision we make is focused on creating the best possible learning experience for our students."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "Innovation",
      description: "We continuously innovate our teaching methods and technology to stay ahead of industry trends."
    },
    {
      icon: <Globe className="w-8 h-8 text-success" />,
      title: "Accessibility",
      description: "Making quality education accessible to everyone, regardless of their location or background."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "/src/assets/team-member-1.jpg",
      description: "Former Google engineer with 15+ years in tech education"
    },
    {
      name: "Priya Sharma", 
      role: "Head of Curriculum",
      image: "/src/assets/team-member-2.jpg",
      description: "Educational psychologist specializing in online learning"
    },
    {
      name: "Amit Patel",
      role: "CTO",
      image: "/src/assets/team-member-3.jpg", 
      description: "Tech entrepreneur with expertise in scalable platforms"
    },
    {
      name: "Neha Singh",
      role: "Head of Student Success",
      image: "/src/assets/team-member-4.jpg",
      description: "Dedicated to ensuring every student achieves their goals"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Learners <span className="text-accent">Worldwide</span>
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
              Founded in 2020, eLearning was created with a simple mission: to make quality 
              education accessible to everyone, everywhere. As we enter 2025, we continue to evolve
              and believe that learning should be engaging, practical, and lead to real career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforming Lives Through <span className="text-primary">Education</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're on a mission to democratize education and make it possible for anyone, 
                anywhere to learn new skills and advance their career. Our platform combines 
                cutting-edge technology with expert instruction to create learning experiences 
                that are both effective and enjoyable.
              </p>
              
              <div className="space-y-4">
                {[
                  "Industry-relevant curriculum designed by experts",
                  "Hands-on projects and real-world applications", 
                  "Personalized learning paths for every student",
                  "Career support and job placement assistance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/src/assets/team-collaboration.jpg"
                alt="Students learning online"
                className="w-full h-auto rounded-2xl shadow-card"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent p-4 rounded-xl text-accent-foreground shadow-lg">
                <div className="text-2xl font-bold">4.8/5</div>
                <div className="text-sm">Student Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What <span className="text-primary">Drives</span> Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, from curriculum design to student support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-hover transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-card group-hover:shadow-hover transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
              Meet the Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The People Behind <span className="text-primary">eLearning</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of educators and technologists working to revolutionize online learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-hover transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our <span className="text-accent">Learning Community?</span>
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start your journey with us today and unlock your potential with our expertly crafted courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Courses
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;