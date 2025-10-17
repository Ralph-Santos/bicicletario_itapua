import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-secondary text-secondary-foreground py-3 text-center md:text-left">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Título */}
          <h4 className="text-2xl font-bold mb-3 text-center">Entre em Contato</h4>

          {/* Container dos ícones */}
          <div className="flex flex-wrap justify-center items-start gap-10 h-310">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5571999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="bg-primary p-4 rounded-full mb-3 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
              </div>
              <p className="font-semibold text-base sm:text-lg">WhatsApp</p>
              
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/bicicletarioitapua"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="bg-primary p-4 rounded-full mb-3 group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
              </div>
              <p className="font-semibold text-base sm:text-lg">Instagram</p>
              
            </a>

            {/* E-mail */}
            
            <a
              href="mailto:contato@bicicletarioitapua.com.br"
              className="flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="bg-primary p-4 rounded-full mb-3 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
              </div>
              <p className="font-semibold text-base sm:text-lg">E-mail</p>
            </a>
          </div>
        </div>



        <div className="border-t border-secondary-foreground/20  pt-3 text-center">
          <p className="text-secondary-foreground/70">
            © 2025 Bicicletário Itapuã. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
