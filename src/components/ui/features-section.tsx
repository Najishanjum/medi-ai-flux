import { 
  Brain, 
  Scan, 
  TrendingUp, 
  Shield, 
  Phone, 
  Trophy, 
  Activity, 
  Mic, 
  Video 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Symptom Checker",
    description: "Advanced NLP-based chatbot that understands your symptoms and provides instant analysis.",
    color: "primary",
    delay: "0s"
  },
  {
    icon: Scan,
    title: "Medical Image Analysis",
    description: "Upload X-rays, MRIs, or skin images for AI-powered diagnostic insights.",
    color: "secondary",
    delay: "0.1s"
  },
  {
    icon: TrendingUp,
    title: "Disease Risk Prediction",
    description: "Predict health risks based on your medical history and vital signs.",
    color: "accent",
    delay: "0.2s"
  },
  {
    icon: Shield,
    title: "Real-Time Doctor Dashboard",
    description: "Secure multi-access platform for healthcare professionals.",
    color: "primary",
    delay: "0.3s"
  },
  {
    icon: Phone,
    title: "Emergency SOS Button",
    description: "Instant connection to ambulance services and nearby hospitals.",
    color: "destructive",
    delay: "0.4s"
  },
  {
    icon: Trophy,
    title: "Gamified Health Tracker",
    description: "Earn badges and rewards for maintaining healthy habits.",
    color: "secondary",
    delay: "0.5s"
  },
  {
    icon: Activity,
    title: "Health Trend Forecast",
    description: "AI predicts your health progression and suggests preventive measures.",
    color: "accent",
    delay: "0.6s"
  },
  {
    icon: Mic,
    title: "Virtual Health Assistant",
    description: "Voice-enabled AI assistant for hands-free health consultations.",
    color: "primary",
    delay: "0.7s"
  },
  {
    icon: Video,
    title: "Telemedicine Integration",
    description: "Seamless video consultations with verified medical professionals.",
    color: "secondary",
    delay: "0.8s"
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return "bg-gradient-to-br from-primary/20 to-primary/10 border-primary/30 hover:border-primary group-hover:glow-primary";
    case "secondary":
      return "bg-gradient-to-br from-secondary/20 to-secondary/10 border-secondary/30 hover:border-secondary group-hover:glow-secondary";
    case "accent":
      return "bg-gradient-to-br from-accent/20 to-accent/10 border-accent/30 hover:border-accent group-hover:glow-accent";
    case "destructive":
      return "bg-gradient-to-br from-destructive/20 to-destructive/10 border-destructive/30 hover:border-destructive";
    default:
      return "bg-gradient-to-br from-primary/20 to-primary/10 border-primary/30 hover:border-primary";
  }
};

const getIconColor = (color: string) => {
  switch (color) {
    case "primary":
      return "text-primary";
    case "secondary":
      return "text-secondary";
    case "accent":
      return "text-accent";
    case "destructive":
      return "text-destructive";
    default:
      return "text-primary";
  }
};

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Revolutionary AI Health Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of healthcare with our comprehensive suite of AI-powered tools 
            designed to keep you healthy and connected to professional care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group cursor-pointer"
              style={{ animationDelay: feature.delay }}
            >
              <div className={`glass-elevated rounded-xl p-8 h-full transition-all duration-500 hover:scale-105 border ${getColorClasses(feature.color)}`}>
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${getColorClasses(feature.color)} mr-4`}>
                    <feature.icon className={`w-8 h-8 ${getIconColor(feature.color)}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-elevated rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Transform Your Healthcare Experience?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join millions of users who trust MediAI for their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary rounded-lg font-semibold hover:glow-primary transition-all duration-300">
                Get Started Free
              </button>
              <button className="px-8 py-3 glass rounded-lg font-semibold hover:glass-elevated transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};