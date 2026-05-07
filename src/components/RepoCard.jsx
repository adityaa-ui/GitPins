import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink } from 'lucide-react';

const RepoCard = ({ repo, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
      whileHover={{ y: -5 }}
      className="group bg-surface-container-low border border-outline-variant/10 rounded-[1.5rem] overflow-hidden hover:bg-surface-container-high hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300"
    >
      <div className="p-6">
       
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <img 
              src={repo.owner.avatar_url} 
              alt={repo.owner.login} 
              className="w-10 h-10 rounded-full border-2 border-surface group-hover:border-primary/50 transition-colors"
            />
            <div>
              <p className="text-sm text-on-surface-variant font-medium">{repo.owner.login}</p>
              <h3 className="text-lg font-display font-bold text-on-surface truncate max-w-[180px] hover:text-primary transition-colors">
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                  {repo.name}
                </a>
              </h3>
            </div>
          </div>
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noreferrer"
            className="p-2 bg-surface-container-highest rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-on-primary text-on-surface-variant"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <p className="text-on-surface-variant text-sm mb-6 line-clamp-3 leading-relaxed">
          {repo.description || 'No description available for this repository.'}
        </p>

        
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {repo.topics.slice(0, 3).map(topic => (
              <span key={topic} className="px-2.5 py-1 text-[10px] font-bold text-secondary bg-secondary/10 rounded-full uppercase tracking-widest">
                {topic}
              </span>
            ))}
            {repo.topics.length > 3 && (
              <span className="px-2.5 py-1 text-[10px] font-bold text-on-surface-variant bg-surface-container-highest rounded-full">
                +{repo.topics.length - 3}
              </span>
            )}
          </div>
        )}

      
        <div className="flex items-center gap-4 text-xs font-medium text-on-surface-variant pt-4 border-t border-outline-variant/10">
          <div className="flex items-center gap-1.5 group/stat hover:text-secondary transition-colors">
            <Star className="w-4 h-4 group-hover/stat:fill-secondary transition-all" />
            <span>{repo.stargazers_count > 999 ? (repo.stargazers_count/1000).toFixed(1) + 'k' : repo.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <GitFork className="w-4 h-4" />
            <span>{repo.forks_count > 999 ? (repo.forks_count/1000).toFixed(1) + 'k' : repo.forks_count}</span>
          </div>
          {repo.language && (
            <div className="flex items-center gap-1.5 ml-auto">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span>{repo.language}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RepoCard;
