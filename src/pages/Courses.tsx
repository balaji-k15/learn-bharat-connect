import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/cards/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedSort, setSelectedSort] = useState("popular");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "web-development", label: "Web Development" },
    { value: "data-science", label: "Data Science" },
    { value: "mobile-development", label: "Mobile Development" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
    { value: "business", label: "Business" },
    { value: "photography", label: "Photography" },
  ];

  const levels = [
    { value: "all", label: "All Levels" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ];

  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "newest", label: "Newest" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
  ];

  const courses = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp 2024",
      description: "Learn HTML, CSS, JavaScript, React, Node.js and become a full-stack developer. Build real-world projects and get job-ready skills.",
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
      description: "Master Python programming, pandas, numpy, scikit-learn and build real-world data science projects from scratch.",
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
      description: "Learn SEO, Social Media Marketing, Google Ads, Email Marketing and grow your business online effectively.",
      instructor: "Amit Kumar",
      duration: "25 hours",
      students: 15600,
      rating: 4.7,
      price: 1999,
      originalPrice: 3999,
      image: "/api/placeholder/400/300",
      category: "Marketing",
      level: "Beginner"
    },
    {
      id: "4",
      title: "React Native Mobile App Development",
      description: "Build iOS and Android apps using React Native. Learn navigation, state management, and publish to app stores.",
      instructor: "Neha Singh",
      duration: "30 hours",
      students: 6800,
      rating: 4.6,
      price: 3999,
      originalPrice: 7999,
      image: "/api/placeholder/400/300",
      category: "Mobile Development",
      level: "Intermediate"
    },
    {
      id: "5",
      title: "UI/UX Design Complete Course",
      description: "Learn user interface and user experience design. Master Figma, create prototypes, and build stunning designs.",
      instructor: "Arjun Mehta",
      duration: "28 hours",
      students: 9200,
      rating: 4.8,
      price: 2499,
      originalPrice: 4999,
      image: "/api/placeholder/400/300",
      category: "Design",
      level: "Beginner"
    },
    {
      id: "6",
      title: "Advanced JavaScript & ES6+",
      description: "Master modern JavaScript concepts, async programming, closures, and advanced patterns for professional development.",
      instructor: "Vikash Gupta",
      duration: "22 hours",
      students: 7400,
      rating: 4.9,
      price: 2799,
      originalPrice: 5599,
      image: "/api/placeholder/400/300",
      category: "Web Development",
      level: "Advanced"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || 
                           course.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    
    const matchesLevel = selectedLevel === "all" || 
                        course.level.toLowerCase() === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">
              Course Library
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our <span className="text-accent">Courses</span>
            </h1>
            <p className="text-lg text-white/90">
              Discover skills that will advance your career. Learn from industry experts 
              with hands-on projects and real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSort} onValueChange={setSelectedSort}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedCategory !== "all" && (
              <Badge variant="outline" className="cursor-pointer" onClick={() => setSelectedCategory("all")}>
                {categories.find(c => c.value === selectedCategory)?.label}
                <span className="ml-1">×</span>
              </Badge>
            )}
            {selectedLevel !== "all" && (
              <Badge variant="outline" className="cursor-pointer" onClick={() => setSelectedLevel("all")}>
                {levels.find(l => l.value === selectedLevel)?.label}
                <span className="ml-1">×</span>
              </Badge>
            )}
            {searchQuery && (
              <Badge variant="outline" className="cursor-pointer" onClick={() => setSearchQuery("")}>
                "{searchQuery}"
                <span className="ml-1">×</span>
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {filteredCourses.length} Courses Found
              </h2>
              <p className="text-muted-foreground">
                {selectedCategory !== "all" && `in ${categories.find(c => c.value === selectedCategory)?.label}`}
                {selectedLevel !== "all" && ` • ${levels.find(l => l.value === selectedLevel)?.label} level`}
              </p>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or browse all courses
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Courses;