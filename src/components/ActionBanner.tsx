import { motion } from 'motion/react';

export default function ActionBanner() {
  const phoneNumber = "5551991650122"; 
  const message = "Olá! Gostaria de apoiar a campanha do Márcio Ferreira.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
        <div className="flex flex-col items-center justify-center gap-4">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-[#FFDF00] text-[#002776] font-black text-lg md:text-xl uppercase tracking-tighter rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_10px_30px_rgba(255,223,0,0.3)] flex items-center justify-center gap-3"
          >
            Quero Apoiar
          </a>
        </div>
      </div>
    </section>
  );
}
