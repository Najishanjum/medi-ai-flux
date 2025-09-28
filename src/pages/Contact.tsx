import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  Heart,
  Shield,
  Headphones
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    urgency: "normal"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need help or have questions? Our dedicated support team is here 24/7 to assist you with your healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Emergency Contact */}
            <Card className="glass-elevated p-6 border-destructive/30">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-destructive mr-3" />
                <h3 className="text-lg font-semibold text-destructive">Emergency Hotline</h3>
              </div>
              <p className="text-2xl font-bold text-destructive mb-2">911</p>
              <p className="text-sm text-muted-foreground">For immediate medical emergencies</p>
              <Button className="w-full mt-4 bg-gradient-to-r from-destructive to-destructive/80 hover:glow-destructive">
                <Phone className="w-4 h-4 mr-2" />
                Call Emergency
              </Button>
            </Card>

            {/* Contact Cards */}
            <Card className="glass-elevated p-6">
              <div className="flex items-center mb-4">
                <Headphones className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold">24/7 Support</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-secondary mr-3" />
                  <div>
                    <p className="font-medium">+91 7631296157</p>
                    <p className="font-medium">+91 6268385870</p>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-accent mr-3" />
                  <div>
                    <p className="font-medium">teamilmtech@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Response within 1 hour</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-sm text-muted-foreground">Instant AI assistance</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-elevated p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold">Headquarters</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Jabalpur, Madhya Pradesh<br />
                India
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <MessageCircle className="w-4 h-4 mr-2 text-primary" />
                  <span>WhatsApp: </span>
                  <a href="https://chat.whatsapp.com/IJw256xuepP956JsufMY6g" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    Join Community
                  </a>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <span className="w-4 h-4 mr-2 text-blue-500 font-bold">in</span>
                  <span>LinkedIn: </span>
                  <a href="https://www.linkedin.com/company/team-ilm-tech/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    Team ILM Tech
                  </a>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <span className="w-4 h-4 mr-2 text-pink-500 font-bold">ig</span>
                  <span>Instagram: </span>
                  <a href="https://www.instagram.com/teamilmtech?igsh=dmo2dmtwMndoOXVw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    @teamilmtech
                  </a>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-2" />
                Mon-Fri: 9AM-6PM PST
              </div>
            </Card>

            <Card className="glass-elevated p-6 border-primary/30">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold">Privacy Guaranteed</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                All communications are encrypted and HIPAA compliant. Your privacy and medical information are our top priority.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-elevated p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Send className="w-6 h-6 text-primary mr-3" />
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="glass"
                      placeholder="What can we help you with?"
                    />
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full p-3 glass rounded-lg"
                    >
                      <option value="low">Low - General inquiry</option>
                      <option value="normal">Normal - Standard support</option>
                      <option value="high">High - Urgent matter</option>
                      <option value="critical">Critical - Immediate attention</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass min-h-32"
                    placeholder="Please describe your question or concern in detail..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-gradient-primary hover:glow-primary py-6 text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1 glass hover:glass-elevated py-6 text-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start Live Chat
                  </Button>
                </div>
              </form>

              {/* Quick Help Section */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold mb-4">Quick Help</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start glass hover:glass-elevated">
                    <Heart className="w-4 h-4 mr-2 text-destructive" />
                    Medical Emergency Guide
                  </Button>
                  <Button variant="outline" className="justify-start glass hover:glass-elevated">
                    <MessageCircle className="w-4 h-4 mr-2 text-primary" />
                    FAQ & Common Issues
                  </Button>
                  <Button variant="outline" className="justify-start glass hover:glass-elevated">
                    <Shield className="w-4 h-4 mr-2 text-accent" />
                    Privacy & Security
                  </Button>
                  <Button variant="outline" className="justify-start glass hover:glass-elevated">
                    <Headphones className="w-4 h-4 mr-2 text-secondary" />
                    Technical Support
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="glass-elevated p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Need Immediate AI Assistance?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our AI health assistant is available 24/7 to help answer your health questions instantly.
            </p>
            <Button 
              className="bg-gradient-secondary hover:glow-secondary px-8 py-4 text-lg"
              onClick={() => window.open('https://wa.me/917631296157', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Doctor Now
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;