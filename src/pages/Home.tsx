import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
                MediAI
              </span>
              <span className="text-muted-foreground">–</span>
              <span className="text-sm text-muted-foreground">Smarter Healthcare for Everyone</span>
            </div>
            <div className="animate-pulse-glow">
              <span className="text-xs text-muted-foreground">
                Powered by Team ILM Tech
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;