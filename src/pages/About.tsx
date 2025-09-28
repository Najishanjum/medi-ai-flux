import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Heart, 
  Shield, 
  Zap, 
  Users, 
  Award,
  Target,
  Globe,
  CheckCircle
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About MediAI
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing healthcare through artificial intelligence to make quality medical diagnosis 
            accessible, affordable, and available to everyone, everywhere.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="glass-elevated p-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To provide faster, accurate, and affordable healthcare for everyone through cutting-edge AI technology. 
              We believe that quality medical diagnosis should not be limited by geography, time, or financial constraints.
            </p>
          </Card>

          <Card className="glass-elevated p-8">
            <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 text-secondary mr-4" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI-powered healthcare available everywhere. We envision a world where every person has instant access 
              to reliable medical guidance, early disease detection, and personalized health insights through our intelligent platform.
            </p>
          </Card>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-elevated p-6 text-center hover:glow-primary transition-all duration-300">
              <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">AI Diagnosis</h3>
              <p className="text-muted-foreground">
                Advanced machine learning algorithms analyze symptoms and medical data to provide accurate preliminary diagnoses.
              </p>
            </Card>

            <Card className="glass-elevated p-6 text-center hover:glow-secondary transition-all duration-300">
              <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Health Monitoring</h3>
              <p className="text-muted-foreground">
                Continuous health tracking and personalized insights to help prevent diseases and maintain optimal wellness.
              </p>
            </Card>

            <Card className="glass-elevated p-6 text-center hover:glow-accent transition-all duration-300">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Secure Platform</h3>
              <p className="text-muted-foreground">
                HIPAA-compliant security ensuring your medical data is protected with enterprise-grade encryption.
              </p>
            </Card>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-secondary bg-clip-text text-transparent">
            Why Choose MediAI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "Instant Analysis", desc: "Get medical insights in seconds, not hours" },
              { icon: Award, title: "99.5% Accuracy", desc: "Clinically validated AI with exceptional precision" },
              { icon: Users, title: "24/7 Availability", desc: "Round-the-clock access to AI medical assistance" },
              { icon: Shield, title: "Privacy First", desc: "Your health data is encrypted and never shared" },
              { icon: Globe, title: "Global Access", desc: "Available worldwide in multiple languages" },
              { icon: Heart, title: "Human Touch", desc: "AI-powered but designed with empathy and care" }
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 glass rounded-lg p-6 hover:glass-elevated transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology */}
        <Card className="glass-elevated p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-accent bg-clip-text text-transparent">
            Our Technology
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Brain className="w-6 h-6 text-primary mr-3" />
                Advanced AI Models
              </h3>
              <div className="space-y-3">
                {[
                  "Deep Learning Neural Networks",
                  "Natural Language Processing",
                  "Computer Vision for Medical Imaging",
                  "Predictive Analytics",
                  "Real-time Data Processing"
                ].map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-secondary mr-3" />
                    <span className="text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse-glow">
                <Brain className="w-24 h-24 text-white" />
              </div>
              <p className="text-muted-foreground">
                Powered by state-of-the-art artificial intelligence trained on millions of medical cases
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Card className="glass-elevated p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Experience the Future of Healthcare?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join millions of users who trust MediAI for their health needs. Start your journey to better health today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:glow-primary px-8 py-6 text-lg"
                onClick={() => window.location.href = '/diagnosis'}
              >
                <Brain className="w-5 h-5 mr-2" />
                Start Free Diagnosis
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass hover:glass-elevated px-8 py-6 text-lg"
                onClick={() => window.location.href = '/contact'}
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Our Team
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;