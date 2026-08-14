import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 pb-20 lg:pb-0 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center min-w-0"
        >
          {/* PSD Logo Emulado */}
          <div className="flex flex-col items-start mb-6 select-none">
            <div className="flex font-black italic tracking-tighter leading-none text-6xl md:text-7xl -ml-1">
              <span className="text-white">p</span>
              <span className="text-[#8CC63F] -ml-1">s</span>
              <span className="text-[#FFDF00] -ml-1">d</span>
            </div>
            <span className="text-white text-[10px] md:text-xs font-bold tracking-tight mt-1">
              Partido Social Democrático
            </span>
          </div>
          
          <h1 className="text-[12vw] sm:text-6xl md:text-[90px] lg:text-[110px] leading-[0.85] font-black text-white uppercase tracking-tighter mb-8 break-words hyphens-auto">
            MÁRCIO <br />
            <span className="text-[#FFDF00]">
              FERREIRA
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-md font-light leading-relaxed mb-10">
            Rio Grande do Sul é minha história e Alvorada é minha Luta. Uma ponte para exigir seus direitos e garantir a sua fala.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 mb-10">
            <a href="#propostas" className="group bg-[#FFDF00] text-[#002776] px-8 py-4 rounded-full font-black text-sm uppercase tracking-tighter hover:bg-white transition-colors flex items-center gap-2">
              Conheça o Plano
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="flex items-center gap-3 text-white font-black text-sm uppercase tracking-tighter hover:text-[#FFDF00] transition-colors px-6 py-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-md">
              <Play size={16} />
              Assistir Vídeo
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md w-48">
              <div className="text-[#FFDF00] font-black text-3xl mb-1">16+</div>
              <div className="text-white/50 text-[10px] font-bold uppercase tracking-wider">Anos na Política</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md w-48">
              <div className="text-[#FFDF00] font-black text-3xl mb-1">100%</div>
              <div className="text-white/50 text-[10px] font-bold uppercase tracking-wider">Ao Lado do Povo</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative mt-8 lg:mt-0 w-full flex items-center justify-center lg:justify-end min-w-0"
        >
          {/* Wrapper for image + badge */}
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] mx-auto lg:ml-auto lg:mr-0">
            {/* Green Glow Behind Photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#4ade80] rounded-full blur-[80px] md:blur-[120px] opacity-50 z-0 pointer-events-none"></div>

            <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] bg-white/5 rounded-[40px] border border-white/20 overflow-hidden backdrop-blur-sm shadow-2xl z-10">
              <img 
                src="/marcio-ferreira.png" 
                alt="Márcio Ferreira" 
                className="absolute inset-0 w-full h-full object-cover object-center md:object-[80%_top] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002776]/90 via-[#002776]/20 to-transparent"></div>
              
              <div className="absolute bottom-16 md:bottom-20 left-4 right-4 z-20 text-center flex flex-col items-center">
                <h3 className="text-white font-black text-2xl md:text-3xl mb-2 drop-shadow-md leading-tight">A Voz de Quem Precisa</h3>
                <p className="text-white font-medium text-sm md:text-base drop-shadow-md">Sempre presente em ações sociais e combatendo as injustiças.</p>
              </div>
            </div>
            
            {/* Floating Number Badge - Restored to left side */}
            <div className="absolute -bottom-6 left-0 sm:-left-4 md:-left-8 z-30">
              <div className="bg-[#FFDF00] text-[#002776] px-6 md:px-8 py-3 rounded-2xl font-black text-5xl md:text-6xl tracking-tighter shadow-[0_10px_40px_rgba(0,0,0,0.5)] transform -rotate-3 border-4 border-white/20">
                55100
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
