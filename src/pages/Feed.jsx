import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gplogo from '../assets/gplogo.jpg';

const Feed = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30 selection:text-primary min-h-screen flex">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full">
        <div className="flex items-center gap-8 cursor-pointer" onClick={() => navigate('/')}>
          <div className="flex items-center gap-2">
            <img src={gplogo} alt="GitPins Logo" className="w-8 h-8 rounded-md object-cover" />
            <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">GitPins</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => navigate('/collections')} className="font-body text-on-surface-variant hover:text-on-surface transition-colors">Collections</button>
            <button onClick={() => navigate('/feed')} className="text-primary font-bold border-b-2 border-primary pb-1 font-body">Trending</button>
            <button onClick={() => navigate('/community')} className="font-body text-on-surface-variant hover:text-on-surface transition-colors">Community</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <form onSubmit={(e) => { e.preventDefault(); const val = e.target.search.value; if(val) navigate(`/search?q=${encodeURIComponent(val)}`); }} className="relative hidden lg:block">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">search</span>
            </div>
            <input name="search" className="bg-surface-container-highest border-none rounded-lg py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-primary/30 transition-all text-on-surface" placeholder="Explore repositories..." type="text"/>
          </form>
          <button className="hover:bg-surface-variant/20 p-2 rounded-full transition-transform duration-200 scale-95 active:scale-90">
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          </button>
          <button className="hover:bg-surface-variant/20 p-2 rounded-full transition-transform duration-200 scale-95 active:scale-90">
            <span className="material-symbols-outlined text-on-surface-variant">settings</span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden ml-2 ring-2 ring-primary/20">
            <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPKBX_JqoCWWFw5mzNgDuTKINJ2nx7Lg-ACm2G7d-DC6jvrqcNLTbPyGmtdFE7Pkd3-AucIOM34HcELQ2U0B0EuUHkn335pIeWUpw5ZpQCL9GUCvKOP6YQ54PYtd8LzJTlZAqKoM7mkrrpNGTP9cguGVX8fQ3bNV6vDSbomx4ZECihRUDdxweFbdT2owfTAmK1GrnBerZoVSFK24yF43gKAnp0CbsvimyVUKKVrhKRvVfnXqbn7TMTz1S7KRlXM5a2v_ly3oVAiftx"/>
          </div>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col p-4 gap-2 hidden xl:flex pt-24 border-r border-outline-variant/10">
        <div className="flex items-center gap-3 px-4 mb-6 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center overflow-hidden">
            <img src={gplogo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-on-surface">GitPins</h1>
            <p className="font-body text-label-md text-on-surface-variant opacity-60">The Digital Curator</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <button onClick={() => navigate('/')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 rounded-xl transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined">grid_view</span>
            <span className="font-body text-label-md">Home</span>
          </button>
          <button onClick={() => navigate('/collections')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 rounded-xl transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined">bookmarks</span>
            <span className="font-body text-label-md">Collections</span>
          </button>
          <button onClick={() => navigate('/feed')} className="w-full flex items-center gap-3 px-4 py-3 bg-surface-container-high text-primary rounded-xl font-bold transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined">trending_up</span>
            <span className="font-body text-label-md">Trending</span>
          </button>
          <button onClick={() => navigate('/community')} className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/30 rounded-xl transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined">group</span>
            <span className="font-body text-label-md">Community</span>
          </button>
        </nav>
        <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 mb-8 transition-transform active:scale-95">
          <span className="material-symbols-outlined">add</span>
          New Collection
        </button>
        <div className="mt-auto space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant/30 rounded-xl transition-all">
            <span className="material-symbols-outlined">description</span>
            <span className="font-body text-label-md">Docs</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant/30 rounded-xl transition-all">
            <span className="material-symbols-outlined">help</span>
            <span className="font-body text-label-md">Support</span>
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 xl:pl-64 pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-8 pb-16">
          
          {/* Hero Trending Today */}
          <section className="mb-16">
            <div className="relative overflow-hidden rounded-[2rem] bg-surface-container-low min-h-[400px] flex items-center group">
              <div className="absolute inset-0 z-0">
                <img alt="Abstract digital waves of neon blue" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmRhjYJ33tckQ8Cc9JDYgRPNQhV_kCAWzPhbmumJRhtq76nW-GKViiXrBtqZBl8fFqxQ06IoKL8aMIM1ep81-N0kyu3Fk2QzSuEvJtoaJhYygZv91aTBVwlTKpXcvO0y56IrkzckvtJcWn_XojVp_JobTAbq0wGqqYQ8lWxN1ID2GaDatpHifDIa47SUfK6jaHRGaL9jJYwbKsIYFKTu--Y66WhFK6HPzVJDeeRuJUwwvwy7VBFUzKDRwa67X2vFKGp274MvMg6VIT"/>
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent"></div>
              </div>
              <div className="relative z-10 p-12 lg:p-16 max-w-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
                    Trending Today
                  </span>
                  <span className="text-on-surface-variant/60 text-xs font-mono">Rank #1</span>
                </div>
                <h2 className="font-display text-5xl lg:text-6xl font-bold text-on-surface mb-4 leading-tight">
                  Hyper-OS <span className="text-primary">v2.0</span>
                </h2>
                <p className="font-body text-xl text-on-surface-variant mb-8 leading-relaxed">
                  A blazing fast, modular operating system kernel written in Rust, designed for high-performance edge computing.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary text-on-primary font-bold px-8 py-3 rounded-full flex items-center gap-2 transition-transform active:scale-95 hover:bg-primary/90">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    Pin to Board
                  </button>
                  <button className="glass-card text-on-surface font-bold px-8 py-3 rounded-full border border-outline-variant/20 hover:bg-surface-variant/40 transition-colors">
                    View Repository
                  </button>
                </div>
              </div>
              <div className="absolute right-12 bottom-12 hidden lg:flex flex-col items-end gap-2">
                <span className="font-mono text-secondary text-3xl font-bold">+2,482</span>
                <span className="text-on-surface-variant text-sm uppercase tracking-wider">Stars last 24h</span>
              </div>
            </div>
          </section>

          {/* Filters & Discovery Header */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
              <div>
                <h3 className="font-display text-3xl font-bold text-on-surface mb-2">Discovery Feed</h3>
                <p className="text-on-surface-variant">Top repositories curated by real-time star velocity.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="bg-surface-container-highest p-1 rounded-xl flex gap-1">
                  <button className="px-4 py-2 bg-surface-container-low text-primary text-sm font-bold rounded-lg transition-all">24h</button>
                  <button className="px-4 py-2 text-on-surface-variant hover:text-on-surface text-sm transition-all">7d</button>
                  <button className="px-4 py-2 text-on-surface-variant hover:text-on-surface text-sm transition-all">30d</button>
                </div>
                <div className="bg-surface-container-highest p-1 rounded-xl flex gap-1">
                  <button className="px-4 py-2 bg-surface-container-low text-on-surface text-sm font-bold rounded-lg transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">code</span>
                    All Languages
                    <span className="material-symbols-outlined text-[18px]">expand_more</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Repository Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Repos Card 1 */}
              <div className="bg-surface-container-low p-6 rounded-[1.5rem] hover:bg-surface-container-high transition-all duration-300 group shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-outline-variant/10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined">auto_awesome</span>
                  </div>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">push_pin</span>
                  </button>
                </div>
                <h4 className="font-display text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">NeoCanvas Engine</h4>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">GPU-accelerated rendering engine for creative coding and generative art installations.</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex -space-x-2">
                    <img alt="Contributor" className="w-6 h-6 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_WnEqobSl4dgkalqa-GPb1dGbmqv-phhgVih5lH0L8J7cJavFMWtmFMLJxsVri2vvjfx5YRhlryVOFkT5rHNyG3D2wD2QPszQX0vXgiKga5rmfFlPnJAAs1O42MFhJs3JH6v5smum42-l3rddWEQAOb9-kJeU5ekHG5sEYX9NYFkwMvNBuZcNNxZs5XpX7GPAWTonzpVgK1zaS6uVATiW93ZOhN27zjPzNaDYXCB-X7hsN_pSpWumg4-IRpNNQYH7GkzHZw_DTxRX"/>
                    <img alt="Contributor" className="w-6 h-6 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRj-ThgHr7ytXcce54Yyqr18muNtqHWwmEiRjbBWwR2VwhlA4M-7_82kOnFnnnRsp6DzWdDtkY3vIcvnKuLblmQK2yj1LlEHaQxmxSC1OEObkXEsDtqoHzamkzwuE0DVI0XwsC5yOy496XqKnxScr3aiHR0N6LiYTw3wiLpIjsnhXR4yeR1gV35Xsam7Ond9ze7erKlnzsBb-RIJWReH8olPkmGxLMgc973gY_EFjHpD0boPV4nH4Mc8PKbVvifAk8xYqcRRmGne1x"/>
                    <img alt="Contributor" className="w-6 h-6 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADfJswunAFPXxoiqUjSM1sdXaRzUAoRsHZezIKmd-f3uIDSFXdmnfU3eM5wJy8b5d7UwY1jWfmg6dbfSTnycW501Z5chha36MCohbjhhEIlLxjYS6Kvf6uIci_Uh4lIsbB2j6bLLL8lzITIBNaysHFtKO3ArdZ0OIv2H1KLSqeRCaNRvni49z-KmodoofgNCoK1onax_gXPovGeUMBtgYFxBIuiuYWwftYz1yRFAxZmE9dWJVFyoYHDN4_BZrPeQVLJ33MkNkEkNb9"/>
                  </div>
                  <span className="text-xs text-on-surface-variant">+128 contributors</span>
                </div>
                <div className="h-12 w-full mb-6">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 200 40">
                    <path className="text-secondary sparkline" d="M0 35 Q 25 35, 50 20 T 100 25 T 150 10 T 200 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-tight">TypeScript</span>
                  <div className="flex items-center gap-3 text-on-surface-variant font-mono text-xs">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">star</span> 12.4k</span>
                    <span className="flex items-center gap-1 text-secondary"><span className="material-symbols-outlined text-[14px]">trending_up</span> 420</span>
                  </div>
                </div>
              </div>

              {/* Repos Card 2 */}
              <div className="bg-surface-container-low p-6 rounded-[1.5rem] hover:bg-surface-container-high transition-all duration-300 group shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-outline-variant/10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">terminal</span>
                  </div>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">push_pin</span>
                  </button>
                </div>
                <h4 className="font-display text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Rust-Auth-Pro</h4>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Military-grade authentication framework with built-in zero-knowledge proofs.</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex -space-x-2">
                    <img alt="Contributor" className="w-6 h-6 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARb0QbJi9K9DrJsRHHKa1aI_rQIGlC0MP52iV6tSIEiFCCM9S-83nBm8LhqNLPjrFOa5DpLRmk7ibSTjozGVynR7Q1NSUQB_YAAXPaX0S83v9jlFILSSmy9IU-S_4tibywsx4OzGTxARFgbI9nEZdPRnxE2vqKkAh8cdEP0s6VfQyUdRpKKjGKoeDl7MOnrR-XaqgdzaKGYkQ0Cm0fgopP5HzrGzwfZc6mumiA0yHu4PxCwA66B7aOiaS5ohb3X-mWJ72y9ppcgiKx"/>
                    <img alt="Contributor" className="w-6 h-6 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfpJpeAkKXy5jrhiCdaT8DMtNdaHHrsYkEmas-BuzTvmAt8AGiuXbULruKLH_zm_-4hX8NMiQGisABywyAhv2xwQv7Q51XtJJjJ6hdL5sGQTQMPHkgw4hGvZ5U8AXPNCUb9FjEMNm1cZNYuICuH_D-TTwTv5d4pektBNcRqJkaZ-PZ1O4ujf1j5mmKNZm47G6hLA0UDo9lMb9KGkUsNHOd-MK2AaTY86BxjNJOJSjAHCbCpUcGe3-blbahIWI2_SdceZKtMffGCju-"/>
                  </div>
                  <span className="text-xs text-on-surface-variant">+45 contributors</span>
                </div>
                <div className="h-12 w-full mb-6">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 200 40">
                    <path className="text-primary sparkline" d="M0 30 Q 30 10, 60 25 T 120 5 T 180 15 T 200 3" fill="none" stroke="currentColor" strokeWidth="2"></path>
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-tight">Rust</span>
                  <div className="flex items-center gap-3 text-on-surface-variant font-mono text-xs">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">star</span> 8.2k</span>
                    <span className="flex items-center gap-1 text-secondary"><span className="material-symbols-outlined text-[14px]">trending_up</span> 285</span>
                  </div>
                </div>
              </div>

              {/* Repos Card 3 */}
              <div className="bg-surface-container-low p-6 rounded-[1.5rem] hover:bg-surface-container-high transition-all duration-300 group shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-outline-variant/10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">data_object</span>
                  </div>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">push_pin</span>
                  </button>
                </div>
                <h4 className="font-display text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">PythonML-Toolkit</h4>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Unified interface for LLM orchestration and vector database management.</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex -space-x-2">
                    <img alt="Contributor" className="w-6 h-6 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW-vKkIif0PrQusOFJV94p_ediDCkg4_tBRsIVPWwRFifrOQocYqUhPz4e5zupoFWhSsIEBkCzY6pgirtTqcT1sdqiIu4QZGKLmmil-xayj0-fOncZpgKaLxSsLHrxfgEAh136YkK_ouj1p0S67n723LMw7qG1biWcvvHh1QABOXumljoQE6rRU0JXAscwivXeKlICJNacex-uD_50r_18NvxZxYcbjo5uqcwSSDPMKVuNVHLNibFG_pqXkRfk56Sau70GpLT0dEyD"/>
                    <img alt="Contributor" className="w-6 h-6 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLcOQjXd6dlkA2KL5pxdpJNAEVuhujoVti8V-P81hAPEnLyjerfsC6i43JJ-4ZrBEqyDhdOE-SKBFdjuYPf_Ni3fUoD_kPgduvJTqzHa_emheLLClvL4eLl0lYCwDGtnA-KTyuJaUMjdr_mD10qt2BGXOx2ABbzrnsp7StZ3w18KBG178WoWrTBjBtmpbCQ2gbg-92HZ9rXmzx7iJrcxpD4B8v9P-Su95YEH9ve_3lyOG00o-1NyXNffEea7wLI3EXWrnXPHw0vBAF"/>
                    <img alt="Contributor" className="w-6 h-6 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdp81iuhOGj0Fyyg2YoUDIfRqaPj01-qImJPWK4Hm2uoJUz3GTvH-z5VJLliY-W3A4XprUZYnv_ncNsnIrTzhOvJe8xlmlI7Ft1VjNWxuihiIty36sQUtchVw-mnWfgDyA_q093xjtB_g-Kv8NLdJ6jO2JMhtkxZhR1gc86nhbJsxeKWaE5KT3LYJ99AzTf-OVGNyMlx5FJ_HEH0SoymHUCWXpVvyw2maTJIUx1g3ZxNRSBlyV5h9UuIwB9exEDMx_lqZSTmu2wdXK"/>
                  </div>
                  <span className="text-xs text-on-surface-variant">+312 contributors</span>
                </div>
                <div className="h-12 w-full mb-6">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 200 40">
                    <path className="text-secondary sparkline" d="M0 38 Q 40 38, 80 15 T 160 20 T 200 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-tight">Python</span>
                  <div className="flex items-center gap-3 text-on-surface-variant font-mono text-xs">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">star</span> 22.1k</span>
                    <span className="flex items-center gap-1 text-secondary"><span className="material-symbols-outlined text-[14px]">trending_up</span> 1.1k</span>
                  </div>
                </div>
              </div>

              {/* Repos Card 4 */}
              <div className="bg-surface-container-low p-6 rounded-[1.5rem] hover:bg-surface-container-high transition-all duration-300 group shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-outline-variant/10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-error/20 flex items-center justify-center text-error">
                    <span className="material-symbols-outlined">security</span>
                  </div>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">push_pin</span>
                  </button>
                </div>
                <h4 className="font-display text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">GuardRail.js</h4>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Static analysis tool for catching security leaks in Node.js applications.</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex -space-x-2">
                    <img alt="Contributor" className="w-6 h-6 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVXX5oSajXunB8sI_-jliOJgq3xhx2j16oKfACrwUCJOGT7bwhkRD0eQZflCcjX6i8eGgDkbVFAvwOCywVO5MJcmkQNBNOFHnr1FDDpC7FdjqEbGWvugboRN4zJF-ruK6dgcqhZNqYDF3UhmRA75wtxjokIFOhC8_BDsBv1AKFXu7rvhd4oC7PGUqwI7FTTJypu90kw2n1exTkzyZIQSv4zdGY5--Doct-LgvSJgwYW7F2afMLJBpYeS7Eo2AJN9aRYK0Q7TZX00JQ"/>
                  </div>
                  <span className="text-xs text-on-surface-variant">+12 contributors</span>
                </div>
                <div className="h-12 w-full mb-6">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 200 40">
                    <path className="text-primary sparkline" d="M0 35 Q 50 35, 100 10 T 200 8" fill="none" stroke="currentColor" strokeWidth="2"></path>
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-tight">JavaScript</span>
                  <div className="flex items-center gap-3 text-on-surface-variant font-mono text-xs">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">star</span> 4.5k</span>
                    <span className="flex items-center gap-1 text-secondary"><span className="material-symbols-outlined text-[14px]">trending_up</span> 98</span>
                  </div>
                </div>
              </div>

              {/* Repos Card 5 (Bento Wide) */}
              <div className="bg-surface-container-low p-6 rounded-[1.5rem] hover:bg-surface-container-high transition-all duration-300 group shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-outline-variant/10 md:col-span-2">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container">
                        <span className="material-symbols-outlined">rocket_launch</span>
                      </div>
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Rising Star</span>
                    </div>
                    <h4 className="font-display text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">Astra Cloud Platform</h4>
                    <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">The next generation of serverless computing. Astra leverages WebAssembly to provide instant-cold starts and globally distributed state management without the overhead of traditional cloud providers.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-lg text-xs font-mono">Wasm</span>
                      <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-lg text-xs font-mono">Serverless</span>
                      <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-lg text-xs font-mono">Edge</span>
                    </div>
                  </div>
                  <div className="w-full md:w-64 flex flex-col justify-end">
                    <div className="bg-surface-container p-4 rounded-2xl mb-4">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-xs text-on-surface-variant font-mono uppercase tracking-widest">Growth Velocity</span>
                        <span className="text-secondary font-mono font-bold">+184%</span>
                      </div>
                      <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-3/4 rounded-full"></div>
                      </div>
                    </div>
                    <button className="w-full bg-primary text-on-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95">
                      <span className="material-symbols-outlined">star</span>
                      Follow Growth
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Featured Curator Section */}
          <section className="mt-24 bg-surface-container rounded-[2rem] p-12 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[300px] text-primary rotate-12">stars</span>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h3 className="font-display text-4xl font-bold text-on-surface mb-6">Curated Collections</h3>
              <p className="text-on-surface-variant text-lg mb-8">Looking for more than just raw trends? Explore hand-picked repositories curated by the world's leading engineers and designers.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/40 transition-all cursor-pointer group">
                  <h5 className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">The Modern Web Stack</h5>
                  <p className="text-xs text-on-surface-variant">24 Repositories • By @leerob</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/40 transition-all cursor-pointer group">
                  <h5 className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Rust for FinTech</h5>
                  <p className="text-xs text-on-surface-variant">18 Repositories • By @rustlang</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-surface-container/80 backdrop-blur-xl flex justify-around items-center px-4 py-3 shadow-none">
        <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
        </button>
        <button onClick={() => navigate('/collections')} className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">bookmarks</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Saved</span>
        </button>
        <button onClick={() => navigate('/feed')} className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>trending_up</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Trending</span>
        </button>
        <button onClick={() => navigate('/community')} className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">group</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Feed</span>
        </button>
      </nav>

      {/* FAB */}
      <button className="fixed bottom-24 right-8 w-14 h-14 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full shadow-2xl flex items-center justify-center transition-transform active:scale-90 hover:scale-110 z-40 md:bottom-8">
        <span className="material-symbols-outlined text-2xl">add</span>
      </button>

    </div>
  );
};

export default Feed;
