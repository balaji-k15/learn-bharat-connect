import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, Users, Star, Play } from "lucide-react";
import VideoModal from "@/components/modals/VideoModal";
import PaymentModal from "@/components/modals/PaymentModal";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  level: string;
  videoUrl?: string;
}

const CourseCard = ({ 
  id,
  title, 
  description, 
  instructor, 
  duration, 
  students, 
  rating, 
  price, 
  originalPrice, 
  image, 
  category,
  level,
  videoUrl 
}: CourseCardProps) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handlePreview = () => {
    setIsVideoModalOpen(true);
  };

  const handleEnrollNow = () => {
    setIsPaymentModalOpen(true);
  };

  const handleStartLearning = () => {
    // This would navigate to the course content page in a real app
    console.log("Starting learning for course:", title);
  };
  return (
    <Card className="group course-card overflow-hidden">
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Category Badge */}
        <Badge className="absolute top-3 left-3 bg-accent hover:bg-accent text-accent-foreground">
          {category}
        </Badge>
        
        {/* Preview Button */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="sm" className="bg-white hover:bg-white/90 text-foreground" onClick={handlePreview}>
            <Play className="w-4 h-4 mr-2" />
            Preview
          </Button>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {level}
          </Badge>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground">by {instructor}</p>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>

        {/* Course Info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">₹{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
            )}
          </div>
          
          <Button size="sm" className="bg-primary hover:bg-primary-hover" onClick={handleEnrollNow}>
            Enroll Now
          </Button>
        </div>
      </CardFooter>

      {/* Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title={title}
        videoUrl={videoUrl}
      />
      
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        course={{
          id,
          title,
          instructor,
          price,
          originalPrice,
          duration,
          students,
          level
        }}
      />
    </Card>
  );
};

export default CourseCard;