import { Instagram, Facebook, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-linho-cru-deep bg-jacaranda py-14">
      {/* Linha superior verde-oliva */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-verde-oliva via-couro-cognac to-verde-oliva" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#topo" className="flex items-center">
              <Logo variant="white" height={32} />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-linho-cru/60">
              Studio Bossa — design de interiores, arquitetura e reformas de
              alto padrão. Há 15 anos transformando casas em experiências.
              O luxo discreto de se sentir em casa.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="magnetic flex h-10 w-10 items-center justify-center rounded-xl bg-linho-cru/10 text-linho-cru/70 transition-colors hover:bg-couro-cognac hover:text-linho-cru"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="magnetic flex h-10 w-10 items-center justify-center rounded-xl bg-linho-cru/10 text-linho-cru/70 transition-colors hover:bg-couro-cognac hover:text-linho-cru"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="magnetic flex h-10 w-10 items-center justify-center rounded-xl bg-linho-cru/10 text-linho-cru/70 transition-colors hover:bg-verde-oliva hover:text-linho-cru"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-linho-cru/85">
              Navegação
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="#servicos"
                  className="text-linho-cru/60 transition-colors hover:text-couro-cognac-light"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-linho-cru/60 transition-colors hover:text-couro-cognac-light"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-linho-cru/60 transition-colors hover:text-couro-cognac-light"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-linho-cru/60 transition-colors hover:text-couro-cognac-light"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-linho-cru/60 transition-colors hover:text-couro-cognac-light"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-linho-cru/85">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-linho-cru/60">
              <li>+351 220 000 000</li>
              <li>hello@studiobossa.pt</li>
              <li>
                Rua das Flores, 100
                <br />
                Porto — Portugal
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-linho-cru/15 pt-8 text-sm text-linho-cru/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Studio Bossa. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors hover:text-linho-cru/85"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="transition-colors hover:text-linho-cru/85"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
