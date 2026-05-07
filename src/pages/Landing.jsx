import { useNavigate } from 'react-router-dom';
import gplogo from '../assets/gplogo.jpg';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface selection:bg-primary/30 min-h-screen">
    
      <nav className="fixed top-0 w-full z-50 bg-slate-50/60 dark:bg-zinc-950/60 backdrop-blur-xl shadow-sm dark:shadow-none">
        <div className="flex items-center justify-between px-6 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <img src={gplogo} alt="GitPins Logo" className="w-8 h-8 rounded-md object-cover" />
            <div className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 font-headline">GitPins</div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigate('/feed')} className="text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 dark:border-blue-400 pb-1 font-space-grotesk text-sm tracking-tight">Explore</button>
            <button onClick={() => navigate('/collections')} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-space-grotesk text-sm tracking-tight">Collections</button>
            <button onClick={() => navigate('/feed')} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-space-grotesk text-sm tracking-tight">Trending</button>
            <button onClick={() => navigate('/community')} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-space-grotesk text-sm tracking-tight">Community</button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-5 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all">Log In</button>
            <button onClick={() => navigate('/feed')} className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-full text-sm hover:scale-95 transition-all duration-150 ease-in-out">Sign Up</button>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/50 to-transparent dark:via-zinc-800/50"></div>
      </nav>
      
      <main className="pt-32">
       
        <section className="max-w-screen-2xl mx-auto px-6 mb-32">
          <div className="editorial-grid">
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-on-surface leading-[0.9]">
                The Gallery for <br/> <span className="text-primary italic">Crafted</span> Logic.
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
                Move beyond files. Treat your code as an artifact. Curate, showcase, and discover the web's most elegant repositories in a workspace designed for visual builders.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <button onClick={() => navigate('/feed')} className="px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-full text-lg shadow-lg shadow-primary/20 active:scale-95 transition-all">
                  Start Curating
                </button>
                <button onClick={() => navigate('/feed')} className="px-10 py-5 bg-surface-variant/10 border border-outline-variant/20 text-on-surface font-semibold rounded-full text-lg hover:bg-surface-variant/20 transition-all flex items-center gap-2">
                  View Showcase <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
            
            <div className="col-span-12 lg:col-span-5 relative mt-10 lg:mt-0">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-low shadow-2xl relative group">
                <img alt="abstract flowing blue and purple 3d geometric shapes with soft studio lighting and deep shadows" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqEf_liKM89X7W6v1tw5dNIKM36XsIWddnmHTS840njUfjTkCn7bft097GsL0qXGW7izzdNscjWLVWORxELCXg9KGOx4yHo-5WoFCXnBZ1-mKpFFRlMTBcesIv7Aemq5-xOQurv0H4THqEFDp4_XTgGJYetOG_x-_iZ0puMWRaa714IPGaBaeoFWdVEvIHAMdNpKtOFCduwMtBQKEQP6tiFHJw2o_uiduzh5cpQQCMDifR8m9eWYdA1Gt_WPXPcNcZjbGwUCuDGxs4"/>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-surface-container/60 backdrop-blur-xl rounded-xl border border-outline-variant/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-secondary"></div>
                    <span className="font-mono text-xs text-secondary tracking-widest uppercase">Verified Curator</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-2">Modern-Stack-v4</h3>
                  <p className="text-on-surface-variant text-sm font-body">A curated collection of React + Rust microservices.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trending Pins: Bento Grid */}
        <section className="max-w-screen-2xl mx-auto px-6 mb-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4 block">Selection</span>
              <h2 className="font-headline text-4xl font-bold tracking-tight">Trending Pins</h2>
            </div>
            <button onClick={() => navigate('/feed')} className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-medium">
              Explore all <span className="material-symbols-outlined">north_east</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Pin */}
            <div className="md:col-span-2 bg-surface-container-low p-8 rounded-2xl group hover:bg-surface-container-high transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-12">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-tertiary-container/20 text-tertiary-dim text-xs font-mono rounded-md">TYPESCRIPT</span>
                  <span className="px-3 py-1 bg-secondary-container/20 text-secondary-dim text-xs font-mono rounded-md">ARCHITECTURE</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">push_pin</span>
              </div>
              <div className="mt-auto">
                <h3 className="font-headline text-3xl font-bold mb-4">helios-engine-core</h3>
                <p className="text-on-surface-variant mb-8 max-w-md">A real-time lighting engine built for the next generation of web-based 3D applications. Optimized for low-latency PBR rendering.</p>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="font-mono text-sm">12.4k</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">fork_right</span>
                    <span className="font-mono text-sm">892</span>
                  </div>
                  <div className="ml-auto flex -space-x-3">
                    <div className="w-8 h-8 rounded-full border-2 border-surface-container-low bg-surface-variant"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-surface-container-low bg-primary"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-surface-container-low bg-secondary"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Small Pin 1 */}
            <div className="bg-surface-container-low p-8 rounded-2xl group hover:bg-surface-container-high transition-all duration-300">
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 bg-surface-container-highest">
                <img alt="abstract close-up of computer circuit board" className="w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFhNSg67dFHyJdrnquEXKiF0RQbEEbUOrVpWHdReKktvPFBH45hVa2LFq89SWAWS20THvO2wEee6lri1VId5aB2arMvW2Bi4sfwSpaWjDHamStRb47VUS9gNK2-kx6GrUXsoCab8TH37FPp4m5Ao5qZjn6FwN8E6fq2waDQUip9Q7czet83L8C_lrPDZoscU8ujlmR86H2YzfW2gQ87EfbR_tXQKlXhj9f092YyFhJoaB7z_1hfF5uC7GgtdKUcpNXCDNZMWWu-LgZ"/>
              </div>
              <h4 className="font-headline text-xl font-bold mb-2">crypto-vault-sdk</h4>
              <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">High-security primitives for modern fintech stacks.</p>
              <div className="flex items-center justify-between">
                <span className="text-secondary text-xs font-mono uppercase tracking-widest">Active Build</span>
                <span className="material-symbols-outlined text-on-surface-variant">more_horiz</span>
              </div>
            </div>
            
            {/* Small Pin 2 */}
            <div className="bg-surface-container-low p-8 rounded-2xl group hover:bg-surface-container-high transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold">dotfiles-premium</h4>
                  <span className="text-xs text-on-surface-variant">v2.1.0</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm mb-6">The ultimate shell configuration for productivity-obsessed developers.</p>
              <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden mb-4">
                <div className="h-full bg-primary w-[80%]"></div>
              </div>
              <div className="flex justify-between text-[10px] font-mono uppercase text-on-surface-variant">
                <span>LUA 80%</span>
                <span>BASH 20%</span>
              </div>
            </div>
            
            {/* Medium Pin */}
            <div className="md:col-span-2 bg-surface-container-low p-8 rounded-2xl group hover:bg-surface-container-high transition-all duration-300 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <span className="text-primary text-xs font-mono mb-4 block">COLLECTION FAVORITE</span>
                <h3 className="font-headline text-2xl font-bold mb-4">nebula-design-system</h3>
                <p className="text-on-surface-variant text-sm mb-6">A token-driven design system framework for complex enterprise dashboards.</p>
                <button className="px-6 py-2 border border-outline-variant/30 rounded-full text-sm hover:border-primary/50 transition-colors">
                  Explore Assets
                </button>
              </div>
              <div className="hidden md:grid grid-cols-2 gap-2 flex-1 w-full">
                <div className="aspect-video bg-surface-container-highest rounded-lg border border-outline-variant/10 overflow-hidden">
                  <img alt="vibrant abstract gradient background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARe3Uk4myquNWr-3V9wzcVkcTr3Vu2I7fzQc1K3nQ5gZMayXOKEEU2gfrSsOlvwE5YZ8ghCYTNWYop6Y9wzFWIsOm63rKGMhPlY5qYYntmtdIReAfkMIZr9sEgT-Jya3RjFTRQM6wgldXly5gQdRm6ylqla5pDwo3MCwHuhpF6_64YGzdwhWKOqOrr8NoTM8TcxLrHLp0J8vLQHtOIytJIcZcMi8NyyfCVhNBDx0F0Xf86ilSFvCx8EkHwUKHb-fCEEF_t5EBkkQwR"/>
                </div>
                <div className="aspect-video bg-surface-container-highest rounded-lg border border-outline-variant/10 overflow-hidden">
                  <img alt="minimalist abstract background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwR2wiMmQsuJ7tbIemstH60di8nGqIZPE1TMny7ta50A_7n5okzIF2bqGWaDW163dT9TYmMOLkKvVynVj7igQ2SrmnuIidXTrQl5q3LUSC6WEZT_2cz2c4vyJZNAvBqiW9Qx8JnYDWpSEBgAv9AvKznZS8FqJcUvUEpguzq6ueXXZ766M7x8Rxlqf2aRb1fH6CRL7tCDaEs1oETqk6mxSHihHpIDs-4gmKq7LYRhRUIWyvJnoSB_GB1rlZlGlJed4TdDzulmuvSxFf"/>
                </div>
                <div className="aspect-video bg-surface-container-highest rounded-lg border border-outline-variant/10 overflow-hidden">
                  <img alt="dark abstract background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEFOnnxJM06ir7SJU5gqhOU_sGr_cqdshjx5jX3Ufy4r_gfuG0jE4yLFvH1xzw-soxK3SaKBTTeXsUhiuKGb4Kc49QvQENS1YVDLTwep2c0mHZhY1o3rcNfantkXuhFKDY9Imsb8YfbvOfgstplKiIi4_omtskFskL07ay274g3wDaagx0wQU86UByAZQ3NyZ44C7aW5Jk9LRF0BLWRSfFla_0whP1qv8ceAEFhBBOHqOTxMTMiPGF4KjeN7N3fkv_a7FmvUjK3h8B"/>
                </div>
                <div className="aspect-video bg-surface-container-highest rounded-lg border border-outline-variant/10 overflow-hidden">
                  <img alt="soft ethereal gradient background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxzJBASA7xm0h3sqxW84y1lrAb6kfdG3-zZ-53Hx9eTs7UeNvIl-EqHefgNA9ibqLNQZrqih1uQ8IrLGVVct98yfn9kSJnnmD5Cv_mBHtCdNtEIZ-odzL-IhjKhZEuQdLpyJGpueD7IE714hUjFjsFKCPBwIA8mqlZxNRRSZQ93AjIDkp_mkPodtw1m9-jZF2IrwLbyaIWXNP_m55u8j7brVSwVKURV2hzFtMEqhDNF52ciaaArLbgwFAwE3DCCcQTqFOoTLQP9i_G"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Boards */}
        <section className="bg-surface-container-low/30 py-32 border-y border-outline-variant/5">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">Curated Boards</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Communities are building the future of the web, organized into themed collections of high-impact codebases.</p>
            </div>
            <div className="editorial-grid">
              {/* Board Card 1 */}
              <div className="col-span-12 md:col-span-4 bg-surface-container rounded-2xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300">
                <div className="h-48 relative">
                  <img alt="satellite view of earth at night" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqujNRPrkmkwP7ir-y0-H7SWhWCUaL62KE81GJJfqE8i88ykCmI6z9mFqPilTkFOW2P3pSBY0UQ0jWxdEASqB4mOPu2zT5C5KbrfK22y9Pgkb3mbGGwYgJfzVec3mNvzs2gFFKbYDqSdh1Hsz6UaGLM5Jp2HpibvR27ctXhnQPSedRbgqwEH5ZH9dKlQNN9UBnPFi2BVUikhddgEvG3hOy9RiDi6_GuBgQYZ0jR44jBwzNcOoM3BRfJ7mTpZROecFaDO9XmKrPIOAc"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
                </div>
                <div className="p-8">
                  <h4 className="font-headline text-2xl font-bold mb-2">The Web3 Frontier</h4>
                  <p className="text-on-surface-variant text-sm mb-6">Protocols, smart contracts, and dApp boilerplates defining the decentralized web.</p>
                  <div className="flex items-center justify-between border-t border-outline-variant/10 pt-6">
                    <span className="text-xs font-mono uppercase text-on-surface-variant">42 PINS</span>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-primary border border-surface"></div>
                      <div className="w-6 h-6 rounded-full bg-tertiary border border-surface"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Board Card 2 */}
              <div className="col-span-12 md:col-span-4 bg-surface-container rounded-2xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300">
                <div className="h-48 relative">
                  <img alt="abstract close-up of colorful code lines" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVwqJK3CagsnJCibhX888rPKwWJdb5fpfRd-rExyMu-tzl3lPW94C8egJg4HTjTDeTcgIVTxHnFs3cgHOkQTOULonNLd1g11J59uOMTPHYx7n3uIYLgurXmh1b0TfUU8V-id3Mfc11Tvm7E25wuvVNPG9_aedhWC_EIgbUaq40k_bXhn3FvaKlddM0hDcr5QdUSn3bI0Dse4IJsEWE4tSSWikiuoY_USxz0W6gV3FeeXg0L1gSXHgB_8jDa5rvNEVtOAVVQ0A8RiAp"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
                </div>
                <div className="p-8">
                  <h4 className="font-headline text-2xl font-bold mb-2">Next-Gen Rust</h4>
                  <p className="text-on-surface-variant text-sm mb-6">Blazing fast binaries and safety-first systems programming artifacts.</p>
                  <div className="flex items-center justify-between border-t border-outline-variant/10 pt-6">
                    <span className="text-xs font-mono uppercase text-on-surface-variant">108 PINS</span>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-secondary border border-surface"></div>
                      <div className="w-6 h-6 rounded-full bg-primary border border-surface"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Board Card 3 */}
              <div className="col-span-12 md:col-span-4 bg-surface-container rounded-2xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300">
                <div className="h-48 relative">
                  <img alt="artistic interpretation of digital data flowing through space" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeYciOzGz0bHa_qa1lUYAu0UrhHY7QeuAmAY_rorV3EfwUwdaYZn95iTtPROh1qM5N8wVucYeGKVEHmM_0IpqW2Gufk_seslOdkLHYdFDpV3S6SjuwAAaImZaQOwUXRlm9SRSl17A5RucPE5fbHjwaXHylbiJ8Fh8f5SWCEdLQQjI8jzvTgL97XvXHa51cqQGy4S6qYsO5wVHXRjWOC72-EuZtfYo6Sg0fbu8cKf3LH8K-jjXGVgSp6rWEDelJ2ybNRjMX6WNCIVHj"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
                </div>
                <div className="p-8">
                  <h4 className="font-headline text-2xl font-bold mb-2">UI Artifacts</h4>
                  <p className="text-on-surface-variant text-sm mb-6">The most visually stunning component libraries and animation engines.</p>
                  <div className="flex items-center justify-between border-t border-outline-variant/10 pt-6">
                    <span className="text-xs font-mono uppercase text-on-surface-variant">76 PINS</span>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-tertiary border border-surface"></div>
                      <div className="w-6 h-6 rounded-full bg-secondary border border-surface"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
     
        <section className="max-w-screen-2xl mx-auto px-6 py-40">
          <div className="relative bg-surface-container-highest rounded-3xl overflow-hidden p-12 md:p-24 text-center">
      
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8 relative z-10 leading-[1.1]">
              Stop scrolling. <br/> Start <span className="text-primary italic">curating</span>.
            </h2>
            <p className="text-on-surface-variant text-xl max-w-xl mx-auto mb-12 relative z-10">
              Join 50,000+ developers who treat their repo discovery as a high-end editorial experience.
            </p>
            <div className="flex justify-center relative z-10">
              <button onClick={() => navigate('/feed')} className="px-12 py-6 bg-on-surface text-surface font-bold rounded-full text-xl hover:scale-95 transition-all">
                Create Your First Pin
              </button>
            </div>
          </div>
        </section>
      </main>
      

      <footer className="w-full border-t-0 mt-20 bg-slate-50 dark:bg-zinc-950">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full border-t border-slate-100 dark:border-zinc-900">
          <div className="mb-8 md:mb-0">
            <div className="text-lg font-black text-slate-900 dark:text-slate-50 font-headline mb-4 flex items-center gap-2">
              <img src={gplogo} alt="GitPins Logo" className="w-6 h-6 rounded object-cover" />
              GitPins
            </div>
            <p className="font-inter text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 max-w-xs text-center md:text-left">
              © 2026 GitPins. Curated for the modern builder.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <button className="font-inter text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors underline underline-offset-4 decoration-blue-500/30">Manifesto</button>
            <button className="font-inter text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors underline underline-offset-4 decoration-blue-500/30">Open Source</button>
            <button className="font-inter text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors underline underline-offset-4 decoration-blue-500/30">Privacy</button>
            <button className="font-inter text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors underline underline-offset-4 decoration-blue-500/30">Terms</button>
            <button className="font-inter text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors underline underline-offset-4 decoration-blue-500/30">API</button>
            <button className="font-inter text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors underline underline-offset-4 decoration-blue-500/30">Status</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
