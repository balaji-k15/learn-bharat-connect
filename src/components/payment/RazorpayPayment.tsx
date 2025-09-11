import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Lock, Shield } from "lucide-react";

interface RazorpayPaymentProps {
  amount: number;
  courseTitle: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

// Razorpay types for TypeScript
declare global {
  interface Window {
    Razorpay: any;
  }
}

const RazorpayPayment = ({ 
  amount, 
  courseTitle, 
  onSuccess,
  onError 
}: RazorpayPaymentProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setIsLoading(true);
    
    try {
      // Load Razorpay script
      const isScriptLoaded = await loadRazorpayScript();
      
      if (!isScriptLoaded) {
        throw new Error("Razorpay SDK failed to load");
      }

      // In a real application, you would create an order on your backend
      // For demo purposes, we'll simulate the order creation
      const order = {
        id: `order_${Date.now()}`,
        amount: amount * 100, // Razorpay expects amount in paise
        currency: "INR",
      };

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID || "rzp_test_9999999999", // Demo key
        amount: order.amount,
        currency: order.currency,
        name: "EduPlatform",
        description: `Enrollment for ${courseTitle}`,
        order_id: order.id,
        image: "/favicon.ico",
        handler: function (response: any) {
          toast({
            title: "Payment Successful!",
            description: `You have successfully enrolled in ${courseTitle}. Payment ID: ${response.razorpay_payment_id}`,
          });
          onSuccess?.();
        },
        prefill: {
          name: "Student Name",
          email: "student@example.com",
          contact: "9999999999"
        },
        notes: {
          course: courseTitle,
          enrollment_date: new Date().toISOString(),
        },
        theme: {
          color: "#3B82F6"
        },
        modal: {
          ondismiss: function() {
            setIsLoading(false);
          }
        }
      };

      const paymentObject = new window.Razorpay(options);
      
      paymentObject.on('payment.failed', function (response: any) {
        const errorMessage = response.error.description || "Payment failed";
        toast({
          title: "Payment Failed",
          description: errorMessage,
          variant: "destructive",
        });
        onError?.(errorMessage);
        setIsLoading(false);
      });

      paymentObject.open();
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Payment initialization failed";
      toast({
        title: "Payment Error",
        description: errorMessage,
        variant: "destructive",
      });
      onError?.(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Payment Security Info */}
      <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
        <div className="flex items-center space-x-1">
          <Shield className="w-4 h-4" />
          <span>Secure Payment</span>
        </div>
        <div className="flex items-center space-x-1">
          <Lock className="w-4 h-4" />
          <span>SSL Encrypted</span>
        </div>
      </div>

      {/* Payment Button */}
      <Button 
        onClick={handlePayment}
        disabled={isLoading}
        size="lg"
        className="w-full bg-success hover:bg-success/90 text-success-foreground"
      >
        {isLoading ? (
          "Processing..."
        ) : (
          <>
            <CreditCard className="w-5 h-5 mr-2" />
            Pay ₹{amount} - Enroll Now
          </>
        )}
      </Button>

      {/* Payment Methods */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">We accept</p>
        <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
          <span>Credit Cards</span>
          <span>•</span>
          <span>Debit Cards</span>
          <span>•</span>
          <span>UPI</span>
          <span>•</span>
          <span>Net Banking</span>
          <span>•</span>
          <span>Wallets</span>
        </div>
      </div>

      {/* Terms */}
      <p className="text-xs text-muted-foreground text-center">
        By proceeding with payment, you agree to our{" "}
        <Button variant="link" className="p-0 h-auto text-xs">
          Terms of Service
        </Button>{" "}
        and{" "}
        <Button variant="link" className="p-0 h-auto text-xs">
          Refund Policy
        </Button>
      </p>
    </div>
  );
};

export default RazorpayPayment;