import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Reta Final ENEM</h3>
              <p className="text-sm text-muted-foreground">
                O método mais eficaz para revisar e gabaritar o ENEM 2025.
              </p>
              <div className="flex space-x-4">
                {/* Social icons removed */}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Conteúdo</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Resumos Estratégicos
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Redação Nota 1000
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Material</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Banco de Questões
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Cronograma Automático
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Suporte</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Reta Final ENEM. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;