import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import RepoCard from '../components/RepoCard';
import gplogo from '../assets/gplogo.jpg';

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [searchInput, setSearchInput] = useState(query);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchRepos = async (searchQuery, pageNum) => {
    if (!searchQuery) return;
    
    try {
      setLoading(true);
      // Constructing GitHub API search query. 'topic:' specifies we want to search by topic.
      const encodedQuery = encodeURIComponent(searchQuery.trim());
      const res = await fetch(`https://api.github.com/search/repositories?q=${encodedQuery}&sort=stars&order=desc&per_page=15&page=${pageNum}`);
      
      if (!res.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const data = await res.json();
      
      if (pageNum === 1) {
        setRepos(data.items || []);
      } else {
        setRepos(prev => [...prev, ...(data.items || [])]);
      }
      
      setHasMore((data.items || []).length > 0 && data.items.length === 15);
    } catch (err) {
      console.error(err);
      if (pageNum === 1) setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    setRepos([]);
    setHasMore(true);
    fetchRepos(query, 1);
  }, [query]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  // Infinite Scroll logic
  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return;
    
    // Check if scrolled to bottom
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500;
    
    if (scrolledToBottom) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchRepos(query, nextPage);
    }
  }, [loading, hasMore, page, query]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="bg-surface text-on-surface selection:bg-primary/30 min-h-screen">
      {/* TopNavBar Shell */}
      <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full border-b border-outline-variant/10">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <img src={gplogo} alt="Logo" className="w-8 h-8 rounded object-cover" />
            <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">GitPins</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => navigate('/collections')} className="text-on-surface-variant hover:text-on-surface transition-colors font-label text-label-md">Collections</button>
            <button onClick={() => navigate('/feed')} className="text-on-surface-variant hover:text-on-surface transition-colors font-label text-label-md">Trending</button>
            <button onClick={() => navigate('/community')} className="text-on-surface-variant hover:text-on-surface transition-colors font-label text-label-md">Community</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearchSubmit} className="relative hidden lg:block">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">search</span>
            </div>
            <input 
              className="bg-surface-container-highest border-none rounded-lg py-2 pl-10 pr-4 text-sm w-64 md:w-80 focus:ring-2 focus:ring-primary/30 transition-all text-on-surface" 
              placeholder="Search repositories by topic..." 
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-surface-variant/20 transition-transform duration-200 scale-95 active:scale-90">
              <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            </button>
            <button className="p-2 rounded-full hover:bg-surface-variant/20 transition-transform duration-200 scale-95 active:scale-90">
              <span className="material-symbols-outlined text-on-surface-variant">settings</span>
            </button>
          </div>
          <img alt="User profile" className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApwwgYsgYU4VvtmgGTiHGvE-qZpjhAHP2h2EqFmr7tNlODkNFFn4HWtf9U1_08d8ZUufVZNBdlh7H-9zXDcbmNTSJl85zjvEAzFSgPX2tt4fGEKsKXTGlRQBpnVOkcvndBs7VnVmJzTJNmT9_dPcHy4BhQmOh-a04cVKNJIwugq16zBpT1C_Ujzt9zdb1M6ZInqSE_b-IQEV5ZRmoJYOTeTlxGFZ71c_K_rBmVWinC7lkjs4K3xkB3tM-NAFnoRBFa8gqsKh_60Dng"/>
        </div>
      </nav>

      {/* SideNavBar Shell (Web) */}
      <aside className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 pt-24 pb-8 px-4 gap-2 bg-surface-container-low font-body text-label-md border-r border-outline-variant/10">
        <div className="px-4 mb-4 flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center overflow-hidden">
            <img src={gplogo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-on-surface">GitPins</h3>
            <p className="text-on-surface-variant text-xs">The Digital Curator</p>
          </div>
        </div>
        <div className="space-y-1">
          <button onClick={() => navigate('/')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 rounded-xl transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined">grid_view</span>
            <span>Home</span>
          </button>
          <button onClick={() => navigate('/collections')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 rounded-xl transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined">bookmarks</span>
            <span>Collections</span>
          </button>
          <button onClick={() => navigate('/feed')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 rounded-xl transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined">trending_up</span>
            <span>Trending</span>
          </button>
          <button onClick={() => navigate('/community')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 rounded-xl transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined">group</span>
            <span>Community</span>
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="lg:ml-64 pt-24 pb-12 px-6 lg:px-12">
        <header className="mb-12">
          <h1 className="text-display-lg text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Search <span className="text-primary italic">Results</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            {query ? `Discovering repositories for: "${query}"` : "Enter a search query to discover curated repositories."}
          </p>
          
          <form onSubmit={handleSearchSubmit} className="mt-8 lg:hidden relative w-full">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">search</span>
            </div>
            <input 
              className="bg-surface-container-highest border-none rounded-lg py-4 pl-12 pr-4 text-sm w-full focus:ring-2 focus:ring-primary/30 transition-all text-on-surface" 
              placeholder="Search repositories by topic..." 
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
        </header>

        {repos.length > 0 ? (
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
        ) : (
          !loading && query && (
            <div className="text-center py-20 bg-surface-container-low rounded-2xl">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant/50 mb-4 block">search_off</span>
              <h3 className="text-2xl font-display font-bold text-on-surface mb-2">No repositories found</h3>
              <p className="text-on-surface-variant">We couldn't find any repositories matching "{query}". Try a different topic.</p>
            </div>
          )
        )}

        {loading && (
          <div className="flex justify-center py-10">
            <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          </div>
        )}
      </main>

      {/* Mobile Bottom NavBar */}
      <nav className="md:hidden fixed bottom-0 w-full bg-surface-container-high/80 backdrop-blur-xl flex justify-around items-center py-4 px-6 z-50 border-t border-outline-variant/10">
        <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button onClick={() => navigate('/collections')} className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">bookmarks</span>
          <span className="text-[10px] font-bold">Collections</span>
        </button>
        <button onClick={() => navigate('/community')} className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">group</span>
          <span className="text-[10px] font-bold">Community</span>
        </button>
        <button onClick={() => navigate('/feed')} className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">trending_up</span>
          <span className="text-[10px] font-bold">Trending</span>
        </button>
      </nav>
    </div>
  );
};

export default Search;
