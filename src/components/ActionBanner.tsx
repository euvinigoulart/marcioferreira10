import { motion } from 'motion/react';

export default function ActionBanner() {
  return (
    <section className="bg-[#008D4C] border-y border-white/10 py-24 relative overflow-hidden z-10">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <polygon fill="currentColor" points="100,0 100,100 0,100" className="text-[#002776]" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-4xl md:text-[60px] font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
          O MÁRCIO ME <span className="text-[#FFDF00]">REPRESENTA</span>.
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto font-light">
          Buscamos apoiadores engajados, especialmente pessoas envolvidas com projetos sociais. Venha fortalecer nosso time em Alvorada, Porto Alegre e toda a região.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#FFDF00] text-[#002776] font-black text-sm uppercase tracking-tighter rounded-full hover:bg-white transition-colors">
            Quero Apoiar
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-black text-sm uppercase tracking-tighter rounded-full hover:bg-white/10 transition-colors border border-white/20 backdrop-blur-md">
            Conhecer Projetos
          </button>
        </div>
      </div>
    </section>
  );
}
