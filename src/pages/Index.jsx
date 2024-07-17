import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">
      <div 
        className={`max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="p-8 space-y-8">
          <h1 
            className="text-4xl md:text-6xl font-bold text-indigo-600 mb-4 transition-all duration-700 ease-out transform translate-x-0 opacity-100"
            style={{ transitionDelay: '200ms' }}
          >
            Prototype Vision
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-600 mb-6 transition-all duration-700 ease-out transform translate-x-0 opacity-100"
            style={{ transitionDelay: '400ms' }}
          >
            Turn your product visions into interactive prototypes in minutes
          </p>
          
          <div className="transition-all duration-700 ease-out transform translate-x-0 opacity-100" style={{ transitionDelay: '600ms' }}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Are you a product manager struggling to visualize your ideas?
            </h2>
            <div className="overflow-hidden transition-all duration-1000 ease-out max-h-96">
              <p className="text-gray-600 mb-4">
                Say goodbye to static mockups and hello to dynamic, interactive prototypes that bring your vision to life. With Prototype Vision, you can:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Create high-fidelity prototypes without coding</li>
                <li>Collaborate in real-time with your team</li>
                <li>Get instant feedback from stakeholders</li>
                <li>Iterate faster and make better product decisions</li>
              </ul>
            </div>
          </div>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out transform translate-x-0 opacity-100"
            style={{ transitionDelay: '800ms' }}
          >
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
              Start Prototyping
            </Button>
            <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div 
          className="bg-indigo-100 p-8 text-center transition-all duration-700 ease-out transform translate-x-0 opacity-100"
          style={{ transitionDelay: '1000ms' }}
        >
          <p className="text-indigo-800 text-lg font-medium">
            "Prototype Vision has revolutionized how we approach product development. It's a game-changer for product managers."
          </p>
          <p className="text-indigo-600 mt-2 font-semibold">
            - Sarah Johnson, Senior Product Manager at TechCorp
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;