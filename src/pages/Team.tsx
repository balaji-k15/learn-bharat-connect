import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Twitter, Users } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Chief Executive Officer",
      department: "Leadership",
      experience: "15+ Years",
      education: "Ph.D in Computer Science",
      specialization: "AI & Machine Learning",
      image: teamMember1,
      email: "rajesh@elearning.com",
      linkedin: "linkedin.com/in/rajesh-kumar",
      twitter: "@rajeshkumar",
      bio: "Dr. Rajesh has over 15 years of experience in EdTech and has helped thousands of students achieve their career goals."
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Head of Curriculum",
      department: "Academic",
      experience: "12+ Years", 
      education: "M.Tech in Software Engineering",
      specialization: "Full Stack Development",
      image: teamMember2,
      email: "priya@elearning.com",
      linkedin: "linkedin.com/in/priya-sharma",
      twitter: "@priyasharma",
      bio: "Priya designs industry-relevant curriculum that bridges the gap between academic learning and real-world applications."
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Senior Data Science Instructor",
      department: "Faculty",
      experience: "8+ Years",
      education: "M.S. in Data Science",
      specialization: "Machine Learning & Analytics",
      image: teamMember3,
      email: "amit@elearning.com",
      linkedin: "linkedin.com/in/amit-patel",
      twitter: "@amitpatel",
      bio: "Amit is a passionate educator who makes complex data science concepts easy to understand for students."
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "UI/UX Design Lead",
      department: "Design",
      experience: "6+ Years",
      education: "B.Des in Visual Communication",
      specialization: "Product Design & User Research",
      image: teamMember4,
      email: "sneha@elearning.com",
      linkedin: "linkedin.com/in/sneha-reddy",
      twitter: "@snehareddy",
      bio: "Sneha creates intuitive learning experiences and has worked with top tech companies before joining eLearning."
    },
    {
      id: 5,
      name: "Vikash Gupta",
      role: "JavaScript Expert",
      department: "Faculty",
      experience: "10+ Years",
      education: "B.Tech in Computer Science",
      specialization: "Frontend & Backend Development",
      image: teamMember1,
      email: "vikash@elearning.com",
      linkedin: "linkedin.com/in/vikash-gupta",
      twitter: "@vikashgupta",
      bio: "Vikash is a full-stack developer who has contributed to multiple open-source projects and loves teaching modern JavaScript."
    },
    {
      id: 6,
      name: "Neha Singh",
      role: "Mobile Development Instructor",
      department: "Faculty",
      experience: "7+ Years",
      education: "M.Tech in Mobile Computing",
      specialization: "React Native & Flutter",
      image: teamMember2,
      email: "neha@elearning.com",
      linkedin: "linkedin.com/in/neha-singh",
      twitter: "@nehasingh",
      bio: "Neha has built over 50 mobile apps and now shares her expertise to help students master mobile development."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">
              <Users className="w-4 h-4 mr-2" />
              Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-accent">Expert Team</span>
            </h1>
            <p className="text-lg text-white/90">
              Our dedicated team of industry experts and educators are committed to providing 
              you with the best learning experience and helping you achieve your career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <Twitter className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.department} • {member.experience}</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Education</p>
                      <p className="text-sm">{member.education}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Specialization</p>
                      <Badge variant="outline" className="text-xs">
                        {member.specialization}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Are you passionate about education and technology? We're always looking for 
              talented individuals to join our mission of making quality education accessible to everyone.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-hover">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;