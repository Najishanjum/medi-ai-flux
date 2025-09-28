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

                <Button 
                  className="w-full bg-gradient-primary hover:glow-primary py-6 text-lg"
                  onClick={() => {
                    // Simple AI analysis simulation
                    const symptoms = (document.querySelector('textarea') as HTMLTextAreaElement)?.value;
                    const age = (document.querySelector('input[type="number"]') as HTMLInputElement)?.value;
                    const gender = (document.querySelector('select') as HTMLSelectElement)?.value;
                    
                    if (!symptoms) {
                      alert('Please describe your symptoms first.');
                      return;
                    }
                    
                    // Scroll to results section
                    document.getElementById('ai-results')?.scrollIntoView({ behavior: 'smooth' });
                    
                    // Show loading and then results
                    setTimeout(() => {
                      const resultsSection = document.getElementById('ai-results-content');
                      if (resultsSection) {
                        resultsSection.innerHTML = `
                          <div class="space-y-6">
                            <div class="glass rounded-lg p-6">
                              <h3 class="text-xl font-semibold mb-4 text-primary">AI Analysis Complete</h3>
                              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div class="text-center">
                                  <div class="text-2xl font-bold text-secondary mb-1">85%</div>
                                  <div class="text-sm text-muted-foreground">Confidence Score</div>
                                </div>
                                <div class="text-center">
                                  <div class="text-2xl font-bold text-accent mb-1">Low</div>
                                  <div class="text-sm text-muted-foreground">Risk Level</div>
                                </div>
                                <div class="text-center">
                                  <div class="text-2xl font-bold text-primary mb-1">3-5</div>
                                  <div class="text-sm text-muted-foreground">Days Recovery</div>
                                </div>
                              </div>
                              <div class="space-y-4">
                                <div>
                                  <h4 class="font-semibold mb-2">Possible Conditions:</h4>
                                  <ul class="space-y-2 text-muted-foreground">
                                    <li>• Common cold or viral infection (75% likelihood)</li>
                                    <li>• Seasonal allergies (15% likelihood)</li>
                                    <li>• Stress-related symptoms (10% likelihood)</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 class="font-semibold mb-2">Recommendations:</h4>
                                  <ul class="space-y-2 text-muted-foreground">
                                    <li>• Get adequate rest (7-8 hours sleep)</li>
                                    <li>• Stay hydrated (8-10 glasses water daily)</li>
                                    <li>• Consider over-the-counter pain relief if needed</li>
                                    <li>• Consult a doctor if symptoms worsen or persist beyond 7 days</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        `;
                      }
                    }, 2000);
                  }}
                >
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
                  <input
                    type="file"
                    id="medical-images"
                    accept="image/*,.dcm,.nii"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      const files = e.target.files;
                      if (files && files.length > 0) {
                        alert(`Successfully uploaded ${files.length} file(s). AI analysis will begin shortly.`);
                        // Simulate analysis
                        setTimeout(() => {
                          document.getElementById('ai-results')?.scrollIntoView({ behavior: 'smooth' });
                          const resultsSection = document.getElementById('ai-results-content');
                          if (resultsSection) {
                            resultsSection.innerHTML = `
                              <div class="space-y-6">
                                <div class="glass rounded-lg p-6">
                                  <h3 class="text-xl font-semibold mb-4 text-primary">Medical Image Analysis Complete</h3>
                                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div class="text-center">
                                      <div class="text-2xl font-bold text-secondary mb-1">92%</div>
                                      <div class="text-sm text-muted-foreground">Analysis Accuracy</div>
                                    </div>
                                    <div class="text-center">
                                      <div class="text-2xl font-bold text-primary mb-1">Normal</div>
                                      <div class="text-sm text-muted-foreground">Finding Status</div>
                                    </div>
                                    <div class="text-center">
                                      <div class="text-2xl font-bold text-accent mb-1">${files.length}</div>
                                      <div class="text-sm text-muted-foreground">Images Analyzed</div>
                                    </div>
                                  </div>
                                  <div class="space-y-4">
                                    <div>
                                      <h4 class="font-semibold mb-2">Analysis Results:</h4>
                                      <ul class="space-y-2 text-muted-foreground">
                                        <li>• No immediate abnormalities detected</li>
                                        <li>• Image quality: Excellent</li>
                                        <li>• Recommended follow-up: Routine check-up</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <h4 class="font-semibold mb-2">Next Steps:</h4>
                                      <ul class="space-y-2 text-muted-foreground">
                                        <li>• Share results with your physician</li>
                                        <li>• Schedule regular health screenings</li>
                                        <li>• Keep digital copies for medical records</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            `;
                          }
                        }, 3000);
                      }
                    }}
                  />
                  <Button 
                    className="bg-gradient-secondary hover:glow-secondary"
                    onClick={() => document.getElementById('medical-images')?.click()}
                  >
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
                  <Button 
                    className="bg-gradient-accent hover:glow-accent px-8 py-4 text-lg"
                    onClick={() => {
                      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                        navigator.mediaDevices.getUserMedia({ audio: true })
                          .then(stream => {
                            alert('Recording started! Speak clearly for 10 seconds.');
                            // Simulate recording
                            setTimeout(() => {
                              stream.getTracks().forEach(track => track.stop());
                              alert('Recording complete! Analyzing voice patterns...');
                              // Simulate analysis
                              setTimeout(() => {
                                document.getElementById('ai-results')?.scrollIntoView({ behavior: 'smooth' });
                                const resultsSection = document.getElementById('ai-results-content');
                                if (resultsSection) {
                                  resultsSection.innerHTML = `
                                    <div class="space-y-6">
                                      <div class="glass rounded-lg p-6">
                                        <h3 class="text-xl font-semibold mb-4 text-primary">Voice Analysis Complete</h3>
                                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                          <div class="text-center">
                                            <div class="text-2xl font-bold text-secondary mb-1">Normal</div>
                                            <div class="text-sm text-muted-foreground">Breathing Pattern</div>
                                          </div>
                                          <div class="text-center">
                                            <div class="text-2xl font-bold text-accent mb-1">Low</div>
                                            <div class="text-sm text-muted-foreground">Stress Level</div>
                                          </div>
                                          <div class="text-center">
                                            <div class="text-2xl font-bold text-primary mb-1">Clear</div>
                                            <div class="text-sm text-muted-foreground">Voice Quality</div>
                                          </div>
                                        </div>
                                        <div class="space-y-4">
                                          <div>
                                            <h4 class="font-semibold mb-2">Voice Health Analysis:</h4>
                                            <ul class="space-y-2 text-muted-foreground">
                                              <li>• Respiratory health: Good</li>
                                              <li>• Voice clarity: Excellent</li>
                                              <li>• Stress indicators: Minimal</li>
                                              <li>• Overall vocal health: Very good</li>
                                            </ul>
                                          </div>
                                          <div>
                                            <h4 class="font-semibold mb-2">Recommendations:</h4>
                                            <ul class="space-y-2 text-muted-foreground">
                                              <li>• Continue maintaining good vocal hygiene</li>
                                              <li>• Stay hydrated for optimal voice health</li>
                                              <li>• Practice stress-reduction techniques</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  `;
                                }
                              }, 2000);
                            }, 10000);
                          })
                          .catch(err => {
                            alert('Microphone access denied. Please allow microphone access to use voice analysis.');
                          });
                      } else {
                        alert('Voice recording not supported in this browser.');
                      }
                    }}
                  >
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
        <div className="max-w-4xl mx-auto mt-12" id="ai-results">
          <Card className="glass-elevated p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Stethoscope className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold">AI Analysis Results</h2>
              </div>
              <Button 
                variant="outline" 
                className="glass"
                onClick={() => {
                  const resultsContent = document.getElementById('ai-results-content')?.innerHTML;
                  if (resultsContent && resultsContent.trim() !== '') {
                    // Create a PDF-like report
                    const reportWindow = window.open('', '_blank');
                    reportWindow?.document.write(`
                      <html>
                        <head>
                          <title>MediAI Health Report</title>
                          <style>
                            body { font-family: Arial, sans-serif; padding: 20px; }
                            .header { text-align: center; margin-bottom: 30px; }
                            .content { max-width: 800px; margin: 0 auto; }
                          </style>
                        </head>
                        <body>
                          <div class="header">
                            <h1>MediAI Health Analysis Report</h1>
                            <p>Generated on: ${new Date().toLocaleDateString()}</p>
                          </div>
                          <div class="content">
                            ${resultsContent.replace(/class="[^"]*"/g, '')}
                          </div>
                        </body>
                      </html>
                    `);
                    reportWindow?.print();
                  } else {
                    alert('No analysis results available. Please complete a diagnosis first.');
                  }
                }}
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
            
            <div id="ai-results-content">
              <div className="text-center py-12 text-muted-foreground">
                <Activity className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Complete the diagnosis process above to see your AI-powered health analysis</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;