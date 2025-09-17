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
import courseWebDev from "@/assets/course-web-dev.jpg";
import courseDataScience from "@/assets/course-data-science.jpg";
import courseMarketing from "@/assets/course-marketing.jpg";
import courseUIDesign from "@/assets/course-ui-design.jpg";
import courseJavaScript from "@/assets/course-javascript.jpg";
import coursePython from "@/assets/course-python.jpg";

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
      title: "Complete Web Development Bootcamp 2025",
      description: "Learn HTML, CSS, JavaScript, React, Node.js and become a full-stack developer. Build real-world projects and get job-ready skills.",
      instructor: "Vikash Gupta",
      duration: "40 hours",
      students: 12500,
      rating: 4.8,
      price: 2999,
      originalPrice: 5999,
      image: courseWebDev,
      category: "Web Development",
      level: "Beginner",
      videoUrl: "https://www.youtube.com/embed/HcOc7P5BMi4"
    },
    {
      id: "2",
      title: "Python for Data Science & Machine Learning",
      description: "Master Python programming, pandas, numpy, scikit-learn and build real-world data science projects from scratch.",
      instructor: "Dr. Rajesh Kumar",
      duration: "35 hours",
      students: 8900,
      rating: 4.9,
      price: 3499,
      originalPrice: 6999,
      image: courseDataScience,
      category: "Data Science",
      level: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw"
    },
    {
      id: "3",
      title: "Digital Marketing Mastery Course",
      description: "Learn SEO, Social Media Marketing, Google Ads, Email Marketing and grow your business online effectively.",
      instructor: "Priya Sharma",
      duration: "25 hours",
      students: 15600,
      rating: 4.7,
      price: 1999,
      originalPrice: 3999,
      image: courseMarketing,
      category: "Marketing",
      level: "Beginner",
      videoUrl: "https://www.youtube.com/embed/YQHsXMglC9A"
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
      image: courseUIDesign,
      category: "Mobile Development",
      level: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/0-S5a0eXPoc"
    },
    {
      id: "5",
      title: "UI/UX Design Complete Course",
      description: "Learn user interface and user experience design. Master Figma, create prototypes, and build stunning designs.",
      instructor: "Sneha Reddy",
      duration: "28 hours",
      students: 9200,
      rating: 4.8,
      price: 2499,
      originalPrice: 4999,
      image: courseUIDesign,
      category: "Design",
      level: "Beginner",
      videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU"
    },
    {
      id: "6",
      title: "Advanced JavaScript & ES6+",
      description: "Master modern JavaScript concepts, async programming, closures, and advanced patterns for professional development.",
      instructor: "Amit Patel",
      duration: "22 hours",
      students: 7400,
      rating: 4.9,
      price: 2799,
      originalPrice: 5599,
      image: courseJavaScript,
      category: "Web Development",
      level: "Advanced",
      videoUrl: "https://www.youtube.com/embed/WKFIDZeq9mw"
    },
    {
      id: "7",
      title: "Python Programming Fundamentals",
      description: "Complete Python course from basics to advanced concepts. Perfect for beginners starting their programming journey.",
      instructor: "Dr. Rajesh Kumar",
      duration: "32 hours",
      students: 11200,
      rating: 4.7,
      price: 2199,
      originalPrice: 4399,
      image: coursePython,
      category: "Programming",
      level: "Beginner",
      videoUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc"
    },
    {
      id: "8",
      title: "Full Stack MERN Development",
      description: "Build complete web applications using MongoDB, Express.js, React, and Node.js. Deploy to production.",
      instructor: "Vikash Gupta",
      duration: "45 hours",
      students: 5600,
      rating: 4.8,
      price: 4999,
      originalPrice: 9999,
      image: courseWebDev,
      category: "Web Development",
      level: "Advanced",
      videoUrl: "https://www.youtube.com/embed/7CqJlxBYj-M"
    },
    {
      id: "9",
      title: "Machine Learning with Python",
      description: "Deep dive into machine learning algorithms, neural networks, and AI applications using Python and TensorFlow.",
      instructor: "Dr. Rajesh Kumar",
      duration: "38 hours",
      students: 4200,
      rating: 4.9,
      price: 4499,
      originalPrice: 8999,
      image: courseDataScience,
      category: "Data Science",
      level: "Advanced",
      videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ"
    },
    {
      id: "10",
      title: "WordPress Development Masterclass",
      description: "Create custom WordPress themes and plugins. Learn PHP, MySQL, and advanced WordPress development techniques.",
      instructor: "Amit Patel",
      duration: "26 hours",
      students: 8700,
      rating: 4.6,
      price: 2299,
      originalPrice: 4599,
      image: courseWebDev,
      category: "Web Development",
      level: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/O79pJ7qXwoE"
    },
    {
      id: "11",
      title: "Social Media Marketing Strategy",
      description: "Master Facebook, Instagram, Twitter, and LinkedIn marketing. Create viral content and grow your audience.",
      instructor: "Priya Sharma",
      duration: "20 hours",
      students: 9800,
      rating: 4.5,
      price: 1799,
      originalPrice: 3599,
      image: courseMarketing,
      category: "Marketing",
      level: "Beginner",
      videoUrl: "https://www.youtube.com/embed/xVVEL0f_6QI"
    },
    {
      id: "12",
      title: "Flutter Mobile App Development",
      description: "Build beautiful native apps for iOS and Android using Flutter and Dart. Deploy to app stores successfully.",
      instructor: "Neha Singh",
      duration: "34 hours",
      students: 3900,
      rating: 4.7,
      price: 3799,
      originalPrice: 7599,
      image: courseUIDesign,
      category: "Mobile Development",
      level: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/1gDhl4leEzA"
    },
    {
      id: "13",
      title: "Graphic Design with Adobe Suite",
      description: "Master Photoshop, Illustrator, and InDesign. Create professional logos, posters, and brand identities.",
      instructor: "Sneha Reddy",
      duration: "24 hours",
      students: 6500,
      rating: 4.6,
      price: 2199,
      originalPrice: 4399,
      image: courseUIDesign,
      category: "Design",
      level: "Beginner",
      videoUrl: "https://www.youtube.com/embed/MpigBU4Ek5E"
    },
    {
      id: "14",
      title: "DevOps and Cloud Computing",
      description: "Learn Docker, Kubernetes, AWS, CI/CD pipelines, and modern deployment strategies for scalable applications.",
      instructor: "Vikash Gupta",
      duration: "36 hours",
      students: 4100,
      rating: 4.8,
      price: 4299,
      originalPrice: 8599,
      image: courseWebDev,
      category: "Web Development",
      level: "Advanced",
      videoUrl: "https://www.youtube.com/embed/hQcFE0RD0cQ"
    },
    {
      id: "15",
      title: "Blockchain & Cryptocurrency Development",
      description: "Build decentralized applications, smart contracts, and understand blockchain technology from ground up.",
      instructor: "Dr. Rajesh Kumar",
      duration: "42 hours",
      students: 2800,
      rating: 4.9,
      price: 5499,
      originalPrice: 10999,
      image: courseDataScience,
      category: "Blockchain",
      level: "Advanced",
      videoUrl: "https://www.youtube.com/embed/M576WGiDBdQ"
    },
    {
      id: "16",
      title: "Content Marketing & Copywriting",
      description: "Write compelling copy that converts. Master email marketing, blog writing, and content strategy.",
      instructor: "Priya Sharma",
      duration: "18 hours",
      students: 7200,
      rating: 4.4,
      price: 1599,
      originalPrice: 3199,
      image: courseMarketing,
      category: "Marketing",
      level: "Beginner",
      videoUrl: "https://www.youtube.com/embed/S0kQpV-jgQU"
    },
    {
      id: "17",
      title: "iOS App Development with Swift",
      description: "Create professional iOS apps using Swift and Xcode. Publish to the App Store and monetize your apps.",
      instructor: "Neha Singh",
      duration: "40 hours",
      students: 3200,
      rating: 4.7,
      price: 4199,
      originalPrice: 8399,
      image: courseUIDesign,
      category: "Mobile Development",
      level: "Advanced",
      videoUrl: "https://www.youtube.com/embed/comQ1-x2a1Q"
    },
    {
      id: "18",
      title: "Cybersecurity Fundamentals",
      description: "Learn ethical hacking, network security, penetration testing, and protect systems from cyber threats.",
      instructor: "Amit Patel",
      duration: "30 hours",
      students: 5400,
      rating: 4.8,
      price: 3299,
      originalPrice: 6599,
      image: coursePython,
      category: "Cybersecurity",
      level: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/U_P23SqJaDc"
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