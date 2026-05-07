import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background font-sans text-[16px] font-normal leading-[1.5] antialiased overflow-x-hidden min-h-screen">
      <div className="fixed inset-0 grain-overlay z-[9999]"></div>
      
      {/* TopAppBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[40px] py-[8px] bg-surface/60 backdrop-blur-xl border-b border-outline/10">
        <div className="flex items-center gap-[32px]">
          <span className="font-mono text-[20px] font-bold leading-[1.4] tracking-[0.02em] tracking-tighter text-on-background uppercase cursor-pointer" onClick={() => navigate('/')}>GITPINS</span>
          <div className="hidden md:flex gap-[16px]">
            <button onClick={() => navigate('/feed')} className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-primary border-b-2 border-primary pb-1">EXPLORE</button>
            <button onClick={() => navigate('/collections')} className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-on-surface-variant hover:text-primary transition-colors">CURATIONS</button>
            <button onClick={() => navigate('/community')} className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-on-surface-variant hover:text-primary transition-colors">TERMINAL</button>
            <button onClick={() => navigate('/feed')} className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-on-surface-variant hover:text-primary transition-colors">AUTHORS</button>
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <button onClick={() => navigate('/feed')} className="px-[16px] py-[4px] bg-primary-container text-on-primary font-mono text-[12px] font-medium leading-none tracking-[0.1em] hover:bg-on-background transition-all duration-150 active:scale-95">OPEN_STUDIO</button>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:bg-secondary-container/50 p-[4px] transition-all">account_circle</span>
        </div>
      </nav>

      <main className="pt-[120px]">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-[40px] flex flex-col items-center text-center py-[64px]">
          <div className="inline-flex items-center gap-[4px] px-[8px] py-[4px] border border-outline/20 font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-primary mb-[32px]">
            <span className="material-symbols-outlined text-[14px]">terminal</span> [v.1.0.4-STABLE]
          </div>
          <h1 className="font-mono text-[64px] font-extrabold leading-[1.1] tracking-[-0.04em] text-on-background max-w-4xl mb-[16px]">
            The Pinterest for <span className="text-primary-container">Developers</span>
          </h1>
          <p className="font-sans text-[18px] font-normal leading-[1.6] text-on-surface-variant max-w-2xl mb-[64px]">
            Curation over endless search. Pin the most beautiful repositories, curate thematic boards, and explore code as a visual artifact.
          </p>
          <div className="flex gap-[16px] mb-[64px]">
            <button onClick={() => navigate('/feed')} className="px-[32px] py-[16px] bg-primary-container text-on-primary font-mono text-[12px] font-medium leading-none tracking-[0.1em] hover:bg-on-background transition-all">START_CURATING -&gt;</button>
            <button onClick={() => navigate('/feed')} className="px-[32px] py-[16px] border border-on-background text-on-background font-mono text-[12px] font-medium leading-none tracking-[0.1em] hover:bg-secondary-container/30 transition-all">VIEW_GALLERY</button>
          </div>
          
          {/* Hero Image / ASCII Visualization */}
         
        </section>

        {/* Bento Features */}
        <section className="bg-surface-container-low py-[64px]">
          <div className="max-w-7xl mx-auto px-[40px]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-[64px] gap-[16px]">
              <div className="max-w-xl">
                <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-primary uppercase mb-[8px] block">Core Capabilities</span>
                <h2 className="font-mono text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-on-background uppercase">Curation Reinvented</h2>
              </div>
              <p className="font-sans text-[16px] font-normal leading-[1.5] text-on-surface-variant max-w-xs">
                A digital workshop designed for the modern architect of code and logic.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
              {/* Card 1 */}
              <div className="md:col-span-8 border border-outline/10 bg-surface p-[32px] relative group">
                <div className="flex justify-between items-start mb-[64px]">
                  <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-primary">[01]</span>
                  <span className="material-symbols-outlined text-outline">architecture</span>
                </div>
                <h3 className="font-mono text-[20px] font-bold leading-[1.4] tracking-[0.02em] mb-[8px] uppercase">Semantic Pinning</h3>
                <p className="font-sans text-[16px] font-normal leading-[1.5] text-on-surface-variant max-w-sm mb-[32px]">
                  Go beyond bookmarks. Pin specific files, code snippets, or architecture diagrams with rich metadata.
                </p>
                <div className="w-full h-48 bg-surface-container overflow-hidden border border-outline/5">
                  <img className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" alt="Code editor" src="https://i.pinimg.com/1200x/ea/e9/13/eae913fd37cb9c066cd1a8b8c57c45a0.jpg"/>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="md:col-span-4 border border-outline/10 bg-primary-container p-[32px] text-on-primary flex flex-col justify-between">
                <div className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] mb-[64px]">[02]</div>
                <div>
                  <h3 className="font-mono text-[20px] font-bold leading-[1.4] tracking-[0.02em] mb-[8px] uppercase">Thematic Boards</h3>
                  <p className="font-sans text-[16px] font-normal leading-[1.5] opacity-90 mb-[32px]">
                    Organize your technical stack into visual collections. From 'Rust Microservices' to 'Beautiful Readmes'.
                  </p>
                  <button onClick={() => navigate('/collections')} className="w-full py-[16px] border border-white/30 font-mono text-[12px] font-medium leading-none tracking-[0.1em] hover:bg-white/10 transition-all">EXPLORE_BOARDS</button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="md:col-span-4 border border-outline/10 bg-surface p-[32px]">
                <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-primary mb-[64px] block">[03]</span>
                <h3 className="font-mono text-[20px] font-bold leading-[1.4] tracking-[0.02em] mb-[8px] uppercase">Visual Artifacts</h3>
                <p className="font-sans text-[16px] font-normal leading-[1.5] text-on-surface-variant mb-[32px]">
                  Render repository activity as high-fidelity ASCII art and heatmaps.
                </p>
                <div className="flex gap-[4px]">
                  <div className="w-2 h-2 bg-primary"></div>
                  <div className="w-2 h-2 bg-primary/60"></div>
                  <div className="w-2 h-2 bg-primary/20"></div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="md:col-span-8 border border-outline/10 bg-surface overflow-hidden relative group">
                <div className="p-[32px] relative z-10">
                  <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-primary mb-[64px] block">[04]</span>
                  <h3 className="font-mono text-[20px] font-bold leading-[1.4] tracking-[0.02em] mb-[8px] uppercase">Open Studio</h3>
                  <p className="font-sans text-[16px] font-normal leading-[1.5] text-on-surface-variant max-w-md">
                    Build your own curation tools or connect via our terminal-inspired API.
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                  <pre className="ascii-pattern text-[6px] p-[16px]">

                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curated Boards Showcase */}
        <section className="py-[64px]">
          <div className="max-w-7xl mx-auto px-[40px]">
            <div className="mb-[32px]">
              <h2 className="font-mono text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-on-background uppercase mb-[4px]">Featured Curations</h2>
              <div className="w-12 h-1 bg-primary-container"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
              {/* Board Item */}
              <div onClick={() => navigate('/collections')} className="flex flex-col gap-[8px] group cursor-pointer">
                <div className="aspect-square bg-surface-container-high border border-outline/5 overflow-hidden">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" alt="Keyboard" src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25469772/STK269_ANTHROPIC_A.jpg?quality=90&strip=all&crop=0,0,100,100"/>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-on-background">Anthropic</span>
                  <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-[10px] text-on-surface-variant">221 PINS</span>
                </div>
              </div>
              {/* Board Item */}
              <div onClick={() => navigate('/collections')} className="flex flex-col gap-[8px] group cursor-pointer">
                <div className="aspect-square bg-surface-container-high border border-outline/5 overflow-hidden">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" alt="Workspace" src="https://avatars.githubusercontent.com/u/133959746?s=200&v=4"/>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-on-background">Vectify AI</span>
                  <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-[10px] text-on-surface-variant">18 PINS</span>
                </div>
              </div>
              {/* Board Item */}
              <div onClick={() => navigate('/collections')} className="flex flex-col gap-[8px] group cursor-pointer">
                <div className="aspect-square bg-surface-container-high border border-outline/5 overflow-hidden">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" alt="Code" src="https://techcrunch.com/wp-content/uploads/2023/08/Finta-logo-2-1.png?resize=300,300"/>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-on-background">Finta</span>
                  <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-[10px] text-on-surface-variant">26 PINS</span>
                </div>
              </div>
              {/* Board Item */}
              <div onClick={() => navigate('/collections')} className="flex flex-col gap-[8px] group cursor-pointer">
                <div className="aspect-square bg-surface-container-high border border-outline/5 overflow-hidden">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" alt="Data center" src="https://amplitude.com/nextjs-public/amplitude-default-seo.png"/>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-on-background">Amplitude</span>
                  <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-[10px] text-on-surface-variant">89 PINS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-surface-container-lowest py-[64px] border-t border-outline/10">
          <div className="max-w-3xl mx-auto px-[40px]">
            <div className="text-center mb-[64px]">
              <h2 className="font-mono text-[32px] font-bold leading-[1.2] tracking-[-0.02em] uppercase mb-[8px]">Inquiry Terminal</h2>
              <p className="font-sans text-[16px] font-normal leading-[1.5] text-on-surface-variant">Commonly requested protocols and documentation.</p>
            </div>
            <div className="space-y-[8px]">
              <div className="border border-outline/10 p-[16px] flex justify-between items-center group cursor-pointer hover:bg-surface-container transition-colors">
                <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em]">01. IS_GITPINS_FREE?</span>
                <span className="material-symbols-outlined text-outline">add</span>
              </div>
              <div className="border border-outline/10 p-[16px] flex justify-between items-center group cursor-pointer hover:bg-surface-container transition-colors">
                <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em]">02. EXPORT_FORMATS_SUPPORTED?</span>
                <span className="material-symbols-outlined text-outline">add</span>
              </div>
              <div className="border border-outline/10 p-[16px] flex justify-between items-center group cursor-pointer hover:bg-surface-container transition-colors">
                <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em]">03. DATA_PRIVACY_COMPLIANCE?</span>
                <span className="material-symbols-outlined text-outline">add</span>
              </div>
              <div className="border border-outline/10 p-[16px] flex justify-between items-center group cursor-pointer hover:bg-surface-container transition-colors">
                <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em]">04. API_ACCESS_LEVELS?</span>
                <span className="material-symbols-outlined text-outline">add</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-[64px]">
          <div className="max-w-7xl mx-auto px-[40px]">
            <div className="bg-on-background p-[64px] text-surface flex flex-col md:flex-row justify-between items-center gap-[64px] relative overflow-hidden">
              <div className="relative z-10 text-center md:text-left">
                <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-primary-container mb-[8px] block">READY_TO_START?</span>
                <h2 className="font-mono text-[64px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[32px] mb-[16px]">Start curating the<br/>future of code.</h2>
                <div className="flex flex-col sm:flex-row gap-[16px]">
                  <button onClick={() => navigate('/feed')} className="px-[32px] py-[16px] bg-primary-container text-on-primary font-mono text-[12px] font-medium leading-none tracking-[0.1em] hover:bg-primary transition-all">OPEN_STUDIO -&gt;</button>
                  <button onClick={() => navigate('/feed')} className="px-[32px] py-[16px] border border-surface/20 text-surface font-mono text-[12px] font-medium leading-none tracking-[0.1em] hover:bg-surface/10 transition-all">STAR_ON_GITHUB</button>
                </div>
              </div>
              <div className="relative z-10 font-mono text-[64px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[120px] leading-none text-surface/5 select-none hidden lg:block">
                GITPINS
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-outline/10 pt-[64px] pb-[32px] mt-[64px]">
        <div className="max-w-7xl mx-auto px-[40px] flex flex-col md:flex-row justify-between items-center gap-[16px]">
          <div className="flex flex-col items-center md:items-start gap-[8px]">
            <span className="font-mono text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-on-background">GITPINS</span>
            <p className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-on-surface-variant">© 2026 GITPINS.PROTOCOL [ROOT]</p>
          </div>
          <div className="flex gap-[32px]">
            <button className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-on-surface-variant hover:text-primary transition-colors">DOCUMENTATION</button>
            <button className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-on-surface-variant hover:text-primary transition-colors">SOURCE</button>
            <button className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-on-surface-variant hover:text-primary transition-colors">PRIVACY</button>
            <button className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-on-surface-variant hover:text-primary transition-colors">CHANGELOG</button>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-[10px] text-on-surface-variant uppercase">Powered by</span>
            <span className="flex items-center gap-[4px] font-mono text-[12px] font-medium leading-none tracking-[0.1em] text-on-background">
              <span className="w-3 h-3 bg-primary-container rounded-sm"></span>
             GitPins
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
