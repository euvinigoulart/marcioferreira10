import { motion } from 'motion/react';
import { ShieldAlert, Heart, CloudRain, Store } from 'lucide-react';

const PROPOSALS = [
  {
    id: 1,
    title: "Combate à Violência",
    desc: "Prioridade máxima na proteção às mulheres e na criação de políticas rigorosas de amparo e segurança.",
    icon: <ShieldAlert size={24} />
  },
  {
    id: 2,
    title: "Inclusão e PCDs",
    desc: "Luta incansável por autistas e pessoas com deficiência, ampliando conquistas como a piscina aquecida em Alvorada.",
    icon: <Heart size={24} />
  },
  {
    id: 3,
    title: "Amparo nas Enchentes",
    desc: "Políticas diretas de socorro e reestruturação para as famílias e vítimas afetadas pelas fortes chuvas no estado.",
    icon: <CloudRain size={24} />
  },
  {
    id: 4,
    title: "Microempreendedores",
    desc: "Apoio e desburocratização para quem faz a economia local girar, gerando dignidade e sustento para as famílias.",
    icon: <Store size={24} />
  }
];

export default function Proposals() {
  return (
    <section id="propostas" className="py-24 relative overflow-hidden z-10">
      {/* Decorative large text behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/5 whitespace-nowrap select-none z-0 tracking-tighter">
        PROPOSTAS
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-[50px] font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">
            MINHAS <span className="text-[#FFDF00]">BANDEIRAS</span>.
          </h2>
          <p className="text-xl text-white/70 font-light">
            Causas prioritárias para defender nossos direitos, com respeito, dignidade e muito foco.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROPOSALS.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300 cursor-default"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white bg-[#002776] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                {prop.icon}
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4">
                {prop.title}
              </h3>
              <p className="text-white/80 leading-relaxed mb-6 font-medium text-base">
                {prop.desc}
              </p>
              
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full w-0 bg-[#FFDF00] transition-all duration-500 group-hover:w-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
