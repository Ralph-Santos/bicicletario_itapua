import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import tour1 from "@/assets/tour-1.jpg";
import tour2 from "@/assets/tour-2.jpg";
import tour3 from "@/assets/tour-3.jpg";

const BikeTour = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const tours = [
    {
      image: tour1,
      caption: "Ciclovia à beira-mar de Itapuã",
    },
    {
      image: tour2,
      caption: "Passeio ao pôr do sol com vista para o Farol",
    },
    {
      image: tour3,
      caption: "Grupo de ciclistas nos mirantes da região",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tours.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tours.length) % tours.length);
  };

  return (
    <section id="biketour" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-6">
          Bike Tour Itapuã
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore os pontos mais belos de Itapuã com nossos passeios guiados.
          Rotas seguras, guias experientes e experiências inesquecíveis à
          beira-mar.
        </p>

        <div className="relative max-w-5xl mx-auto">
          {/* Carrossel */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {tours.map((tour, index) => (
                <div key={index} className="min-w-full relative">
                  <img
                    src={tour.image}
                    alt={tour.caption}
                    className="w-full h-[400px] md:h-[600px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                    <p className="text-white text-xl md:text-2xl font-semibold text-center">
                      {tour.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {tours.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeTour;
