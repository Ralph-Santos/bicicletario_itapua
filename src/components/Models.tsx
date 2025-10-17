import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bikeInfantil from "@/assets/bike-infantil.jpg";
import bikeAro26Urbana from "@/assets/bike-aro26-urbana.jpg";
import bikeAro26MTB from "@/assets/bike-aro26-mtb.jpg";
import bikeAro29MTB from "@/assets/bike-aro29-mtb.jpg";

const Models = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bikes = [
    {
      title: "Modelo Infantil",
      image: bikeInfantil,
      description: "Bicicletas seguras e coloridas para crianças",
    },
    {
      title: "Aro 26 Urbana",
      image: bikeAro26Urbana,
      description: "Perfeita para passeios pela cidade",
    },
    {
      title: "Aro 26 MTB",
      image: bikeAro26MTB,
      description: "Mountain bike para trilhas e aventuras",
    },
    {
      title: "Aro 29 MTB",
      image: bikeAro29MTB,
      description: "Alta performance para ciclistas experientes",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bikes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bikes.length) % bikes.length);
  };

  return (
    <section id="modelos" className="py-4 bg-muted/30 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-1 mt-14">
          Modelos de Bicicleta
        </h2>

        <div className="relative max-w-4xl mx-auto ">
          {/* Carrossel */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {bikes.map((bike, index) => (
                <div key={index} className="min-w-full">
                  <div className="aspect-[4/3]">
                    <img
                      src={bike.image}
                      alt={bike.title}
                      className="w-full h-full object-contain p-8"
                    />
                  </div>
                  <div className="p-4 text-center bg-gradient-to-t from-muted to-transparent py-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                      {bike.title}
                    </h3>
                    <p className="text-muted-foreground">{bike.description}</p>
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
            {bikes.map((_, index) => (
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

export default Models;
