import maintenanceImage from "@/assets/maintenance.jpg";

const Maintenance = () => {
  return (
    <section id="manutencao" className="py-[30px] text-center md:text-left">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Imagem à esquerda com gradiente */}
          <div className="relative animate-fade-in order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-overlay-left z-10 rounded-2xl" />
            <img
              src={maintenanceImage}
              alt="Manutenção de Bicicletas"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Texto à direita */}
          <div className="space-y-6 animate-fade-in order-1 md:order-2 flex flex-col justify-center iltems-center text-center ">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
              Manutenção Profissional
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Nossa oficina especializada oferece serviços completos de
              manutenção e reparo para sua bicicleta. Mecânicos experientes e
              equipamentos de qualidade garantem o melhor desempenho do seu
              equipamento.
            </p>
            <div className="space-y-3 ">
              <div className="flex items-start justify-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Revisão completa de freios, marchas e suspensão
                </p>
              </div>
              <div className="flex items-start justify-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Troca de peças e componentes com produtos originais
                </p>
              </div>
              <div className="flex items-start justify-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Regulagem e ajuste personalizado para seu conforto
                </p>
              </div>
              <div className="flex items-start justify-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">
                  Serviço rápido e garantia em todos os trabalhos realizados
                </p>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="#contato"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all hover:scale-105"
              >
                Agendar Manutenção
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maintenance;
