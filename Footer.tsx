import { Instagram, Facebook, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="relative z-10 bg-[#002776] flex flex-col justify-center px-6 md:px-12 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFDF00] rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-[#002776] rounded-sm transform rotate-45"></div>
              </div>
              <span className="font-black text-2xl text-white tracking-tighter uppercase">
                MÁRCIO FERREIRA 55100
              </span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed text-sm font-light">
              Rio Grande do Sul é minha história e Alvorada é minha Luta. A porta para solucionar diversos problemas da população.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/marcinhoferreira06/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFDF00] hover:text-[#002776] hover:border-[#FFDF00] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFDF00] hover:text-[#002776] hover:border-[#FFDF00] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFDF00] hover:text-[#002776] hover:border-[#FFDF00] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#FFDF00]">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-white/60 hover:text-white transition-colors text-sm">Início</a></li>
              <li><a href="#sobre" className="text-white/60 hover:text-white transition-colors text-sm">Nossa História</a></li>
              <li><a href="#propostas" className="text-white/60 hover:text-white transition-colors text-sm">Plano de Governo</a></li>
              <li><a href="#agenda" className="text-white/60 hover:text-white transition-colors text-sm">Agenda Semanal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#FFDF00]">Contato & Regiões</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-[#FFDF00]" />
                <span>Alvorada, Viamão, Cachoeirinha, Gravataí e Zona Norte POA</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#FFDF00]" />
                <span>contato@marcioferreira10.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 md:gap-8 items-center text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] flex-wrap justify-center">
            <span>Direitos</span>
            <span className="w-1 h-1 bg-[#FFDF00] rounded-full hidden md:block"></span>
            <span>Respeito</span>
            <span className="w-1 h-1 bg-[#FFDF00] rounded-full hidden md:block"></span>
            <span>Dignidade</span>
            <span className="w-1 h-1 bg-[#FFDF00] rounded-full hidden md:block"></span>
            <span>Foco</span>
          </div>
          <div className="text-white/30 text-[9px] uppercase tracking-widest text-center md:text-right">
            CNPJ: 00.000.000/0001-00 - Eleições MDB
          </div>
        </div>
      </div>
    </footer>
  );
}
