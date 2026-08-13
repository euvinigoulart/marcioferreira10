import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Users } from 'lucide-react';

const values = [
  {
    icon: <ShieldCheck className="text-[#FFDF00]" size={32} />,
    title: "Direitos e Garantias",
    desc: "Combate incansável às injustiças, exigindo respeito e garantindo a voz da nossa comunidade."
  },
  {
    icon: <HeartHandshake className="text-[#FFDF00]" size={32} />,
    title: "Ações Sociais Reais",
    desc: "Presença constante onde o povo mais precisa, com resultados como a piscina aquecida para autistas."
  },
  {
    icon: <Users className="text-[#FFDF00]" size={32} />,
    title: "O Candidato que Representa",
    desc: "Uma porta aberta para solucionar os diversos tipos de problemas da população carente e das mulheres."
  }
];

export default function About() {
  return (
    <section id="sobre" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div className="space-y-8">
            <div>
              <span className="text-white/50 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
                Minha Trajetória
              </span>
              <h2 className="text-4xl md:text-[50px] font-black text-white leading-[0.9] uppercase tracking-tighter">
                NÃO VIM PARA CONSTRUIR MUROS, <br/><span className="text-[#FFDF00]">VIM PARA CONSTRUIR PONTES.</span>
              </h2>
            </div>
            
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Sou Márcio Ferreira, atual suplente no conselho tutelar. Acompanho de perto a política há 16 anos, vivendo a realidade de Alvorada e da região metropolitana.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Minha candidatura nasceu da necessidade. O Estado tem sido omisso com a nossa comunidade. Pela credibilidade que construímos e por saber exatamente a dificuldade que passamos no dia a dia, coloco meu nome à disposição para ser a voz de quem precisa.
            </p>

            <div className="pt-6 grid sm:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="space-y-3">
                  <div className="bg-white/5 border border-white/10 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-widest">{v.title}</h3>
                  <p className="text-[12px] text-white/50 leading-relaxed font-light">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="relative">
            <div className="aspect-square rounded-[40px] bg-white/5 border border-white/10 overflow-hidden relative p-4 backdrop-blur-md">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000" 
                alt="Encontro com o povo" 
                className="w-full h-full object-cover rounded-[32px] relative z-10 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#002776]/20 mix-blend-multiply z-20"></div>
              
              {/* Decorative blocks */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-[#FFDF00] rounded-full z-0 mix-blend-overlay blur-2xl opacity-50"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
