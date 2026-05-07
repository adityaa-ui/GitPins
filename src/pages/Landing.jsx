import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { ArrowRight, Star, GitBranch, Code2 } from 'lucide-react';
import gplogo from '../assets/gplogo.jpg';

const Landing = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#0a0e14]">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Navigation */}
      <nav className="w-full p-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <img src={gplogo} alt="GitPins Logo" className="w-9 h-9 rounded-xl object-cover shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]" />
          <span className="text-2xl font-bold tracking-tight text-white">GitPins</span>
        </div>
        <button 
          onClick={() => navigate('/feed')}
          className="text-gray-300 hover:text-white font-medium transition-colors"
        >
          Explore
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-8 text-sm font-medium">
            <Star className="w-4 h-4" />
            <span>Discover Top Open Source</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Pinterest for <br className="hidden md:block" />
            <span className="text-blue-500">GitHub Repositories</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            A visually appealing way to discover, explore, and get inspired by the best open-source projects on GitHub.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/feed')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="https://github.com/adityaa-ui" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-[#1e293b] hover:bg-[#2a374a] text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <FaGithub className="w-5 h-5" /> GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Feature Cards Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full px-4"
        >
          {[
            { icon: Code2, title: "Modern Tech Stacks", desc: "Find projects using React, Vue, Python, Rust, and more." },
            { icon: Star, title: "Trending Projects", desc: "Discover the most starred and highly rated repositories." },
            { icon: GitBranch, title: "Active Development", desc: "Explore repositories with active communities and frequent commits." }
          ].map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#1e293b]/50 border border-white/5 backdrop-blur-sm text-left flex flex-col items-start hover:bg-[#1e293b]/80 transition-colors">
              <div className="p-3 bg-blue-500/10 rounded-xl mb-4">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Landing;
