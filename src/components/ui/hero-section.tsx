import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-secondary rounded-full animate-float opacity-80" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-70" style={{ animationDelay: "0.5s" }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/6 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/6 w-40 h-40 bg-gradient-secondary rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-primary glow-primary">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Healthcare Revolution
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent leading-tight">
          AI-Powered Healthcare{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient">
            Diagnosis
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Fast, accurate, affordable medical support with AI.{" "}
          <span className="text-primary font-semibold">Get instant diagnosis</span> and 
          connect with specialists worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:glow-primary text-lg px-8 py-6 h-auto font-semibold group"
            onClick={() => {
              const diagnosisSection = document.getElementById('diagnosis-section');
              if (diagnosisSection) {
                diagnosisSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/diagnosis';
              }
            }}
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
            Start Diagnosis
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="glass hover:glass-elevated text-lg px-8 py-6 h-auto font-semibold group border-primary/30 hover:border-primary"
            onClick={() => window.location.href = '/contact'}
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Talk to AI Doctor
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="glass rounded-lg p-6 hover:glass-elevated transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              99.5%
            </div>
            <div className="text-sm text-muted-foreground">Diagnosis Accuracy</div>
          </div>
          <div className="glass rounded-lg p-6 hover:glass-elevated transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
              2M+
            </div>
            <div className="text-sm text-muted-foreground">Patients Helped</div>
          </div>
          <div className="glass rounded-lg p-6 hover:glass-elevated transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">AI Support</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-primary opacity-70" />
        </div>
      </div>

      {/* ECG Line Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,50 L200,50 L220,30 L240,70 L260,20 L280,80 L300,50 L1200,50"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            className="animate-pulse opacity-60"
          />
        </svg>
      </div>
    </section>
  );
};