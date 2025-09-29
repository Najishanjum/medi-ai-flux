import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Users, 
  ExternalLink,
  Heart,
  Star,
  Calendar,
  TrendingUp
} from "lucide-react";

const Community = () => {
  const handleWhatsAppClick = () => {
    window.open('https://chat.whatsapp.com/IJw256xuepP956JsufMY6g', '_blank');
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            MediAI Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow health enthusiasts, share experiences, and get support from our vibrant community of users and medical professionals.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="glass-elevated p-6 text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary mb-1">50K+</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </Card>
          <Card className="glass-elevated p-6 text-center">
            <MessageSquare className="w-8 h-8 text-secondary mx-auto mb-3" />
            <div className="text-2xl font-bold text-secondary mb-1">1M+</div>
            <div className="text-sm text-muted-foreground">Messages Shared</div>
          </Card>
          <Card className="glass-elevated p-6 text-center">
            <Heart className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold text-accent mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </Card>
          <Card className="glass-elevated p-6 text-center">
            <Star className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground">Community Rating</div>
          </Card>
        </div>

        {/* Main Community Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* WhatsApp Community */}
          <Card className="glass-elevated p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-2xl font-bold">WhatsApp Community</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Join our official WhatsApp community for instant health discussions, expert tips, and peer support. Get real-time answers to your health questions.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-sm">
                <Users className="w-4 h-4 text-secondary mr-2" />
                <span>24/7 active community</span>
              </div>
              <div className="flex items-center text-sm">
                <Heart className="w-4 h-4 text-accent mr-2" />
                <span>Expert health tips daily</span>
              </div>
              <div className="flex items-center text-sm">
                <MessageSquare className="w-4 h-4 text-primary mr-2" />
                <span>Instant peer support</span>
              </div>
            </div>
            <Button 
              className="w-full bg-gradient-primary hover:glow-primary"
              onClick={handleWhatsAppClick}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Join WhatsApp Community
            </Button>
          </Card>

          {/* Community Guidelines */}
          <Card className="glass-elevated p-8">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-secondary mr-4" />
              <h2 className="text-2xl font-bold">Community Guidelines</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">1</div>
                <div>
                  <h3 className="font-semibold mb-1">Be Respectful</h3>
                  <p className="text-sm text-muted-foreground">Treat all members with kindness and respect</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Share Responsibly</h3>
                  <p className="text-sm text-muted-foreground">Share health information that is helpful and accurate</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Protect Privacy</h3>
                  <p className="text-sm text-muted-foreground">Never share personal medical information</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">4</div>
                <div>
                  <h3 className="font-semibold mb-1">Seek Professional Help</h3>
                  <p className="text-sm text-muted-foreground">Community advice doesn't replace professional medical care</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Community Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            Community Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-elevated p-6 text-center hover:glow-primary transition-all duration-300">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Health Challenges</h3>
              <p className="text-muted-foreground">
                Participate in monthly health challenges and track your progress with the community.
              </p>
            </Card>

            <Card className="glass-elevated p-6 text-center hover:glow-secondary transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
              <p className="text-muted-foreground">
                Share and celebrate health milestones and inspiring recovery journeys.
              </p>
            </Card>

            <Card className="glass-elevated p-6 text-center hover:glow-accent transition-all duration-300">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Expert Sessions</h3>
              <p className="text-muted-foreground">
                Join live Q&A sessions with medical professionals and health experts.
              </p>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="glass-elevated p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 text-primary mr-3" />
            Recent Community Activity
          </h2>
          <div className="space-y-4">
            {[
              { user: "Sarah M.", action: "shared a wellness tip about morning hydration", time: "2 hours ago", type: "tip" },
              { user: "Dr. Johnson", action: "answered questions about seasonal allergies", time: "5 hours ago", type: "expert" },
              { user: "Mike R.", action: "completed the 30-day fitness challenge", time: "1 day ago", type: "achievement" },
              { user: "Community", action: "reached 50,000 members milestone!", time: "2 days ago", type: "milestone" }
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 glass rounded-lg p-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.type === 'expert' ? 'bg-secondary' : 
                  activity.type === 'achievement' ? 'bg-accent' : 
                  activity.type === 'milestone' ? 'bg-primary' : 'bg-muted'
                }`}>
                  {activity.type === 'expert' ? <Star className="w-5 h-5 text-white" /> :
                   activity.type === 'achievement' ? <Heart className="w-5 h-5 text-white" /> :
                   activity.type === 'milestone' ? <Users className="w-5 h-5 text-white" /> :
                   <MessageSquare className="w-5 h-5 text-white" />}
                </div>
                <div className="flex-1">
                  <p><span className="font-semibold">{activity.user}</span> {activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </div>
  );
};

export default Community;