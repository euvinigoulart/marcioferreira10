import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-12 lg:col-span-7 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-3 border border-[#FFDF00]/30 text-[#FFDF00] text-[10px] font-bold pr-4 pl-1 py-1 mb-6 rounded-full w-fit uppercase tracking-[0.2em] bg-[#FFDF00]/10 backdrop-blur-sm">
            <span className="bg-[#FFDF00] text-[#002776] px-3 py-1.5 rounded-full font-black tracking-tighter">PSD 55</span>
            <span>55100 • ALVORADA E REGIÃO</span>
          </div>
          
          <h1 className="text-6xl md:text-[90px] lg:text-[110px] leading-[0.85] font-black text-white uppercase tracking-tighter mb-8">
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
          className="col-span-12 lg:col-span-5 flex items-center justify-end relative h-[500px]"
        >
          {/* Green Glow Behind Photo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#4ade80] rounded-full blur-[100px] opacity-60 z-0"></div>

          <div className="relative w-full max-w-[400px] h-[500px] bg-white/5 rounded-[40px] border border-white/20 overflow-hidden backdrop-blur-sm shadow-2xl z-10">
            <img 
              src="/marcio-ferreira.png" 
              alt="Márcio Ferreira" 
              className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002776]/90 via-[#002776]/20 to-transparent"></div>
            
            <div className="absolute bottom-20 left-8 right-8 z-20">
              <h3 className="text-white font-black text-2xl mb-2 drop-shadow-md">A Voz de Quem Precisa</h3>
              <p className="text-white font-medium text-base drop-shadow-md">Sempre presente em ações sociais e combatendo as injustiças no dia a dia.</p>
            </div>
          </div>
          
          {/* Floating Number Badge */}
          <div className="absolute -bottom-6 left-4 md:-left-8 z-30">
            <div className="bg-[#FFDF00] text-[#002776] px-6 py-3 rounded-2xl font-black text-6xl tracking-tighter shadow-[0_10px_40px_rgba(0,0,0,0.5)] transform -rotate-3 border-4 border-white/20">
              55100
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
