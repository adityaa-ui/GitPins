import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = ({ onSearch, currentTopic }) => {
  const [query, setQuery] = useState(currentTopic || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const clearSearch = () => {
    setQuery('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`relative flex items-center w-full transition-all duration-300 ${isFocused ? 'scale-[1.02]' : 'scale-100'}`}
    >
      <div className={`absolute inset-0 bg-blue-500/20 blur-xl transition-opacity duration-300 rounded-full ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className={`relative w-full flex items-center bg-[#1e293b] border rounded-full overflow-hidden transition-colors duration-300 ${isFocused ? 'border-blue-500/50' : 'border-white/10'}`}>
        <div className="pl-5 pr-3 text-gray-400">
          <Search className={`w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-blue-400' : ''}`} />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search by topic (like: machine-learning, react, rust)..."
          className="flex-1 bg-transparent py-4 text-white placeholder-gray-500 outline-none w-full"
        />
        
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              type="button"
              onClick={clearSearch}
              className="px-3 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
        
        <button 
          type="submit"
          className="mr-2 my-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
