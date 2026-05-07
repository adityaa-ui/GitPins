import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import RepoCard from '../components/RepoCard';
import SearchBar from '../components/SearchBar';
import { Loader2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Feed = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState('react');
  const [error, setError] = useState(null);

  const fetchRepos = async (searchTopic) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=topic:${searchTopic}&sort=stars&order=desc&per_page=30`);
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
      const data = await response.json();
      setRepos(data.items);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos(topic);
  }, [topic]);

  const handleSearch = (newTopic) => {
    if (newTopic.trim()) {
      setTopic(newTopic.trim().toLowerCase());
    }
  };

  const breakpointColumnsObj = {
    default: 4,
    1536: 4,
    1280: 3,
    1024: 3,
    768: 2,
    640: 1
  };

  return (
    <div className="min-h-screen bg-[#0a0e14] pt-6 px-4 md:px-8 pb-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
            <FaGithub className="w-6 h-6 text-blue-500" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">GitPins</span>
        </Link>
        <div className="w-full md:max-w-2xl">
          <SearchBar onSearch={handleSearch} currentTopic={topic} />
        </div>
      </header>

      {/* Main Feed */}
      <main className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">
            Trending in <span className="text-blue-400 capitalize">{topic}</span>
          </h2>
          <span className="text-gray-400 text-sm">{repos.length} repositories</span>
        </div>

        {error && (
          <div className="text-center text-red-400 py-12 bg-red-400/10 rounded-2xl border border-red-400/20">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
            <p className="text-gray-400 animate-pulse">Discovering amazing projects...</p>
          </div>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-6"
            columnClassName="pl-6 bg-clip-padding"
          >
            {repos.map((repo, index) => (
              <div key={repo.id} className="mb-6">
                <RepoCard repo={repo} index={index} />
              </div>
            ))}
          </Masonry>
        )}
      </main>
    </div>
  );
};

export default Feed;
