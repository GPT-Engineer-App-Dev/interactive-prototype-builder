import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: 'auto', opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">
      <motion.div 
        className="max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="p-8 space-y-8">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-indigo-600 mb-4"
            variants={itemVariants}
          >
            Prototype Vision
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-6"
            variants={itemVariants}
          >
            Turn your product visions into interactive prototypes in minutes
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Are you a product manager struggling to visualize your ideas?
            </h2>
            <motion.div
              initial="collapsed"
              animate="expanded"
              variants={expandVariants}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-600 mb-4">
                Say goodbye to static mockups and hello to dynamic, interactive prototypes that bring your vision to life. With Prototype Vision, you can:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Create high-fidelity prototypes without coding</li>
                <li>Collaborate in real-time with your team</li>
                <li>Get instant feedback from stakeholders</li>
                <li>Iterate faster and make better product decisions</li>
              </ul>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
              Start Prototyping
            </Button>
            <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
              Watch Demo
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-indigo-100 p-8 text-center"
          variants={itemVariants}
        >
          <p className="text-indigo-800 text-lg font-medium">
            "Prototype Vision has revolutionized how we approach product development. It's a game-changer for product managers."
          </p>
          <p className="text-indigo-600 mt-2 font-semibold">
            - Sarah Johnson, Senior Product Manager at TechCorp
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;