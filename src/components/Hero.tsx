import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Texto à esquerda */}
          <div className="space-y-6 animate-fade-in text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Viva Salvador de um jeito diferente
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Descubra as belezas de Salvador de bicicleta. Oferecemos alugueis
               para toda a família, manutenção profissional e passeios
              guiados pelos melhores pontos da região.
            </p>
            
            <div className="flex gap-4 pt-4 justify-center">
              <a
                href="#modelos"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all hover:scale-105"
              >
                Ver Modelos
              </a>
              <a
                href="#contato"
                className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-all hover:scale-105"
              >
                Entre em Contato
              </a>
            </div>
          </div>

          {/* Imagem à direita com gradiente */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-overlay-right z-10 rounded-2xl" />
            <img
              src={heroImage}
              alt="Bicicletário Itapuã"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
