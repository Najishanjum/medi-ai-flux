import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Upload, 
  MessageSquare, 
  Activity, 
  FileText, 
  Stethoscope,
  Brain,
  Scan,
  Mic
} from "lucide-react";

const Diagnosis = () => {
  const [activeTab, setActiveTab] = useState("symptoms");

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            AI Health Diagnosis
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant, accurate health analysis powered by advanced AI. Choose your preferred method below.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: "symptoms", label: "Symptom Checker", icon: MessageSquare },
            { id: "upload", label: "Medical Images", icon: Upload },
            { id: "voice", label: "Voice Analysis", icon: Mic }
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={`glass hover:glass-elevated ${
                activeTab === tab.id ? "bg-gradient-primary glow-primary" : ""
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </Button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Symptom Checker Tab */}
          {activeTab === "symptoms" && (
            <Card className="glass-elevated p-8">
              <div className="flex items-center mb-6">
                <Brain className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold">AI Symptom Analysis</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Describe your symptoms</label>
                  <Textarea
                    placeholder="Please describe your symptoms in detail. For example: 'I have a headache that started 2 days ago, along with fever and fatigue...'"
                    className="glass min-h-32"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Age</label>
                    <Input type="number" placeholder="Your age" className="glass" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Gender</label>
                    <select className="w-full p-3 glass rounded-lg">
                      <option>Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover:glow-primary py-6 text-lg">
                  <Brain className="w-5 h-5 mr-2" />
                  Analyze Symptoms
                </Button>
              </div>
            </Card>
          )}

          {/* Medical Images Tab */}
          {activeTab === "upload" && (
            <Card className="glass-elevated p-8">
              <div className="flex items-center mb-6">
                <Scan className="w-8 h-8 text-secondary mr-4" />
                <h2 className="text-2xl font-bold">Medical Image Analysis</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-12 text-center hover:border-primary/60 transition-colors cursor-pointer glass">
                  <Upload className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Upload Medical Images</h3>
                  <p className="text-muted-foreground mb-4">
                    Support for X-rays, MRIs, CT scans, and dermatology images
                  </p>
                  <Button className="bg-gradient-secondary hover:glow-secondary">
                    Choose Files
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="glass rounded-lg p-4 text-center">
                    <Scan className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold">X-Ray Analysis</h4>
                    <p className="text-sm text-muted-foreground">Bone fractures, pneumonia detection</p>
                  </div>
                  <div className="glass rounded-lg p-4 text-center">
                    <Activity className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <h4 className="font-semibold">MRI/CT Scans</h4>
                    <p className="text-sm text-muted-foreground">Brain, organ analysis</p>
                  </div>
                  <div className="glass rounded-lg p-4 text-center">
                    <FileText className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h4 className="font-semibold">Skin Analysis</h4>
                    <p className="text-sm text-muted-foreground">Mole, rash detection</p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Voice Analysis Tab */}
          {activeTab === "voice" && (
            <Card className="glass-elevated p-8">
              <div className="flex items-center mb-6">
                <Mic className="w-8 h-8 text-accent mr-4" />
                <h2 className="text-2xl font-bold">Voice Health Analysis</h2>
              </div>
              
              <div className="text-center space-y-6">
                <div className="glass rounded-lg p-8">
                  <div className="w-32 h-32 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse-glow">
                    <Mic className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Start Voice Recording</h3>
                  <p className="text-muted-foreground mb-6">
                    Our AI can analyze your voice patterns for respiratory health, stress levels, and more.
                  </p>
                  <Button className="bg-gradient-accent hover:glow-accent px-8 py-4 text-lg">
                    Start Recording
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glass rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Respiratory Analysis</h4>
                    <p className="text-sm text-muted-foreground">Detect breathing patterns and potential issues</p>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Stress Detection</h4>
                    <p className="text-sm text-muted-foreground">Analyze voice stress indicators</p>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* AI Diagnosis Results Panel */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="glass-elevated p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Stethoscope className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold">AI Analysis Results</h2>
              </div>
              <Button variant="outline" className="glass">
                <FileText className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
            
            <div className="text-center py-12 text-muted-foreground">
              <Activity className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Complete the diagnosis process above to see your AI-powered health analysis</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;