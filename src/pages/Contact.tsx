import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      content: "support@elearning.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      content: "+91 44 4567 8910",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Visit Us",
      content: "Chennai, Tamil Nadu",
      description: "India"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Support Hours",
      content: "24/7 Available",
      description: "We're here to help anytime"
    }
  ];

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "Simply browse our courses, select the one you want, and click 'Enroll Now'. You can pay securely using our payment gateway."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with your course, contact us for a full refund."
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer: "Absolutely! You'll receive an industry-recognized certificate upon successful completion of any course."
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Yes, our platform is fully responsive and works great on all devices including smartphones and tablets."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We're Here to <span className="text-accent">Help</span>
            </h1>
            <p className="text-lg text-white/90">
              Have questions about our courses or need support? We'd love to hear from you. 
              Our team is ready to assist you on your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-hover transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                  <p className="font-medium text-primary mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Send Message
              </Badge>
              <h2 className="text-3xl font-bold mb-6">
                Let's Start a <span className="text-primary">Conversation</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                We typically respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary-hover"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
                Quick Support
              </Badge>
              <h3 className="text-2xl font-bold mb-6">
                Need Immediate <span className="text-primary">Assistance?</span>
              </h3>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Live Chat Support</h4>
                      <p className="text-muted-foreground mb-3">
                        Get instant help with our live chat feature. Available 24/7 for all students.
                      </p>
                      <Button size="sm" className="bg-success hover:bg-success/90">
                        Start Chat
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Phone Support</h4>
                      <p className="text-muted-foreground mb-3">
                        Speak directly with our support team for complex issues.
                      </p>
                      <Button size="sm" variant="outline">
                        +91 98765 43210
                      </Button>
                    </div>
                  </div>
                </Card>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-2" />
                    What to Expect
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Response within 24 hours</li>
                    <li>• Detailed solutions to your queries</li>
                    <li>• Follow-up to ensure satisfaction</li>
                    <li>• Multilingual support available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Find quick answers to common questions about our platform and courses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-hover transition-all duration-300">
                  <CardHeader className="pb-3 px-0">
                    <CardTitle className="text-lg text-primary">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help!
              </p>
              <Button className="bg-primary hover:bg-primary-hover">
                View All FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;