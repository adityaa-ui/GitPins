import { useNavigate } from 'react-router-dom';
import gplogo from '../assets/gplogo.jpg';

const Collections = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* Desktop Side Navigation */}
      <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container-low p-4 gap-2 z-40 border-r border-outline-variant/10">
        <div className="mb-8 px-4 flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center overflow-hidden">
            <img src={gplogo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="block font-display text-xl font-bold text-on-surface">GitPins</span>
            <span className="block font-body text-label-md text-on-surface-variant opacity-60">The Digital Curator</span>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          <button onClick={() => navigate('/')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 transition-all duration-300 ease-in-out font-body text-label-md rounded-xl">
            <span className="material-symbols-outlined">grid_view</span> Home
          </button>
          <button onClick={() => navigate('/collections')} className="w-full flex items-center gap-3 px-4 py-3 bg-surface-container-high text-primary rounded-xl font-bold transition-all duration-300 ease-in-out font-body text-label-md">
            <span className="material-symbols-outlined">bookmarks</span> Collections
          </button>
          <button onClick={() => navigate('/feed')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 transition-all duration-300 ease-in-out font-body text-label-md rounded-xl">
            <span className="material-symbols-outlined">trending_up</span> Trending
          </button>
          <button onClick={() => navigate('/community')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 transition-all duration-300 ease-in-out font-body text-label-md rounded-xl">
            <span className="material-symbols-outlined">group</span> Community
          </button>
        </nav>
        <div className="mt-8 px-4">
          <button className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-full transition-transform active:scale-95 duration-200">
            New Collection
          </button>
        </div>
        <div className="mt-auto flex flex-col gap-1 pt-4 border-t border-outline-variant/10">
          <button className="w-full flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant/30 transition-all duration-300 ease-in-out font-body text-label-md rounded-xl">
            <span className="material-symbols-outlined">description</span> Docs
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant/30 transition-all duration-300 ease-in-out font-body text-label-md rounded-xl">
            <span className="material-symbols-outlined">help</span> Support
          </button>
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl flex justify-between items-center px-6 py-4 border-b border-outline-variant/10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <img src={gplogo} alt="Logo" className="w-8 h-8 rounded object-cover" />
          <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">GitPins</span>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-primary">notifications</span>
          <span className="material-symbols-outlined text-primary">settings</span>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="md:ml-64 min-h-screen pt-20 md:pt-0">
        {/* Hero Section & Filters */}
        <section className="px-8 md:px-12 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-4">Curated Artifacts</h1>
              <p className="text-on-surface-variant text-lg font-body leading-relaxed">Discover hand-picked collections of the most impactful codebases and digital craftsmanship from creators across the globe.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-6 py-2 bg-primary text-on-primary font-bold rounded-full text-sm transition-transform active:scale-95">All Picks</button>
              <button className="px-6 py-2 bg-surface-container-high text-on-surface-variant hover:text-on-surface font-medium rounded-full text-sm transition-colors">My Collections</button>
              <button className="px-6 py-2 bg-surface-container-high text-on-surface-variant hover:text-on-surface font-medium rounded-full text-sm transition-colors">Followed</button>
              <button className="px-6 py-2 bg-surface-container-high text-on-surface-variant hover:text-on-surface font-medium rounded-full text-sm transition-colors">Staff Picks</button>
            </div>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {/* Collection Card 1 */}
            <div className="group flex flex-col gap-6 p-1 bg-transparent transition-all duration-500">
              <div className="relative h-80 w-full perspective-[1000px]">
                {/* Stacked Preview Elements */}
                <div className="absolute inset-0 bg-surface-container-highest rounded-xxl shadow-2xl transition-transform duration-500 group-hover:-translate-y-6 group-hover:rotate-1 z-10 p-6 flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-start">
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-md text-[10px] font-mono">NEOVIM / LUA</span>
                    <span className="material-symbols-outlined text-on-surface-variant/40">terminal</span>
                  </div>
                  <img className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" alt="NeoVim Rice" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIgeOz46oPPaTB-D5T-GiX6bp5aznGyqwrre8TRSG9Dk83-pPZ-jLFjEXZvfYawNAYM-wD-AIzVvCE7E32a_Pqih5-IuOjNAG4dhLUdgVKvCGgV06FKeJEOvhu4XUv3D1KzerkRyDSkKZ5MxqH_gQ6SG6QyMqalg8dMrGcYsmlbh41DTqWYJ-q8hRgw5d9heVM3XnS_o5e5Fh5nTmGrt6QyZwcWD__popg23Rt4bpbK1N5_yntZcFuvjglKAE1J2ImMmD_QL5-vhOE"/>
                  <div className="relative z-20">
                    <h3 className="font-display text-2xl font-bold mb-2">NeoVim Rice</h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2">A masterclass in terminal aesthetics. These configurations prioritize extreme efficiency with a minimalist visual footprint.</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-surface-container-high rounded-xxl shadow-xl translate-y-3 scale-[0.97] z-[5] transition-transform duration-500 group-hover:translate-y-2"></div>
                <div className="absolute inset-0 bg-surface-container rounded-xxl shadow-lg translate-y-6 scale-[0.94] z-[0] transition-transform duration-500 group-hover:translate-y-4"></div>
              </div>
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Alex Rivera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKd8diMBZgH0gzPaoMkMRB5_drwdXAChDejUG81fVwwvf42e9MglisbhGZEIoC-OVpYKSJMY8EM1mxFqPIuecihXM71g9mUCYx11UTDKQ_pfySUFZSPyi5D0sgzJSOn7XkFjCyNT0l3c9afRJIV-EWE4qBFO1fvFRRpzGgEnlzBUMJfLMChczIrAakT9fKNqtQVR50_r9xAac9Pd-6lwxJt5Tip1c4Zh1Hg_z4Eg0lGlsXQVRCBNlw5x_7tGwr0aU9ODGPV3cm3TzQ"/>
                  </div>
                  <div>
                    <span className="block text-sm font-bold">Alex Rivera</span>
                    <span className="block text-xs text-on-surface-variant">12 Repositories</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-surface-variant/20 hover:bg-surface-variant/40 text-primary font-bold rounded-full text-sm transition-all border border-outline-variant/20 active:scale-95">Follow</button>
              </div>
            </div>

            {/* Collection Card 2 */}
            <div className="group flex flex-col gap-6 p-1 bg-transparent transition-all duration-500">
              <div className="relative h-80 w-full perspective-[1000px]">
                <div className="absolute inset-0 bg-surface-container-highest rounded-xxl shadow-2xl transition-transform duration-500 group-hover:-translate-y-6 group-hover:-rotate-1 z-10 p-6 flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-start">
                    <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-md text-[10px] font-mono">RUST / CLI</span>
                    <span className="material-symbols-outlined text-on-surface-variant/40">memory</span>
                  </div>
                  <img className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" alt="Rust CLI Tools" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAT4vqHsbI2JXyy5RFXOn5bibJtVEBtnNLEbh04B0dLGg5n5KEHrziSOauqoDBwGVeMcycJqVcZoJHWCiUG1VdgOzq7O1y5lngnbOc7hPo0qCzSGSwhv_hdB6TtLIP6OTRthsctkcnY1H1y9HwKveamoGMsymgnCd4CckgYfVMQ8j1Tu9NlqabSx_vD8rNzaSbRfokUP2XH8en17bfyFNO1-XsVFL-GOn1qIdX_uszXHVVIPVFECVjyBTDOpAxvlS_p2Bq4ylvi9QV"/>
                  <div className="relative z-20">
                    <h3 className="font-display text-2xl font-bold mb-2">Rust CLI Tools</h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2">Blazingly fast alternatives to standard UNIX utilities. Memory safety meets incredible terminal performance.</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-surface-container-high rounded-xxl shadow-xl translate-y-3 scale-[0.97] z-[5] transition-transform duration-500 group-hover:translate-y-2"></div>
                <div className="absolute inset-0 bg-surface-container rounded-xxl shadow-lg translate-y-6 scale-[0.94] z-[0] transition-transform duration-500 group-hover:translate-y-4"></div>
              </div>
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Elena Vance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFwkPZW0mstozWdmojeEGY81cck2MQnmR3G1rfljOhcXRHIyC-p4ajS2Sn4iTkakK20DRPHhNceEQ8JDxvB0-L_H1Fjlp-hQzEshg7F-pXw_alu1gtnZQsWy8Bgie7cbUsnsm62j3dI2yIdz0XARglopG2xDjbfDmw-O3_Ri-rcoKL5WZ9nL5uNdmhfxG3m4gtsZJLy7M71W2QoBfW90iiqiGyUu1sXz9Kr2KAgAoag-Wcv11i4xbEntEEAsfCO3HzORdNyT_xjFzo"/>
                  </div>
                  <div>
                    <span className="block text-sm font-bold">Elena Vance</span>
                    <span className="block text-xs text-on-surface-variant">42 Repositories</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-surface-variant/20 hover:bg-surface-variant/40 text-primary font-bold rounded-full text-sm transition-all border border-outline-variant/20 active:scale-95">Follow</button>
              </div>
            </div>

            {/* Collection Card 3 */}
            <div className="group flex flex-col gap-6 p-1 bg-transparent transition-all duration-500">
              <div className="relative h-80 w-full perspective-[1000px]">
                <div className="absolute inset-0 bg-surface-container-highest rounded-xxl shadow-2xl transition-transform duration-500 group-hover:-translate-y-6 group-hover:rotate-1 z-10 p-6 flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-start">
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-md text-[10px] font-mono">JS / CANVAS</span>
                    <span className="material-symbols-outlined text-on-surface-variant/40">draw</span>
                  </div>
                  <img className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" alt="Creative Web" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvN-b6-Cb-9Rm0aP7Bc0T6PwTWsPUGTVaBvTXpZyRU13Bu9nJ2dSaosBqQjQpERAyna1NGfjNQ3PUMWUs9fVPCzmSYVxB3lVzI5Aw0hY3KPAokC1Ss9L_kfUJf5VgYoF2YboTguWBhtn-V5uJE0AYdF0ZCjkUS2DmNocwY4Blhbh-gFPLt16Ajx7mAdqTE_LS-wjp53ykEpIjyrPi8sFKbeat-ISynOkVZ_WHwR-Qv0agN_NHzwxb1RRgIZOfe827b8TOiImg67z5E"/>
                  <div className="relative z-20">
                    <h3 className="font-display text-2xl font-bold mb-2">Creative Web</h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2">Repositories that push the boundaries of what's possible in a browser, from WebGL to complex SVG animations.</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-surface-container-high rounded-xxl shadow-xl translate-y-3 scale-[0.97] z-[5] transition-transform duration-500 group-hover:translate-y-2"></div>
                <div className="absolute inset-0 bg-surface-container rounded-xxl shadow-lg translate-y-6 scale-[0.94] z-[0] transition-transform duration-500 group-hover:translate-y-4"></div>
              </div>
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Marcus Thorne" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8dFIC-HxtsJi2Y5ZjTJUI45a52DcZamY9s4WTFYiEDrnNdtWohqouNXP1C7rWdtzjywc5uKZseAupSb-Bq8nc4xD-yHakw6kfUCfAlQz2auh8KzkpITT950Ds39SR7jZPsir83hHvko8mByB1YS5aDAWvIGpp0Kvi5uBvMVIaOuuGKumppiwbYliDrh_34LwoTLLGvSd9Mc6dAzxbijNLXqqzTqO_cvZ2p_j4gskoFTw1WUMTpi_WZd0SimN_k9F0ujR7kCeJSRaC"/>
                  </div>
                  <div>
                    <span className="block text-sm font-bold">Marcus Thorne</span>
                    <span className="block text-xs text-on-surface-variant">28 Repositories</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-surface-variant/20 hover:bg-surface-variant/40 text-primary font-bold rounded-full text-sm transition-all border border-outline-variant/20 active:scale-95">Follow</button>
              </div>
            </div>

            {/* Collection Card 4 (Staff Pick) */}
            <div className="group flex flex-col gap-6 p-1 bg-transparent transition-all duration-500">
              <div className="relative h-80 w-full perspective-[1000px]">
                <div className="absolute inset-0 bg-gradient-to-br from-surface-container-highest to-surface-container-low rounded-xxl shadow-2xl transition-transform duration-500 group-hover:-translate-y-6 group-hover:-rotate-1 z-10 p-6 flex flex-col justify-between overflow-hidden border border-primary/20">
                  <div className="flex justify-between items-start">
                    <span className="bg-primary text-on-primary px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">Staff Pick</span>
                    <span className="material-symbols-outlined text-primary">verified</span>
                  </div>
                  <div className="relative z-20">
                    <h3 className="font-display text-2xl font-bold mb-2">Modern Go Stack</h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2">The essential toolkit for scalable microservices. Proven patterns for logging, tracing, and high-performance routing.</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-surface-container-high rounded-xxl shadow-xl translate-y-3 scale-[0.97] z-[5] transition-transform duration-500 group-hover:translate-y-2"></div>
                <div className="absolute inset-0 bg-surface-container rounded-xxl shadow-lg translate-y-6 scale-[0.94] z-[0] transition-transform duration-500 group-hover:translate-y-4"></div>
              </div>
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
                    <img className="w-full h-full object-cover" alt="GitPins Curators" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe2cfVLeWeuoS4QJ-ITQEkBI8A-SDD49W80CY01HCRlQ-s11vhheUxzU02iRXoqEsmtyBhE8KeexPgIMm_kX6wF3N6X467Oa7SnbqNF-CeteNXU8-uAgka-G6ko66g0eA81MDQMXjQbEs8xDfYjFOW8PQD2sT6wRtuc7czaJKgF4SwUJ2GCkELwU3RojTfjReyCjZXjH3QlU3aCO8De1vLzgjtsp5_m_4tOJZH7wU6pl64noTguJVcsQBqrCc22nOXXm5If0u7MrPT"/>
                  </div>
                  <div>
                    <span className="block text-sm font-bold">GitPins Curators</span>
                    <span className="block text-xs text-on-surface-variant">15 Repositories</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-primary/10 text-primary font-bold rounded-full text-sm transition-all border border-primary/30 active:scale-95">Follow</button>
              </div>
            </div>

            {/* Collection Card 5 */}
            <div className="group flex flex-col gap-6 p-1 bg-transparent transition-all duration-500">
              <div className="relative h-80 w-full perspective-[1000px]">
                <div className="absolute inset-0 bg-surface-container-highest rounded-xxl shadow-2xl transition-transform duration-500 group-hover:-translate-y-6 group-hover:rotate-1 z-10 p-6 flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-start">
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-md text-[10px] font-mono">AI / LLM</span>
                    <span className="material-symbols-outlined text-on-surface-variant/40">psychology</span>
                  </div>
                  <img className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" alt="Self-Hosted LLMs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaNBb7jEoWkCVFdJg86NCcRBMwd3SO8QBrYvzc98KTiYSnca7EsDnNBjRCE_01fmu2bsUYDJSsS7WpyMyKIPikj3wYi-8kYdUNGzvZXl6NZqdm4MNWZrLw3u9UGUYbCDcL4a23Abz8StKKeCN8BCw_H57gDMEAYVLd5xLfGOuisqzFOfHMyQw0wVpuTMHo9Tb2A-rPUbuH7aLkb98VncIa97S8BM_-0AQe8eR-TO5BF_nMPnvLeWXGo9LgpIdko4W9Rhl5Co3YD8P0"/>
                  <div className="relative z-20">
                    <h3 className="font-display text-2xl font-bold mb-2">Self-Hosted LLMs</h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2">Taking control of your AI stack. Best repositories for running Llama 3, Mistral, and more on consumer hardware.</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-surface-container-high rounded-xxl shadow-xl translate-y-3 scale-[0.97] z-[5] transition-transform duration-500 group-hover:translate-y-2"></div>
                <div className="absolute inset-0 bg-surface-container rounded-xxl shadow-lg translate-y-6 scale-[0.94] z-[0] transition-transform duration-500 group-hover:translate-y-4"></div>
              </div>
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Sarah Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3tipXFUVYHME5YN4pPaepr6STtbVhrVkF48HjGfPWY5aPquxiJZl7JsPNUthjBeaEr5nlwbx1LfiIL1AgUiDrBoAIsLVcrtHYtKXyb0Q-R9t6MAubCeQt8xQ4ey5xbmgVtCx-HwVOhtp325dvi9hG5SvRsjCnW0rPwoRQgBExS9CpxYwst6HZ8BOCZw4qL3dXT7m93pd8GoEBWASWZNbgGDiV7eliREew7g4XlrTh-aDB5TWYB2NcGIa7dYEhsRCm3FjcLgpkI3Ay"/>
                  </div>
                  <div>
                    <span className="block text-sm font-bold">Sarah Chen</span>
                    <span className="block text-xs text-on-surface-variant">19 Repositories</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-surface-variant/20 hover:bg-surface-variant/40 text-primary font-bold rounded-full text-sm transition-all border border-outline-variant/20 active:scale-95">Follow</button>
              </div>
            </div>

            {/* Collection Card 6 */}
            <div className="group flex flex-col gap-6 p-1 bg-transparent transition-all duration-500">
              <div className="relative h-80 w-full perspective-[1000px]">
                <div className="absolute inset-0 bg-surface-container-highest rounded-xxl shadow-2xl transition-transform duration-500 group-hover:-translate-y-6 group-hover:-rotate-1 z-10 p-6 flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-start">
                    <span className="bg-error/10 text-error px-3 py-1 rounded-md text-[10px] font-mono">DOTFILES / ARCH</span>
                    <span className="material-symbols-outlined text-on-surface-variant/40">settings_input_component</span>
                  </div>
                  <img className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" alt="Bare Metal Linux" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWhrXliXqkWCX3z2HCa5C7JxgafTEXBBN80P7snTs-HCaq-jYgv8lmiN0djRFDbZfwl-BnORFJx_-GVGFq5srPrrgbT9ArVLk-_KUUUPJkFE0IIzQrX7yW06c6-hYPvWFsY50yDWD2VQDDQHo4Nfei-QYYc2bTLi9FZscASc7Xq5PTcRJrBRKQ8LJCf_D3eZYwoR_4MD40OjmRlTvk-kOMZBXL5mqFtbB4UjyGFBpMc04wlITbFmV56-OZ_U_LFXhkN5aQnXRok7b2"/>
                  <div className="relative z-20">
                    <h3 className="font-display text-2xl font-bold mb-2">Bare Metal Linux</h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2">Configurations for the purists. Optimized scripts and dotfiles for high-efficiency tiling window managers.</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-surface-container-high rounded-xxl shadow-xl translate-y-3 scale-[0.97] z-[5] transition-transform duration-500 group-hover:translate-y-2"></div>
                <div className="absolute inset-0 bg-surface-container rounded-xxl shadow-lg translate-y-6 scale-[0.94] z-[0] transition-transform duration-500 group-hover:translate-y-4"></div>
              </div>
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Liam Foster" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-LsHM9BB8TlP9jF68JFGuZVjLGCg5Y2296jzTFJUaQqTmcqueZPjpZnzXFZDGgPIOvpxAJppZCJ0b65uDhAQuPRqSkg44i9PaWupQfbE7kL-rsZmK6P2Li1Hjd_XoIBOWIeugNiW2oJkQSnRPlk1VwvMXtGaOF-G7TcqDNG3r064Sh4_iNDSOX_YOnO6XjUpvUn8pRgdgX06VqiDVGlAJjwApggkH_4fGZcvALavN_s94UU9CgHqNoYqwyMRrKT8QrTP6XaHYqWqJ"/>
                  </div>
                  <div>
                    <span className="block text-sm font-bold">Liam Foster</span>
                    <span className="block text-xs text-on-surface-variant">33 Repositories</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-surface-variant/20 hover:bg-surface-variant/40 text-primary font-bold rounded-full text-sm transition-all border border-outline-variant/20 active:scale-95">Follow</button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section Asymmetric */}
        <section className="px-8 md:px-12 py-24 bg-surface-container-low/50 border-t border-outline-variant/5">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full mb-6 uppercase tracking-wider">Curator Spotlight</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">The High-End Web Stack</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">Selected by <strong>Julia DeBrier</strong>, this collection represents the gold standard for full-stack applications in 2024. Featuring Next.js 14, Drizzle ORM, and high-performance edge computing utilities.</p>
              <div className="flex gap-4">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold transition-transform active:scale-95 duration-200">View Collection</button>
                <button className="bg-surface-container-highest text-on-surface px-8 py-3 rounded-full font-bold transition-transform active:scale-95 duration-200 hover:bg-surface-container-high transition-colors">Follow Julia</button>
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2 w-full">
              <div className="relative bg-surface-container rounded-xxl overflow-hidden p-4 group">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface p-4 rounded-xl shadow-lg transform group-hover:-rotate-2 transition-transform duration-500">
                    <div className="w-8 h-8 rounded bg-primary-container/20 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-primary text-sm">code</span>
                    </div>
                    <div className="h-2 w-12 bg-on-surface/10 rounded mb-2"></div>
                    <div className="h-2 w-20 bg-on-surface/5 rounded"></div>
                  </div>
                  <div className="bg-surface p-4 rounded-xl shadow-lg translate-y-8 transform group-hover:rotate-2 transition-transform duration-500">
                    <div className="w-8 h-8 rounded bg-secondary-container/20 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-secondary text-sm">storage</span>
                    </div>
                    <div className="h-2 w-16 bg-on-surface/10 rounded mb-2"></div>
                    <div className="h-2 w-10 bg-on-surface/5 rounded"></div>
                  </div>
                  <div className="bg-surface p-4 rounded-xl shadow-lg -translate-y-4 transform group-hover:rotate-1 transition-transform duration-500">
                    <div className="w-8 h-8 rounded bg-tertiary-container/20 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-tertiary text-sm">security</span>
                    </div>
                    <div className="h-2 w-14 bg-on-surface/10 rounded mb-2"></div>
                    <div className="h-2 w-24 bg-on-surface/5 rounded"></div>
                  </div>
                  <div className="bg-surface p-4 rounded-xl shadow-lg translate-y-4 transform group-hover:-rotate-1 transition-transform duration-500">
                    <div className="w-8 h-8 rounded bg-error-container/20 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-error text-sm">cloud</span>
                    </div>
                    <div className="h-2 w-18 bg-on-surface/10 rounded mb-2"></div>
                    <div className="h-2 w-12 bg-on-surface/5 rounded"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Bottom NavBar */}
      <nav className="md:hidden fixed bottom-0 w-full bg-surface-container-low/80 backdrop-blur-xl z-50 flex justify-around items-center px-4 py-3 border-t border-outline-variant/10">
        <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1 text-on-surface-variant transition-colors">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button onClick={() => navigate('/collections')} className="flex flex-col items-center gap-1 text-primary transition-colors">
          <span className="material-symbols-outlined font-bold" style={{fontVariationSettings: "'FILL' 1"}}>bookmarks</span>
          <span className="text-[10px] font-bold">Collections</span>
        </button>
        <button onClick={() => navigate('/feed')} className="flex flex-col items-center gap-1 text-on-surface-variant transition-colors">
          <span className="material-symbols-outlined">trending_up</span>
          <span className="text-[10px] font-medium">Trending</span>
        </button>
        <button onClick={() => navigate('/community')} className="flex flex-col items-center gap-1 text-on-surface-variant transition-colors">
          <span className="material-symbols-outlined">group</span>
          <span className="text-[10px] font-medium">Community</span>
        </button>
      </nav>

      {/* Fixed Floating Action Button (only on appropriate screens) */}
      <button className="fixed bottom-24 right-8 md:bottom-12 md:right-12 w-14 h-14 bg-gradient-to-tr from-primary to-primary-container text-on-primary rounded-full shadow-2xl flex items-center justify-center transition-transform active:scale-90 z-30 group">
        <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform duration-300">add</span>
      </button>

    </div>
  );
};

export default Collections;
