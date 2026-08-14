import { Instagram, Facebook, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="relative z-10 bg-[#002776] flex flex-col justify-center px-6 md:px-12 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex flex-col items-start gap-4">
              {/* PSD Logo Emulado */}
              <div className="flex flex-col items-start select-none">
                <div className="flex font-black italic tracking-tighter leading-none text-5xl -ml-1">
                  <span className="text-white">p</span>
                  <span className="text-[#8CC63F] -ml-1">s</span>
                  <span className="text-[#FFDF00] -ml-1">d</span>
                </div>
                <span className="text-white text-[9px] font-bold tracking-tight mt-1">
                  Partido Social Democrático
                </span>
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
              <a href="https://wa.me/5551991650122" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFDF00] hover:text-[#002776] hover:border-[#FFDF00] transition-colors" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61592862015287" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFDF00] hover:text-[#002776] hover:border-[#FFDF00] transition-colors">
                <Facebook size={18} />
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
            CNPJ: 68.456.234/0001-81 - Eleições 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
