import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import RazorpayPayment from "@/components/payment/RazorpayPayment";
import { X, CheckCircle, Clock, Users } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    id: string;
    title: string;
    instructor: string;
    price: number;
    originalPrice?: number;
    duration: string;
    students: number;
    level: string;
  };
}

const PaymentModal = ({ isOpen, onClose, course }: PaymentModalProps) => {
  const handlePaymentSuccess = () => {
    // Handle successful payment
    console.log("Payment successful for course:", course.title);
    onClose();
  };

  const handlePaymentError = (error: string) => {
    // Handle payment error
    console.error("Payment failed:", error);
  };

  const features = [
    "Lifetime access to course content",
    "Downloadable resources and materials", 
    "Certificate of completion",
    "Access to private student community",
    "Direct instructor support",
    "Mobile and desktop access",
    "Regular content updates",
    "30-day money-back guarantee"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Complete Your Enrollment</DialogTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Course Summary */}
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
            <p className="text-muted-foreground mb-4">by {course.instructor}</p>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <Badge variant="outline" className="w-fit">
                {course.level}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-primary">₹{course.price}</span>
                {course.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">₹{course.originalPrice}</span>
                )}
              </div>
              {course.originalPrice && (
                <Badge className="bg-green-500 text-white">
                  {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h4 className="font-semibold mb-3">What's included in this course:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Component */}
          <div className="border-t pt-6">
            <RazorpayPayment
              amount={course.price}
              courseTitle={course.title}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
            />
          </div>

          {/* Trust Indicators */}
          <div className="text-center text-xs text-muted-foreground border-t pt-4">
            <p>🔒 Secure 256-bit SSL encryption • 💯 30-day money-back guarantee • 📱 Access on all devices</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;