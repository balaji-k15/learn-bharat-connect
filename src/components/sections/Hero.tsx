import { Button } from "@/components/ui/button";
import { Play, Users, Star, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section bg-hero-gradient text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full float-animation" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-white rounded-full float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full float-animation" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur">
              <Star className="w-4 h-4 mr-2 text-accent" />
              #1 Online Learning Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Learn Skills That
              <span className="block text-accent">Drive Your Career</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Join thousands of students learning from industry experts. Master in-demand skills 
              with our comprehensive courses designed for real-world success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Start Learning Now
              </Button>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Browse Courses
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">50K+</div>
                <div className="text-sm text-white/80">Students</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">200+</div>
                <div className="text-sm text-white/80">Courses</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/src/assets/hero-learning.jpg"
                alt="Online Learning Platform"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg float-animation">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-success-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Live Classes</div>
                    <div className="text-sm text-muted-foreground">Join interactive sessions</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg float-animation" style={{ animationDelay: '3s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Certificates</div>
                    <div className="text-sm text-muted-foreground">Industry recognized</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;