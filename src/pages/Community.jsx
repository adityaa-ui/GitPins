import { useNavigate } from 'react-router-dom';
import gplogo from '../assets/gplogo.jpg';

const Community = () => {
  const navigate = useNavigate();

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
            <button className="text-primary font-bold border-b-2 border-primary pb-1 font-label text-label-md">Community</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
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
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-surface-container-high text-primary rounded-xl font-bold transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
            <span>Community</span>
          </button>
        </div>
        <div className="mt-8 px-4">
          <button className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-bold shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
            New Collection
          </button>
        </div>
        <div className="mt-auto space-y-1 border-t border-outline-variant/10 pt-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 rounded-xl transition-all">
            <span className="material-symbols-outlined">description</span>
            <span>Docs</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 rounded-xl transition-all">
            <span className="material-symbols-outlined">help</span>
            <span>Support</span>
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="lg:ml-64 pt-24 pb-12 px-6 lg:px-12">
        {/* Header Hero */}
        <header className="mb-16">
          <h1 className="text-display-lg text-5xl md:text-7xl font-bold tracking-tight mb-4">
            The <span className="text-primary italic">Social</span> Pulse.
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Connect with the world's most meticulous curators. Share your repositories, request expertise, and discover the artifacts of modern craftsmanship.
          </p>
        </header>

        {/* Top Curators Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">workspace_premium</span>
              Top Curators
            </h2>
            <button className="text-primary text-sm font-bold hover:underline">View Global Leaderboard</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Curator Card 1 */}
            <div className="bg-surface-container-low p-6 rounded-xl group hover:bg-surface-container-high transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img alt="Curator Alex" className="w-16 h-16 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX5vakJPvPx8o0JuOwIodb2JoO-_NSpCyJe6JVC2H17VC4-o1DdQixk1XmCoWBBpz4BQhhMG3qiCquV73viLJSQy9GdlaUXiB0nhOEYAfh23zAITlLqEzI4JjZFE8Qdl2dDT_CZqeykBP_qQRsZwRQLFnP6TSJyaQaNsJGpyYkExSvhu75WiZiAQgv5Gad_ZKjkMnnbD9QcL6pt8J3YjWWtOQLNaqy3CSY3aCzNqplPcuWoQce45mRLPvR35ykzrtoV-ViYNwJRzVl"/>
                  <div>
                    <h3 className="font-bold text-lg">Aditya</h3>
                    <p className="text-on-surface-variant text-sm">@aditya_dev</p>
                  </div>
                </div>
                <button className="bg-surface-variant/20 px-4 py-1.5 rounded-full text-xs font-bold text-primary hover:bg-primary hover:text-on-primary transition-all">Follow</button>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="bg-surface-container/50 px-3 py-2 rounded-lg text-center flex-1">
                  <span className="block text-lg font-bold">1.2k</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Followers</span>
                </div>
                <div className="bg-surface-container/50 px-3 py-2 rounded-lg text-center flex-1">
                  <span className="block text-lg font-bold">48</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Boards</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant mb-3 uppercase tracking-tighter">Featured Collection</p>
                <div className="flex items-center gap-3 bg-surface-container-highest/40 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-secondary text-lg">folder_special</span>
                  <span className="text-sm font-medium">Rust-Based Cloud Architecture</span>
                </div>
              </div>
            </div>

            {/* Curator Card 2 */}
            <div className="bg-surface-container-low p-6 rounded-xl group hover:bg-surface-container-high transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img alt="Curator Lena" className="w-16 h-16 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkaeVT_VrmAYKVGkNXK7uEp3NGV9G5-tE19DmVC-Bo9q9uf-FjQ2onOjAqY6VrCsppXWOGuqq8k-GFQSfQt6aK9B3RX8GH5m4tTnr-bUewArP8bN6T8q1yCXIUXrJtD5LmogBHv5TZeDhlIN3DZGId5fizB-goTGAE1NyFcnUQy7TCp4VpF_UUAdDuSzvcG8op5kJg86f8caq43KFV4LoqWuAolyR5L0FO9eg4rTLnCSEEHyAs6TBTHu8OX2xzGvxsn3tNfwv26KS_"/>
                  <div>
                    <h3 className="font-bold text-lg">Arish Singh</h3>
                    <p className="text-on-surface-variant text-sm">@arish_curates</p>
                  </div>
                </div>
                <button className="bg-surface-variant/20 px-4 py-1.5 rounded-full text-xs font-bold text-primary hover:bg-primary hover:text-on-primary transition-all">Follow</button>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="bg-surface-container/50 px-3 py-2 rounded-lg text-center flex-1">
                  <span className="block text-lg font-bold">3.4k</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Followers</span>
                </div>
                <div className="bg-surface-container/50 px-3 py-2 rounded-lg text-center flex-1">
                  <span className="block text-lg font-bold">124</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Boards</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant mb-3 uppercase tracking-tighter">Featured Collection</p>
                <div className="flex items-center gap-3 bg-surface-container-highest/40 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-secondary text-lg">folder_special</span>
                  <span className="text-sm font-medium">Next.js 14 Experimental Patterns</span>
                </div>
              </div>
            </div>

            {/* Curator Card 3 */}
            <div className="bg-surface-container-low p-6 rounded-xl group hover:bg-surface-container-high transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img alt="Curator Marcus" className="w-16 h-16 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXdJoY0PuXRO1k4io2dWg0QBbtjIvR3rbdyY0pqlx9I-_bbbdyfX99F_IspO-xLflARUuHhgIy2ZQFH9RtdGbbp_VfcI59wcdOsgNQ1SAxeBuvbiahBbeq7AMT9VAF9-9mS9e4uKf9XzS4x77O9TIconbrQthHSWfar216_j1sY371wY3aAIgEv-G1iORkCI1Rvz7azsBJy5RCv7aI8Q5SEZ5j10jdjAkM2AxSQAY_QEdO_bM4h5czWwHyUhIShLEdRew_1XSxNuXS"/>
                  <div>
                    <h3 className="font-bold text-lg">Ashutosh</h3>
                    <p className="text-on-surface-variant text-sm">@ashu_173</p>
                  </div>
                </div>
                <button className="bg-surface-variant/20 px-4 py-1.5 rounded-full text-xs font-bold text-primary hover:bg-primary hover:text-on-primary transition-all">Follow</button>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="bg-surface-container/50 px-3 py-2 rounded-lg text-center flex-1">
                  <span className="block text-lg font-bold">892</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Followers</span>
                </div>
                <div className="bg-surface-container/50 px-3 py-2 rounded-lg text-center flex-1">
                  <span className="block text-lg font-bold">12</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Boards</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant mb-3 uppercase tracking-tighter">Featured Collection</p>
                <div className="flex items-center gap-3 bg-surface-container-highest/40 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-secondary text-lg">folder_special</span>
                  <span className="text-sm font-medium">WASM & High Performance Web</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          {/* Curation Requests (Discussion) */}
          <div className="xl:col-span-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">forum</span>
                Curation Requests
              </h2>
              <button className="text-sm font-bold bg-surface-container-highest px-4 py-2 rounded-full hover:bg-primary hover:text-on-primary transition-all">New Request</button>
            </div>
            
            <div className="space-y-4">
              {/* Request item 1 */}
              <div className="bg-surface-container-low p-6 rounded-xl hover:translate-x-1 transition-transform border-l-4 border-primary">
                <div className="flex gap-4">
                  <img alt="Requestor" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTEVbfE6Z0blBsCk-wza9uuf7BaMWx_OSAY45o3x7TWu5ppr7JohbrYCkKP-RBdmivfQC8WeNZEFShIWvYgQwtYvSiq5ytcRoEs5iOJ-dxoTautp_fp244GETpgR8zUVb4iItBXi49X1VuL8kDP4ykGPNwmsOkljp4dCYFMiKJ9jjaeNcHELRSqmCb4FjKiNwkvyXGoXh5um0hVdPxCQE1EzFW-aLHrBjpsmvQaJkCXF-Xqy1uHisJ2Yui8yiPfC1uLlJv9KO9ZGG4"/>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold">Seeking: Solid Pythonic LLM wrappers</h4>
                      <span className="text-[10px] font-mono bg-surface-variant text-on-surface-variant px-2 py-1 rounded">2h ago</span>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-4">"Building a RAG application and need repos that focus on clean abstraction over complexity. What are your favorite lightweight wrappers?"</p>
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-base">chat_bubble</span> 14 Comments
                      </button>
                      <button className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-secondary transition-colors">
                        <span className="material-symbols-outlined text-base">recommend</span> 8 Contributions
                      </button>
                      <div className="flex -space-x-2 ml-auto">
                        <div className="w-6 h-6 rounded-full bg-primary-container border-2 border-surface-container-low flex items-center justify-center text-[10px] font-bold">JS</div>
                        <div className="w-6 h-6 rounded-full bg-secondary-container border-2 border-surface-container-low flex items-center justify-center text-[10px] font-bold">MK</div>
                        <div className="w-6 h-6 rounded-full bg-tertiary-container border-2 border-surface-container-low flex items-center justify-center text-[10px] font-bold">+3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Request item 2 */}
              <div className="bg-surface-container-low p-6 rounded-xl hover:translate-x-1 transition-transform border-l-4 border-tertiary">
                <div className="flex gap-4">
                  <img alt="Requestor" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDclEFmihxjFwuLP3WEVmibgfsQDW6OuAvVXIGQU9U5r90IIrumB86m22yzjauacQDk0HEvzcCdi1bpCWX4eoCcmyRUCzgpXxct4UXR8vpthZXfke4DFGLKOJYXeoqjBCYz8vMZFPbnrzX3sU5zZmFwCGY3VNFMQnDFlJ3Fn62g-MQbXvKmY1aHOyJdmhyZI8sBxeOY1kylXLCo1-YsTWckunotcIFkUmtytRqbxqUV-lZKXprSJlOtcFEX3fOGy896xcT3E_KFtUy7"/>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold">The best "Zero-Config" CSS libraries in 2024?</h4>
                      <span className="text-[10px] font-mono bg-surface-variant text-on-surface-variant px-2 py-1 rounded">5h ago</span>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-4">"Tired of Tailwind configuration bloat for small internal tools. Any hidden gems that are pure CSS/CSS-in-JS without the setup?"</p>
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-base">chat_bubble</span> 29 Comments
                      </button>
                      <button className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-secondary transition-colors">
                        <span className="material-symbols-outlined text-base">recommend</span> 22 Contributions
                      </button>
                      <div className="flex -space-x-2 ml-auto">
                        <div className="w-6 h-6 rounded-full bg-primary border-2 border-surface-container-low flex items-center justify-center text-[10px] font-bold">AL</div>
                        <div className="w-6 h-6 rounded-full bg-secondary border-2 border-surface-container-low flex items-center justify-center text-[10px] font-bold">TR</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Highlights (Sidebar feed) */}
          <div className="xl:col-span-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-8">
              <span className="material-symbols-outlined text-tertiary">bolt</span>
              Live Highlights
            </h2>
            <div className="bg-surface-container p-6 rounded-2xl space-y-8">
              {/* Highlight 1 */}
              <div className="relative pl-6 border-l border-outline-variant">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-secondary ring-4 ring-secondary/20"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Trending Now</span>
                  <p className="text-sm font-medium leading-snug">The "Retro Computing" collection reached 500 stars this morning.</p>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-tertiary-container/20 text-tertiary text-[10px] font-bold px-2 py-1 rounded">Retro</span>
                    <span className="bg-tertiary-container/20 text-tertiary text-[10px] font-bold px-2 py-1 rounded">Systems</span>
                  </div>
                </div>
              </div>

              {/* Highlight 2 */}
              <div className="relative pl-6 border-l border-outline-variant">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">New Masterwork</span>
                  <p className="text-sm font-medium leading-snug">@arivera_dev just published "The Ultimate Rust-Embedded Guide."</p>
                  <img alt="Collection Highlight" className="w-full h-32 object-cover rounded-xl mt-2 grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDjzisQYi3_42XJgVhQLZ-_DY2DDZMFJkAYNNP8TCyygq3L2ST55qyqHhXXkxRtW6n2jRPy0hbU_Jw7Xn-G1Oie4F_bnbjFHLVkUpOHSxdRr57KakHF5qPUQ6lPGH4iqmg5x5x46aOUpoefxGEp0R68gFRLVXHY5jyMUzJ4V-VL1vWd_irpjKoGiWJvgVcV20uSkzAnNAt_si89pICNYjhIn8bB_1AQffFkLvilrWaiOqrvR2mgnu9w5XnmnEq-Twa28c7C6vAk_EI"/>
                </div>
              </div>

              {/* Highlight 3 */}
              <div className="relative pl-6 border-l border-outline-variant">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-error ring-4 ring-error/20"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-error">Community Goal</span>
                  <p className="text-sm font-medium leading-snug">Help curate the "Green Tech" repository. 15 spots left in the collaborator group.</p>
                  <button className="mt-2 w-full py-2 border border-outline-variant text-xs font-bold rounded-lg hover:bg-surface-variant transition-colors">Join Curation Group</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-surface-container-high/80 backdrop-blur-xl flex justify-around items-center py-4 px-6 z-50 border-t border-outline-variant/10">
        <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button onClick={() => navigate('/collections')} className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">bookmarks</span>
          <span className="text-[10px] font-bold">Saved</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
          <span className="text-[10px] font-bold">Community</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </nav>

      {/* Floating Action Button (Supressed on details, shown on community main) */}
      <button className="fixed bottom-24 right-8 md:bottom-8 md:right-8 w-14 h-14 bg-gradient-to-br from-primary to-primary-container rounded-2xl shadow-2xl flex items-center justify-center text-on-primary group hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform">add</span>
      </button>

    </div>
  );
};

export default Community;
