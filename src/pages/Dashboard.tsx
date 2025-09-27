import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Heart, 
  Brain, 
  Calendar, 
  FileText, 
  Users, 
  TrendingUp, 
  Shield,
  Bell,
  Video,
  MessageSquare
} from "lucide-react";

const Dashboard = () => {
  const [userType, setUserType] = useState<"patient" | "doctor">("patient");

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {userType === "patient" ? "Patient Dashboard" : "Doctor Dashboard"}
            </h1>
            <p className="text-muted-foreground">
              {userType === "patient" 
                ? "Track your health journey and get personalized insights" 
                : "Manage your patients and provide exceptional care"
              }
            </p>
          </div>
          
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button
              variant={userType === "patient" ? "default" : "outline"}
              onClick={() => setUserType("patient")}
              className={userType === "patient" ? "bg-gradient-primary" : "glass"}
            >
              Patient View
            </Button>
            <Button
              variant={userType === "doctor" ? "default" : "outline"}
              onClick={() => setUserType("doctor")}
              className={userType === "doctor" ? "bg-gradient-primary" : "glass"}
            >
              Doctor View
            </Button>
          </div>
        </div>

        {userType === "patient" ? (
          // Patient Dashboard
          <div className="space-y-8">
            {/* Health Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-elevated p-6 hover:glow-primary transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Heart Rate</p>
                    <p className="text-2xl font-bold text-primary">72 BPM</p>
                  </div>
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </Card>
              
              <Card className="glass-elevated p-6 hover:glow-secondary transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Health Score</p>
                    <p className="text-2xl font-bold text-secondary">8.5/10</p>
                  </div>
                  <Activity className="w-8 h-8 text-secondary" />
                </div>
              </Card>
              
              <Card className="glass-elevated p-6 hover:glow-accent transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Risk Level</p>
                    <p className="text-2xl font-bold text-accent">Low</p>
                  </div>
                  <Shield className="w-8 h-8 text-accent" />
                </div>
              </Card>
              
              <Card className="glass-elevated p-6 hover:glow-primary transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Next Checkup</p>
                    <p className="text-2xl font-bold text-primary">15 Days</p>
                  </div>
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Health Timeline */}
              <Card className="glass-elevated p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 text-primary mr-2" />
                  Health Timeline
                </h3>
                <div className="space-y-4">
                  {[
                    { date: "Today", event: "AI Health Scan completed", status: "success" },
                    { date: "2 days ago", event: "Symptom check: Headache", status: "warning" },
                    { date: "1 week ago", event: "Blood pressure reading: Normal", status: "success" },
                    { date: "2 weeks ago", event: "Annual checkup scheduled", status: "info" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 glass rounded-lg">
                      <div className={`w-3 h-3 rounded-full mr-3 ${
                        item.status === "success" ? "bg-secondary" :
                        item.status === "warning" ? "bg-destructive" : "bg-primary"
                      }`} />
                      <div className="flex-1">
                        <p className="font-medium">{item.event}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* AI Predictions */}
              <Card className="glass-elevated p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Brain className="w-6 h-6 text-accent mr-2" />
                  AI Health Predictions
                </h3>
                <div className="space-y-4">
                  <div className="glass rounded-lg p-4">
                    <h4 className="font-semibold text-secondary mb-2">Cardiovascular Health</h4>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div className="bg-gradient-secondary h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground">Excellent - Keep maintaining your exercise routine</p>
                  </div>
                  
                  <div className="glass rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2">Mental Wellness</h4>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground">Good - Consider meditation for stress management</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Alerts and Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="glass-elevated p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Bell className="w-5 h-5 text-destructive mr-2" />
                  Health Alerts
                </h3>
                <div className="space-y-3">
                  <div className="glass rounded-lg p-3">
                    <p className="font-medium text-destructive">Medication Reminder</p>
                    <p className="text-sm text-muted-foreground">Take your vitamins at 8 PM</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-elevated p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FileText className="w-5 h-5 text-primary mr-2" />
                  Recent Reports
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start glass">
                    Blood Test Results - Jan 15
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass">
                    AI Diagnosis Report - Jan 10
                  </Button>
                </div>
              </Card>

              <Card className="glass-elevated p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Video className="w-5 h-5 text-secondary mr-2" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-primary">
                    Schedule Consultation
                  </Button>
                  <Button className="w-full bg-gradient-secondary">
                    Start Health Check
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          // Doctor Dashboard
          <div className="space-y-8">
            {/* Doctor Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-elevated p-6 hover:glow-primary transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Patients</p>
                    <p className="text-2xl font-bold text-primary">142</p>
                  </div>
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </Card>
              
              <Card className="glass-elevated p-6 hover:glow-destructive transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Urgent Cases</p>
                    <p className="text-2xl font-bold text-destructive">5</p>
                  </div>
                  <Bell className="w-8 h-8 text-destructive" />
                </div>
              </Card>
              
              <Card className="glass-elevated p-6 hover:glow-secondary transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Consultations Today</p>
                    <p className="text-2xl font-bold text-secondary">8</p>
                  </div>
                  <Video className="w-8 h-8 text-secondary" />
                </div>
              </Card>
              
              <Card className="glass-elevated p-6 hover:glow-accent transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">AI Assists</p>
                    <p className="text-2xl font-bold text-accent">23</p>
                  </div>
                  <Brain className="w-8 h-8 text-accent" />
                </div>
              </Card>
            </div>

            {/* Doctor Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Patient Queue */}
              <Card className="glass-elevated p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="w-6 h-6 text-primary mr-2" />
                  Patient Queue
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Sarah Johnson", condition: "Chest pain", priority: "high", time: "2:30 PM" },
                    { name: "Mike Chen", condition: "Follow-up", priority: "medium", time: "3:00 PM" },
                    { name: "Emma Davis", condition: "Skin rash", priority: "low", time: "3:30 PM" }
                  ].map((patient, index) => (
                    <div key={index} className="flex items-center justify-between p-3 glass rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{patient.name}</p>
                        <p className="text-sm text-muted-foreground">{patient.condition}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                          patient.priority === "high" ? "bg-destructive" :
                          patient.priority === "medium" ? "bg-primary" : "bg-secondary"
                        }`} />
                        <span className="text-sm">{patient.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* AI Diagnostic Insights */}
              <Card className="glass-elevated p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Brain className="w-6 h-6 text-accent mr-2" />
                  AI Diagnostic Insights
                </h3>
                <div className="space-y-4">
                  <div className="glass rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Pattern Recognition Alert</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Increased respiratory symptoms in your patient base - possible seasonal trend
                    </p>
                    <Button size="sm" variant="outline" className="glass">
                      View Analysis
                    </Button>
                  </div>
                  
                  <div className="glass rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Treatment Recommendation</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      AI suggests alternative treatment for Patient #142 based on recent studies
                    </p>
                    <Button size="sm" variant="outline" className="glass">
                      Review
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Communication Panel */}
            <Card className="glass-elevated p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MessageSquare className="w-6 h-6 text-secondary mr-2" />
                Patient Communications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-20 bg-gradient-primary hover:glow-primary flex flex-col">
                  <Video className="w-6 h-6 mb-2" />
                  Start Video Call
                </Button>
                <Button className="h-20 bg-gradient-secondary hover:glow-secondary flex flex-col">
                  <MessageSquare className="w-6 h-6 mb-2" />
                  Send Message
                </Button>
                <Button className="h-20 bg-gradient-accent hover:glow-accent flex flex-col">
                  <FileText className="w-6 h-6 mb-2" />
                  Generate Report
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;